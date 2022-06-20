<?php
    /*****************
     * PLEASE DON'T FORGET THAT MOST OF YOUR PATHS WILL HAVE TO CHANGE WHEN CALLING
     * THESE METHODS WITH AJAX. THE MYSQLI_REAL_ESCAPE_STRING MAY GIVE YOU PROBLEM IN THE LONG RUN
     * CHANGE IT TO STRIP TAGS
     *      
     * */


    

    $mysqli = new mysqli('localhost','root','','lattire');

    session_start();

    class customer_authentication{
        

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');

            // $this->username = $_POST['username'];
            // $this->email = mysqli_real_escape_string($this->mysqli,$_POST['email']);
            // $this->password = mysqli_real_escape_string($this->mysqli,$_POST['password']);
            // $this->confirm_password = $_POST['confirm_password'];
            // $this->location = $_POST['location'];
            // $this->phoneNo = $_POST['phone_number'];
            // $this->private_password = $_POST['private_password'];
            // $this->country = $_POST['country'];
            // $this->state = $_POST['state'];
            // $this->city = $_POST['city'];
            // $this->customer_pic_dir = $_FILES['customer_pic_dir'];
            
        }
        
        

        


    }



    $customer_auth = new customer_authentication();
    // $customer_auth->customer_login();
    // $customer_auth->customer_register();
    // $customer_auth->customer_profile();

?>

