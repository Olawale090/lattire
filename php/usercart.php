<?php

    session_start();
    Interface Icarting{

        public function database_connection();
        public function carting_product_data();
        
    }

    class product_carting implements Icarting
    {
        

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->productid = $_POST["cartID"];
            $this->productcategory = $_POST["cartCateg"];
            $this->productname = $_POST["cartName"];
            $this->productdetails = $_POST["cartDetails"];
            $this->productprice = $_POST["cartPrice"];
            $this->productpic = $_POST["cartPic"];
            $this->customeremail = $_SESSION['customeremail'];
        }

        

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function carting_product_data (){

            $product_id = $this->productid;
            $product_categ = $this->productcategory;
            $product_name = $this->productname;
            $product_details = $this->productdetails;
            $product_price =  $this->productprice;
            $product_pic =  $this->productpic;
            $customer_email = $this->customeremail;
        
            $query = "INSERT INTO customer_cart(customer_email,product_id,product_category,product_name,product_details,product_price,productpicdir)

                        VALUES('$customer_email','$product_id','$product_categ','$product_name','$product_details','$product_price','$product_pic')";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            
            try {
                if ($passQuery) {

                    echo "carting sucessful";
                    $_SESSION['product_category'] = $product_categ;
                    
                }else{
                    echo "carting failed ";
                    
                }
            } catch (Exception $e){
                echo "Error in Query passed : ".$e;
            }
            

        }

    }

    $product_carter = new product_carting();
    $product_carter->database_connection();
    $product_carter->carting_product_data();

?>