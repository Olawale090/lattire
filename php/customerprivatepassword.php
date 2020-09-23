<?php 
    
    session_start();

    // interface customer_update{
    //     public function customer_private_password_update();
    // }

    // class customer_private_password  implements customer_update

    class customer_private_password 
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->private_password = mysqli_real_escape_string($this->mysqli,$_POST['private_password']);
        }


        public function customer_private_password_update(){

            if (!empty($this->private_password)) {

                $sessionEmail = $_SESSION['customeremail'];

                $private_password = strip_tags($this->private_password);
                $private_password_query = " UPDATE customerprofile
                                            SET privatepassword = '$private_password'
                                            WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($private_password_query, MYSQLI_USE_RESULT);

                if ($passQuery) {

                    echo " Private password updated successfully";

                } else {
                    echo " Private password update failed ";
                }

            } else {

               echo " Please enter private password ";

            }

        
        }
    }

    $customer_private_password = new customer_private_password();
    $customer_private_password->customer_private_password_update();

?>