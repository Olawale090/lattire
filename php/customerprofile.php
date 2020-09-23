<?php
    session_start();
    class customerprofile
    {
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->username = mysqli_real_escape_string($this->mysqli,$_POST['username']);
            // $this->email = mysqli_real_escape_string($this->mysqli,$_POST['email']);
            // $this->phoneNo = mysqli_real_escape_string($this->mysqli,$_POST['phone_number']);
            // $this->private_password = mysqli_real_escape_string($this->mysqli,$_POST['private_password']);
            // $this->country = mysqli_real_escape_string($this->mysqli,$_POST['country']);
            // $this->state = mysqli_real_escape_string($this->mysqli,$_POST['state']);
            // $this->city = mysqli_real_escape_string($this->mysqli,$_POST['city']);
            // $this->location = mysqli_real_escape_string($this->mysqli,$_POST['location']);
        }

        public function customer_upload_pic(){
            
            $filename = $_FILES['customer_pic_dir']['name'];
            $filesize = $_FILES['customer_pic_dir']['size'];
            $filetemp = $_FILES['customer_pic_dir']['tmp_name'];

            if (isset($_POST['pic_dir_submit'])) { 

                $cutomer_pic_path = mkdir("../customer_pics/".$_SESSION['customer_name']."-".$_SESSION['customer_update_time']);
                    
                if (is_uploaded_file($filetemp)) {
                
                    if ($filesize < 2000000) {
    
                        $upload = move_uploaded_file($filetemp,$customer_pic_path.'/'.$filename);
    
                        if ($upload == 1) {
                            
                            $location = $customer_pic_path.'/'.$filename;
                    
                            $location_query = " UPDATE customerprofile
                                                SET customerpicdir = $location";

                            if ($location_query) {

                                echo " Picture updated successfully ";

                            } else {
                                echo " Picture update failed ";
                            }
    
    
                        } else {
                            echo "Upload failed";
                        }
                        
    
                    } else {
                        echo "Picture size too large";
                    }
                    
    
                } else {
                    echo "Please upload a file";
                }

            } 

        }

        public function customer_username_update(){

            $sessionEmail = $_SESSION['customeremail'];
             
                if (!empty($this->username)) {

                    $username = strip_tags($this->username);
                    $username_query = " UPDATE customerprofile
                                        SET customername = '$username'
                                        WHERE customeremail = '$sessionEmail';";

                    $passQuery = $this->mysqli->query($username_query,MYSQLI_USE_RESULT); 
                    
                    if ($passQuery) {

                        echo " Username updated successfully " .session_id() .' '. $username .' '. $sessionEmail;

                    } else {
                        echo " Username update failed ";
                    }
                    

                } else {
                   echo "Please enter username";
                }


            
        }




        // public function customer_email_update(){

        //         if (!empty($this->email)) {

        //             $sessionEmail = $_SESSION['customeremail'];
        //             $email = strip_tags($this->email);

        //             $email_query = " UPDATE customerprofile
        //                              SET customeremail = '$email'
        //                              WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($email_query, MYSQLI_USE_RESULT); 

        //             if ($passQuery) {

        //                 echo " Email updated successfully";

        //             } else {
        //                 echo " Email failed ";
        //             }

        //         } else {
        //            echo "Please enter email";
        //         }

        // }

        // public function customer_phoneNo_update(){ 

        //         if (!empty($this->phoneNo)) {

        //             $sessionEmail = $_SESSION['customeremail'];
        //             $phone_number = strip_tags($this->phoneNo);

        //             $phone_number_query = " UPDATE customerprofile
        //                                     SET customerphoneno = '$phone_number'
        //                                     WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($phone_number_query, MYSQLI_USE_RESULT); 

        //             if ($passQuery) {

        //                 echo " Phone number updated successfully";

        //             } else {
        //                 echo " Phone number failed ";
        //             }

        //         } else {
        //            echo "Please enter phone number";
        //         }

        // }


        // public function customer_private_password_update(){

        //         if (!empty($this->private_password)) {

        //             $sessionEmail = $_SESSION['customeremail'];

        //             $private_password = strip_tags($this->private_password);
        //             $private_password_query = " UPDATE customerprofile
        //                                         SET privatepassword = '$private_password'
        //                                         WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($private_password_query, MYSQLI_USE_RESULT);

        //             if ($passQuery) {

        //                 echo " Private password updated successfully";

        //             } else {
        //                 echo " Private password update failed ";
        //             }

        //         } else {

        //            echo " Please enter private password ";

        //         }

            
        // }
                                                                 
        // public function customer_country_update(){

        //         if (!empty($this->country)) {
                    
        //             $sessionEmail = $_SESSION['customeremail'];

        //             $country= strip_tags($this->country);
        //             $country_query = " UPDATE customerprofile
        //                                SET customercountry = '$country'
        //                                WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($country_query, MYSQLI_USE_RESULT);

        //             if ($passQuery) {

        //                 echo " Country updated successfully";

        //             } else {
        //                 echo " Country update failed ";
        //             }

        //         } else {

        //            echo " Please enter country ";
                   
        //         }

        // }

        // public function customer_state_update(){

        //         if (!empty($this->state)) {
        //             $sessionEmail = $_SESSION['customeremail'];

        //             $state= strip_tags($this->state);
        //             $state_query = " UPDATE customerprofile
        //                              SET customerstate = '$state'
        //                              WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($state_query, MYSQLI_USE_RESULT);

        //             if ($passQuery) {

        //                 echo " State updated successfully ";

        //             } else {
        //                 echo " State update failed ";
        //             }

        //         } else {

        //            echo " Please enter state ";
                   
        //         }

        // }


        // public function customer_city_update(){

        //         if (!empty($this->city)) {
        //             $sessionEmail = $_SESSION['customeremail'];

        //             $city= strip_tags($this->city);
        //             $city_query = " UPDATE customerprofile
        //                              SET customerstate = '$city'
        //                              WHERE customeremail = '$sessionEmail';";

        //             $passQuery = $this->mysqli->query($city_query, MYSQLI_USE_RESULT);

        //             if ($passQuery) {

        //                 echo " City updated successfully ";

        //             } else {
        //                 echo " City update failed ";
        //             }

        //         } else {

        //            echo " Please enter city ";
                   
        //         }

            

        // }


        // public function customer_location_update(){

        //         if (!empty($this->location)) {
        //             $sessionEmail = $_SESSION['customeremail'];

        //             $location= strip_tags($this->location);
        //             $location_query = " UPDATE customerprofile
        //                                 SET customerstate = '$location'
        //                                 WHERE customeremail = '$sessionEmail';";
        //             $passQuery = $this->mysqli->query($location_query, MYSQLI_USE_RESULT);

        //             if ($passQuery) {

        //                 echo " Location updated successfully ";

        //             } else {
        //                 echo " Location update failed ";
        //             }

        //         } else {

        //            echo " Please enter location ";
                   
        //         }

        //     }

    }
    

$customer_updates = new customerprofile();
$customer_updates->customer_username_update();
// $customer_updates->customer_email_update();
// $customer_updates->customer_phoneNo_update();
// $customer_updates->customer_private_password_update();
// $customer_updates->customer_country_update();
// $customer_updates->customer_state_update();
// $customer_updates->customer_city_update();
// $customer_updates->customer_location_update();
?>