<?php

header('content-type: application/json');
echo json_encode([
'time' => time(),
'date' => date('d.m.Y'),
'tech' => 'Vercel',
'IP' => $_SERVER['REMOTE_ADDR']
]);

function getIPAddress() {
    //whether ip is from the share internet
     if(!emptyempty($_SERVER['HTTP_CLIENT_IP'])) {
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }
    //whether ip is from the proxy
    elseif (!emptyempty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
     }
//whether ip is from the remote address
    else{
             $ip = $_SERVER['REMOTE_ADDR'];
     }
     return $ip;
}
$ip = getIPAddress();
echo 'User Real IP Address - '.$ip;  