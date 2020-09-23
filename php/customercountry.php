<?php 
    
    session_start();

    // interface customer_update{
    //     public function customer_private_password_update();
    // }

    // class customer_country  implements customer_update

    class customer_country 
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->country = mysqli_real_escape_string($this->mysqli,$_POST['country']);
        }


        public function customer_country_update(){

            if (!empty($this->country)) {
                
                $sessionEmail = $_SESSION['customeremail'];

                $country= strip_tags($this->country);
                $country_query = " UPDATE customerprofile
                                   SET customercountry = '$country'
                                   WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($country_query, MYSQLI_USE_RESULT);

                if ($passQuery) {

                    echo " Country updated successfully";

                } else {
                    echo " Country update failed ";
                }

            } else {

               echo " Please enter country ";
               
            }

        }

    }

    $customer_country = new customer_country();
    $customer_country->customer_country_update();

?>