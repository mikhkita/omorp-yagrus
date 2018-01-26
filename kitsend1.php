<?php
	$url = "https://api.getresponse.com/v3/campaigns?query[name]=mk_workshop&page=1&perPage=100&sort[name]=asc";

		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Auth-Token: api-key 314a1e7a6132bd8f35779282ad3e7b25'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_GET, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		$result = curl_exec($ch);
		curl_close($ch);
		print_r($result);
		
		// if($result === "[]")
		// {

		// 	$json = json_encode([
		// 		'email' => $_POST["email"],
		// 		'campaign' => [
		// 			'campaignId' => "mk_workshop"
		// 		]
		// 	]);
			
		// 	$ch = curl_init($url);
		// 	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'X-Auth-Token: api-key 314a1e7a6132bd8f35779282ad3e7b25'));
		// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		// 	// curl_setopt($ch, CURLOPT_POST, 1);
		// 	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		// 	// curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

		// 	$result = curl_exec($ch);
		// 	print_r($result);
		// }
		// else
		// {
		// 	echo 1;
		// }
?>