<?php
    session_start();

    class customerprofilepicture
    {
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');

        }

        public function customer_upload_pic(){
            
            $filename = $_FILES['customerpicdir']['name'];
            $filesize = $_FILES['customerpicdir']['size'];
            $filetemp = $_FILES['customerpicdir']['tmp_name'];

            $customer_pic_path = "../customer_pics/".$_SESSION['customer_name']."/".$filename;
            $file_extension = explode(".",$filename);
            $only_file_extension = strtolower(end($file_extension));
            $allowed_extensions = ["jpeg","jpg","png"];
            

            if (in_array($only_file_extension,$allowed_extensions) ) {
                
                if (is_uploaded_file($filetemp)) {
            
                    if ($filesize < 2000000) {
    
                        $upload = move_uploaded_file($filetemp,$customer_pic_path);
    
                        $sessionEmail = $_SESSION['customeremail'];
    
                        if ($upload == 1) {
                            
                            $location = $customer_pic_path;
    
                            $pic_location_query = " UPDATE customerprofile
                                                    SET customerpicdir = '$location'
                                                    WHERE customeremail = '$sessionEmail';";
    
                            $passQuery = $this->mysqli->query($pic_location_query);
    
                            if ($passQuery) {
    
                                echo " Picture updated successfully ";
    
                            } else {
                                echo " Picture update failed ". $sessionEmail . " " . $location. " ". $filename;
                            }
    
    
                        } else {
                            echo "Upload failed ";
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


    $customerpicture = new customerprofilepicture();
    $customerpicture->customer_upload_pic();
?>
