<?php 
    
    session_start();

    interface customer_update{
        public function customer_phoneNo_update();
    }

    class customer_phone  implements customer_update
    {

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->phoneNo = mysqli_real_escape_string($this->mysqli,$_POST['phone_number']);
        }


        public function customer_phoneNo_update(){ 

            if (!empty($this->phoneNo)) {

                $sessionEmail = $_SESSION['customeremail'];
                $phone_number = strip_tags($this->phoneNo);

                $phone_number_query = " UPDATE customerprofile
                                        SET customerphoneno = '$phone_number'
                                        WHERE customeremail = '$sessionEmail';";

                $passQuery = $this->mysqli->query($phone_number_query, MYSQLI_USE_RESULT); 

                if ($passQuery) {

                    echo " Phone number updated successfully";

                } else {
                    echo " Phone number failed ";
                }

            } else {
               echo "Please enter phone number";
            }

    }
    }

    $customer_phone = new customer_phone();
    $customer_phone->customer_phoneNo_update();

?>