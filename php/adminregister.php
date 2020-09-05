<?php

class admin_registration
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->admin_name = mysqli_real_escape_string($this->mysqli, $_POST['admin_name']);
            $this->admin_email = mysqli_real_escape_string($this->mysqli, $_POST['admin_email']);
            $this->personal_identification_key = mysqli_real_escape_string($this->mysqli, $_POST['admin_personal_identification_key']);
            $this->admin_password = mysqli_real_escape_string($this->mysqli, $_POST['admin_password']);
            $this->admin_confirm_password = mysqli_real_escape_string($this->mysqli, $_POST['admin_confirm_password']);
        }

        public function database_connection(){
            if (mysqli_connect_errno()) {
                echo " Connection failed, please try again ";
            }
        }

        public function admin_upload_pic(){
            session_start();
            
            $filename = $_FILES['admin_picture']['name'];
            $filesize = $_FILES['admin_picture']['size'];
            $filetemp = $_FILES['admin_picture']['tmp_name'];

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

        
        public function admin_signup(){
                
            // if (isset($_POST['admin_submit'])) {

                if (!empty($this->admin_name) && !empty($this->admin_email) && !empty($this->personal_identification_key) && !empty($this->admin_password) && !empty($this->admin_confirm_password)) {
                    
                    $username = strip_tags($this->admin_name);
                    $email = filter_var($this->admin_email, FILTER_VALIDATE_EMAIL);
                    $password = strip_tags($this->admin_password);
                    $identification_pin = strip_tags($this->personal_identification_key);
                    $confirm_password = strip_tags($this->admin_confirm_password); 

                    if ($password === $confirm_password) {
                        
                        if ($username && $email && $password) {

                            $admin_exist_query = "SELECT * FROM adminaccount 
                                                  WHERE email = '$email'";

                            $admin_exist_passQuery = $this->mysqli->query($admin_exist_query, MYSQLI_USE_RESULT);

                            $admin_passQuery_data = $admin_exist_passQuery->fetch_array(MYSQLI_ASSOC);

                            
                            if ( $admin_passQuery_data['email'] === $email ) {

                                echo " This account already exist, please login. ";

                            }else {

                                $query = "INSERT INTO adminaccount(username,email,adminpassword,identificationpin)
                                          VALUES ( '$username', '$email','$password','$identification_pin')";

                                $passQuery = $this->mysqli->query($query, MYSQLI_USE_RESULT);

                                if ($passQuery) {

                                    echo 'Form submitted successfuly : ';
    
                                } else {
    
                                    echo ' Form not submitted please try again.';
    
                                } 
                            }
    
                        } else {
                           echo " Please enter valid email or username ";
                        }

                    } else {
                        echo " Your password must match ";
                    }
                    

                } else {
                    echo " Please fill the empty field(s) ";
                }
            // }     
         
        }
    }
    
    $admin_reg = new admin_registration();
    $admin_reg->database_connection();
    $admin_reg->admin_signup();



?>