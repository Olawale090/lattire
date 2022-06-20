<?php
    session_start();
    class customerprofile
    {
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->username = mysqli_real_escape_string($this->mysqli,$_POST['username']);
    
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

    }
    

$customer_updates = new customerprofile();
$customer_updates->customer_username_update();
?>