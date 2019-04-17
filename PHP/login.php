<?php
  $data = json_decode(file_get_contents("php://input"));
  $uid = $data->userId;
  $pass = $data->password;

  //echo($uid.' '.$pass);

  if($uid === "admin") {
    if($pass === "test123"){
      $str = '[{
        "success" : true,
        "message" : "Data retrieved",
        "result":[{
          "token" : "abcrtAb"
        }]
      }]';
    } else {
      $str = '[{
        "success" : false,
        "message" : "Wrong password",
        "result":[]
      }]';
    }
  } else {
    $str = '[{
      "success" : false,
      "message" : "Wrong user id",
      "result":[]
    }]';
  }


 echo($str);

 ?>
