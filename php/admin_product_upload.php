<?php 
    session_start();
    class product_upload
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire'); 
            $this->product_category = mysqli_real_escape_string($this->mysqli, $_POST['product_category']);

            $_SESSION['product_category_name'] = $this->product_category;

            $this->product_name = mysqli_real_escape_string($this->mysqli, $_POST['product_name']);

            $_SESSION['product_name'] = $this->product_name;

            $this->product_details = mysqli_real_escape_string($this->mysqli, $_POST['product_details']);
            $this->product_price = mysqli_real_escape_string($this->mysqli, $_POST['product_price']);
            $this->product_quantity = mysqli_real_escape_string($this->mysqli, $_POST['product_quantity']);
            $this->product_type = mysqli_real_escape_string($this->mysqli, $_POST['dress_type']);
            $this->product_size = mysqli_real_escape_string($this->mysqli, $_POST['dress_size']);
            $this->product_material = mysqli_real_escape_string($this->mysqli, $_POST['dress_material']);
            $this->product_maker = mysqli_real_escape_string($this->mysqli, $_POST['dress_maker']); 

        }

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        
        public function administrator_product_upload(){
                
                if (!empty($this->product_category) && !empty($this->product_name) && !empty($this->product_details)
                    && !empty($this->product_price) && !empty($this->product_quantity) && !empty($this->product_type)
                    && !empty($this->product_size) && !empty($this->product_material) && !empty($this->product_maker)) {
                        
                    try {
                            $prd_category = strip_tags($this->product_category);
                            $prd_name = strip_tags($this->product_name);
                            $prd_details = strip_tags($this->product_details);
                            $prd_price = strip_tags($this->product_price);
                            $prd_quantity = strip_tags($this->product_quantity);
                            $prd_type = strip_tags($this->product_type);
                            $prd_size = strip_tags($this->product_size);
                            $prd_material = strip_tags($this->product_material);
                            $prd_maker = strip_tags($this->product_maker);

                            $product_exist_query = "SELECT * FROM productstable 
                                                    WHERE product_name = '$prd_name'";

                            $product_exist_queried = $this->mysqli->query($product_exist_query);
                            $product_exist_check = $product_exist_queried->fetch_array(MYSQLI_ASSOC);

                           
                                                        
                            if ( $product_exist_check["product_name"] == $prd_name) {
                                
                                echo " This product already exist " . $_SESSION['product_name'];
                                    
                            } else {

                                $path = "../product_categories/".$_SESSION['product_category_name'];

                                if (is_dir($path)) {

                                    $attach_directory = mkdir($path."/".$_SESSION['product_name']);

                                    if ($attach_directory) {
                                        
                                        $product_upload_query = "INSERT INTO productstable (product_category,product_name,product_details,product_price,product_quantity,
                                                                             product_type,product_size,product_material,product_maker)

                                                                             VALUES ('$prd_category','$prd_name','$prd_details','$prd_price','$prd_quantity','$prd_type','$prd_size','$prd_material','$prd_maker')
                                                                ";

                                        $product_upload_insert = $this->mysqli->query($product_upload_query, MYSQLI_USE_RESULT);


                                        if ($product_upload_insert) {

                                            echo ' Form submitted successfuly ' . $_SESSION['product_name'];
        
                                        }

                                    }
                                
                                }else {
                                    
                                    $make_path = mkdir("../product_categories/".$_SESSION['product_category_name']);

                                    if($make_path){
                                        
                                        $product_upload_query = "INSERT INTO productstable (product_category,product_name,product_details,product_price,product_quantity,
                                                                product_type,product_size,product_material,product_maker)

                                                                VALUES ('$prd_category','$prd_name','$prd_details','$prd_price','$prd_quantity','$prd_type','$prd_size','$prd_material','$prd_maker')           

                                                                ";

                                        $product_upload_insert = $this->mysqli->query($product_upload_query, MYSQLI_USE_RESULT);


                                        if ($product_upload_insert) {
                                    
                                            mkdir("../product_categories/".$_SESSION['product_category_name']."/".$_SESSION['product_name']);
                                            echo ' Form submitted successfuly ' . $_SESSION['product_category_name'];
        
                                        }
                                    }else {

                                        echo " The product picture folder for this log already exist ";

                                    }

                                }
                               

                            } 

                            // throw new Exception("Error Processing Request");

                    } catch (Exception $err) {

                        echo $err;
                        echo ' Form not submitted, please check your inputs and try again. ';

                    }

                }else {

                    echo " Please fill the empty field(s) " . $_SESSION['product_category_name'];

                }
         
        }

    }

    $admin_upload_product = new product_upload();
    $admin_upload_product->database_connection();
    $admin_upload_product->administrator_product_upload();
?>