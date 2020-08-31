<?php

    class customerprofile
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->username = $_POST['username'];
            $this->email = mysqli_real_escape_string($this->mysqli,$_POST['email']);
            $this->password = mysqli_real_escape_string($this->mysqli,$_POST['password']);
            $this->confirm_password = $_POST['confirm_password'];
            $this->location = $_POST['location'];
            $this->phoneNo = $_POST['phone_number'];
            $this->private_password = $_POST['private_password'];
            $this->country = $_POST['country'];
            $this->state = $_POST['state'];
            $this->city = $_POST['city'];
            $this->customer_pic_dir = $_FILES['customer_pic_dir'];
        }

        public function customer_profile_update(){

            $filename = $this->customer_pic_dir['name'];
            $filesize = $this->customer_pic_dir['size'];
            $filetemp = $this->customer_pic_dir['tmp_name'];
            

            if (isset($_POST['pic_dir_submit'])) { 

                $cutomer_pic_path = mkdir("../customer_pics/".$_SESSION['customer_name']."-".$_SESSION['customer_update_time']);
                    
                if (is_uploaded_file($filetemp)) {
                
                    if ($filesize < 2000000) {
    
                        $upload = move_uploaded_file($filetemp,$customer_pic_path.'/'.$filename);
    
                        if ($upload == 1) {
                            
                            echo "Upload successful";
    
    
                        } else {
                            echo "Upload failed";
                        }
                        
    
                    } else {
                        echo "Picture size too large";
                    }
                    
    
                } else {
                    echo "Please upload a file";
                }
                

                $location = $customer_pic_path.'/'.$filename;
                    
                $location_query = " UPDATE customerprofile
                                    SET customerpicdir = $location";

                if ($location_query) {

                    echo " Picture updated successfully ";

                } else {
                    echo " Picture update failed ";
                }


            }

            if (isset($_POST['username_submit'])) { 

                    if (!empty($this->username)) {
                        $username = strip_tags($this->username);
                        $username_query = " UPDATE customerprofile
                                            SET customername = $username";
                        
                        if ($username_query) {

                            echo " Username updated successfully";

                        } else {
                            echo " Username update failed ";
                        }
                        

                    } else {
                       echo "Please enter username";
                    }
                

            }

            if (isset($_POST['email_submit'])) { 

                if (!empty($this->email)) {
                    $email = strip_tags($this->email);
                    $email_query = " UPDATE customerprofile
                                        SET customeremail = $email";

                    if ($email_query) {

                        echo " E-mail address updated successfully";

                    } else {
                        echo " E-mail update failed ";
                    }

                } else {
                   echo "Please enter E-mail";
                }

            }

            if (isset($_POST['phoneno_submit'])) { 

                if (!empty($this->phoneNo)) {
                    $phone_number = strip_tags($this->phoneNo);
                    $phone_number_query = " UPDATE customerprofile
                                            SET customerphoneno = $phone_number";

                    if ($phone_number_query) {

                        echo " Phone number updated successfully";

                    } else {
                        echo " Phone number failed ";
                    }

                } else {
                   echo "Please enter phone number";
                }

            }

            if (isset($_POST['privatepassword_submit'])) { 

                if (!empty($this->private_password)) {
                    $private_password = strip_tags($this->private_password);
                    $private_password_query = " UPDATE customerprofile
                                                SET privatepassword = $private_password";

                    if ($private_password_query) {

                        echo " Private password updated successfully";

                    } else {
                        echo " Private password update failed ";
                    }

                } else {

                   echo " Please enter private password ";

                }

            }


            if (isset($_POST['country_submit'])) { 

                if (!empty($this->country)) {
                    $country= strip_tags($this->country);
                    $country_query = " UPDATE customerprofile
                                       SET customercountry = $country";

                    if ($country_query) {

                        echo " Country updated successfully";

                    } else {
                        echo " Country update failed ";
                    }

                } else {

                   echo " Please enter country ";
                   
                }

            }



            if (isset($_POST['state_submit'])) { 

                if (!empty($this->state)) {
                    $state= strip_tags($this->state);
                    $state_query = " UPDATE customerprofile
                                     SET customerstate = $state";

                    if ($state_query) {

                        echo " State updated successfully ";

                    } else {
                        echo " State update failed ";
                    }

                } else {

                   echo " Please enter state ";
                   
                }

            }



            if (isset($_POST['city_submit'])) { 

                if (!empty($this->city)) {
                    $city= strip_tags($this->city);
                    $city_query = " UPDATE customerprofile
                                     SET customerstate = $city";

                    if ($city_query) {

                        echo " City updated successfully ";

                    } else {
                        echo " City update failed ";
                    }

                } else {

                   echo " Please enter city ";
                   
                }

            }


            if (isset($_POST['location_submit'])) { 

                if (!empty($this->location)) {
                    $location= strip_tags($this->location);
                    $location_query = " UPDATE customerprofile
                                        SET customerstate = $location";

                    if ($location_query) {

                        echo " Location updated successfully ";

                    } else {
                        echo " Location update failed ";
                    }

                } else {

                   echo " Please enter location ";
                   
                }

            }

        }
    }
    




?>