<?php 

        session_start();

        class product_picture_upload
        {
            public function __construct(){

                $this->mysqli = new mysqli('localhost','root','','lattire');

            }

            public function database_connection(){

                if (mysqli_connect_errno()) {

                    echo " Connection failed, please try again ";
                    
                }

            }

            public function upload_pic(){
                
                $filesize = $_FILES['product_picture']['size'];
                $filename = $_FILES['product_picture']['name'];
                $filetemp = $_FILES['product_picture']['tmp_name'];
                $fileerror = $_FILES['product_picture']['error'];

                $product_pic_path = "../product_categories/".$_SESSION['product_category_name']."/".$_SESSION['product_name']."/".$filename;
                $file_extension = explode(".",$filename);
                $only_file_extension = strtolower(end($file_extension));
                $allowed_extensions = ["jpeg","jpg","png"];
                

                if ( in_array($only_file_extension,$allowed_extensions) ) {
                    
                    if (is_uploaded_file($filetemp)) {
                
                        if ($filesize < 2000000) {

                            $upload = move_uploaded_file($filetemp, $product_pic_path);

                            $productName = $_SESSION['product_name'];

                            if ( $upload == 1 ) {
                                
                                $location = $product_pic_path;

                                $pic_location_query = " UPDATE productstable
                                                        SET productpicdir = '$location'
                                                        WHERE product_name = '$productName';";

                                $passQuery = $this->mysqli->query($pic_location_query);

                                if ($passQuery) {

                                    echo " Picture uploaded successfully ";

                                } else {

                                    echo " Picture upload failed ";

                                }


                            } else {

                                echo " Upload failed " . $product_pic_path;

                            }
                            

                        } else {
                            echo " Picture size too large ";
                        }
                        

                    } else {
                        echo "Please upload a file";
                    }




                } else {
                    echo "please upload image file alone. (Only jpg,jpeg and png is allowed)";
                }
                
            }


        }

        $product_pic_upload = new product_picture_upload();
        $product_pic_upload->database_connection();
        $product_pic_upload->upload_pic();





?>