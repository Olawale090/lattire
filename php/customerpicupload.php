<?php
    session_start();

    class customerprofilepicture
    {
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');

            // $this->username = mysqli_real_escape_string($this->mysqli,$_POST['username']);
            // $this->file = $_FILES['customer_pic_dir'];
        }

        public function customer_upload_pic(){
            
            $filename = $_FILES['customer_pic_dir']['name'];
            $filesize = $_FILES['customer_pic_dir']['size'];
            $filetemp = $_FILES['customer_pic_dir']['tmp_name'];

            $date = date('Y-m-d-h-i-s');

            $cutomer_pic_path = mkdir("../customer_pics/".$_SESSION['customer_name']."-".$date);
                
            if (is_uploaded_file($filetemp)) {
            
                if ($filesize < 2000000) {

                    $upload = move_uploaded_file($filetemp,$customer_pic_path.'/'.$filename);
                    $sessionEmail = $_SESSION['customeremail'];

                    if ($upload == 1) {
                        
                        $location = $customer_pic_path.'/'.$filename;

                
                        $location_query = " UPDATE customerprofile
                                            SET customerpicdir = $location
                                            WHERE customeremail = $sessionEmail ";

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


    $customerpicture = new customerprofilepicture();
    $customerpicture->customer_upload_pic();
?>
