<?php 
    
    session_start();

    interface customer_update{
        public function customer_state_update();
    }

    class customer_state  implements customer_update
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->state = mysqli_real_escape_string($this->mysqli,$_POST['state']);;
        }


        public function customer_state_update(){

            if (!empty($this->state)) {
                $sessionEmail = $_SESSION['customeremail'];

                $state= strip_tags($this->state);
                $state_query = " UPDATE customerprofile
                                 SET customerstate = '$state'
                                 WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($state_query, MYSQLI_USE_RESULT);

                if ($passQuery) {

                    echo " State updated successfully ";

                } else {
                    echo " State update failed ";
                }

            } else {

               echo " Please enter state ";
               
            }

        }


    }

    $customer_state = new customer_state();
    $customer_state->customer_state_update();

?>