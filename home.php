<?php $page_name = "Material CSS KIT"; include "_header.php"; ?>

<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://45.76.162.107/v8/api/api/main/app?appKey=phptravels&lang=ar&currency=usd',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'Cookie: ci_session=nr6lu36bbg30m58a2vo46qd9e9k2mpu3'
    ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>

<?php include "_footer.php"; ?>