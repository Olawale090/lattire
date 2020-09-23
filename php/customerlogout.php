<?php

session_start();

class customerlogout 
{

    public function __contruct(){
        $this->logout = $_POST['logout'];
    }

    public function logoutuser (){
        
            session_destroy();
            echo 'session deleted';
        
    }
    
}

$customerlogout = new customerlogout;
$customerlogout->logoutuser();



















?>