<?php 
    
    session_start();

    interface customer_update{
        public function customer_city_update();
    }

    class customer_city implements customer_update
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->city = mysqli_real_escape_string($this->mysqli,$_POST['city']);
        }


        public function customer_city_update(){

            if (!empty($this->city)) {
                
                $sessionEmail = $_SESSION['customeremail'];

                $city= strip_tags($this->city);
                $city_query = " UPDATE customerprofile
                                SET customercity = '$city'
                                WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($city_query, MYSQLI_USE_RESULT);

                if ($passQuery) {

                    echo " City updated successfully ";

                } else {
                    echo " City update failed ";
                }

            } else {

               echo " Please enter city ";
               
            }

        }



    }

    $customer_city = new customer_city();
    $customer_city->customer_city_update();

?>