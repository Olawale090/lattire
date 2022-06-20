<?php 
    
    session_start();

    // interface customer_update{
    //     public function customer_location_update();
    // }

    // class customer_location implements customer_update

    class customer_location
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->location = mysqli_real_escape_string($this->mysqli,$_POST['location']);
        }


        public function customer_location_update(){

            if (!empty($this->location)) {
                $sessionEmail = $_SESSION['customeremail'];

                $location= strip_tags($this->location);
                $location_query = " UPDATE customerprofile
                                    SET customerlocation = '$location'
                                    WHERE customeremail = '$sessionEmail';";
                $passQuery = $this->mysqli->query($location_query, MYSQLI_USE_RESULT);

                if ($passQuery) {

                    echo " Location updated successfully ";

                } else {
                    echo " Location update failed ";
                }

            } else {

               echo " Please enter location ";
               
            }

        }


    }

    $customer_location = new customer_location();
    $customer_location->customer_location_update();

?>