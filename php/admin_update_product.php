<?php 

    class admin_product_update
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


        public function administrator_product_update(){
                
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

                        $product_exist_query = "UPDATE productstable

                                                SET 
                                                    product_details = '$prd_details',
                                                    product_price = '$prd_price',
                                                    product_quantity = '$prd_quantity',
                                                    product_type = '$prd_type',
                                                    product_size = '$prd_size',
                                                    product_material = '$prd_material',
                                                    product_maker = '$prd_maker'
                                                
                                                WHERE product_name = '$prd_name'
                                                AND product_category = '$prd_category'
                                                ";

                        $product_exist_queried = $this->mysqli->query($product_exist_query);
                        
                        if($product_exist_queried){

                            echo "Data updated successfully";

                        }else{

                            echo " Data not updated ";

                        }
                       

                        // throw new Exception("Error Processing Request");

                } catch (Exception $err) {

                    echo $err;
                    echo ' Form not submitted, please check your inputs and try again. ';

                }

            }else {

                echo " Please fill the empty field(s) ";

            }
     
        }

    }

    $product_update = new admin_product_update();
    $product_update->database_connection();
    $product_update->administrator_product_update();
    

?>