<?php
	require_once("phpmail.php");

	$email_admin = "course.lead@transfiguration.agency";

	$from = "Мастер-класс для предпринимателей и маркетологов";
	$email_from = "info@transfiguration.agency";

	$deafult = array("name"=>"Имя","phone"=>"Телефон", "email"=>"E-mail");

	$fields = array();

	if( count($_POST) ){

		foreach ($deafult  as $key => $value){
			if( isset($_POST[$key]) ){
				$fields[$value] = $_POST[$key];
			}
		}

		$i = 1;
		while( isset($_POST[''.$i]) ){
			$fields[$_POST[$i."-name"]] = $_POST[''.$i];
			$i++;
		}

		$subject = $_POST["subject"];

		$title = "Поступила заявка с сайта ".$from.":\n";

		$message = "<div><h3 style=\"color: #333;\">".$title."</h3>";

		foreach ($fields  as $key => $value){
			$message .= "<div><p><b>".$key.": </b>".$value."</p></div>";
		}
			
		$message .= "</div>";
		
		if(send_mime_mail("Лендинг ".$from,$email_from,$name,$email_admin,'UTF-8','UTF-8',$subject,$message,true)){	
			echo "1";
		}else{
			echo "0";
		}

		$url = "https://api.getresponse.com/v3/contacts";
		if(isset($_POST["email"])){

			$ch = curl_init($url . "?query[campaignId]=ngVgz&query[email]=" . $_POST["email"]);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Auth-Token: api-key 314a1e7a6132bd8f35779282ad3e7b25'));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_GET, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

			$result = curl_exec($ch);
			curl_close($ch);
			
			if($result === "[]")
			{

				$json = json_encode([
					'email' => $_POST["email"],
					'campaign' => [
						'campaignId' => "ngVgz"
					]
				]);
				
				$ch = curl_init($url);
				curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Auth-Token: api-key 314a1e7a6132bd8f35779282ad3e7b25'));
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_POST, 1);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

				$result = curl_exec($ch);
				//echo $result;
				$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
				curl_close($ch); 
				if($result === "[]")
				{
					// echo 0;
				}
				else
				{
					// echo 1;
				}
			}
			else
			{
				// echo 1;
			}
		}
	}
?>