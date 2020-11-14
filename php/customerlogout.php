<?php

session_start();

class customerlogout 
{

    public function __contruct(){
        $this->logout = $_POST['logout'];
    }

    public function logoutuser (){
        
            session_destroy();
            echo 'You are logged out';
        
    }
    
}

$customerlogout = new customerlogout;
$customerlogout->logoutuser();



















?>