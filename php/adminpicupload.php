<?php

session_start();

class admin_registration
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');

            $this->admin_name = mysqli_real_escape_string($this->mysqli, $_POST['admin_name']);
            $_SESSION['admin_name'] = $this->admin_name;

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
            
            $filename = $_FILES['admin_picture']['name'];
            $filesize = $_FILES['admin_picture']['size'];
            $filetemp = $_FILES['admin_picture']['tmp_name'];

            $admin_pic_path = "../admin_pics/".$_SESSION['admin_name']."/".$filename;
            $file_extension = explode(".",$filename);
            $only_file_extension = strtolower(end($file_extension));
            $allowed_extensions = ["jpeg","jpg","png"];
            

            if (in_array($only_file_extension,$allowed_extensions) ) {
                
                if (is_uploaded_file($filetemp)) {
            
                    if ($filesize < 2000000) {
    
                        $upload = move_uploaded_file($filetemp,$admin_pic_path);
    
                        $sessionEmail = $_SESSION['admin_email'];
    
                        if ($upload == 1) {
                            
                            $location = $admin_pic_path;

                            $pic_location_query = " UPDATE adminaccount
                                                    SET adminpicdir = '$location'
                                                    WHERE email = '$sessionEmail';";
    
                            $passQuery = $this->mysqli->query($pic_location_query);
    
                            if ($passQuery) {
    
                                echo " Picture uploaded successfully ";
    
                            } else {
                                echo " Picture upload failed ";
                            }
    
    
                        } else {
                            echo " Upload failed ";
                        }
                        
    
                    } else {
                        echo "Picture size too large";
                    }
                    
    
                } else {
                    echo "Please upload a file";
                }
    
    


            } else {
                echo "please upload image file alone. (Only jpg,jpeg and png is allowed)";
            }
            
        }


    }

    $admin_pic_upload = new admin_registration();
    $admin_pic_upload->database_connection();
    $admin_pic_upload->admin_upload_pic();



?>