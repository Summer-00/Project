<?php

// header('contect-type:text/html;carest=utf8');

$key1=$_GET['username'];
$key2=$_GET['password'];
    $personArr=array(
        'username'=>"15757163421",
        'password'=>"a123456"
    )

        if($key1==$personArr.username&&$key2==$personArr.password){
            echo "Success"
        }
        else    {
            echo "fail"
        }
?>