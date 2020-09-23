<?php 
    
    session_start();

    interface customer_update{
        public function customer_email_update();
    }

    class customer_email implements customer_update
    {

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->email = mysqli_real_escape_string($this->mysqli,$_POST['email']);
        }


        public function customer_email_update(){

            if (!empty($this->email)) {

                $sessionEmail = $_SESSION['customeremail'];
                $email = strip_tags($this->email);

                $email_query = " UPDATE customerprofile
                                SET customeremail = '$email'
                                WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($email_query, MYSQLI_USE_RESULT); 

                if ($passQuery) {

                    echo " Email updated successfully";

                } else {
                    echo " Email failed ";
                }

            } else {
            echo "Please enter email";
            }

        }

    }


    $email = new customer_email();
    $email->customer_email_update();

?>