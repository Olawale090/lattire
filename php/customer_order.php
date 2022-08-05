<?php

    session_start();
    Interface Iproduct_order{

        public function database_connection();
        public function product_order();
        
    }

    class order implements Iproduct_order
    {
        

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->productid = $_POST["product_id"];
            $this->productcategory = $_POST["product_category"];
            $this->productname = $_POST["product_name"];
            $this->productdetails = $_POST["product_details"];
            $this->productprice = $_POST["product_price"];
            $this->productpic = $_POST["product_pic_dir"];
            $this->customeremail = $_POST["customer_email"];
        }

        

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function product_order (){

            $product_id = $this->productid;
            $product_categ = $this->productcategory;
            $product_name = $this->productname;
            $product_details = $this->productdetails;
            $product_price =  $this->productprice;
            $product_pic =  $this->productpic;
            $customer_email = $this->customeremail;
        
            $query = "INSERT INTO customer_order(customer_email,product_id,product_category,product_name,product_details,product_price,productpicdir)

                        VALUES('$customer_email','$product_id','$product_categ','$product_name','$product_details','$product_price','$product_pic')";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            
            try {
                if ($passQuery) {

                    echo $product_name." ordered sucessfully";
                    
                }else{
                    echo "carting failed ";
                    
                }
            } catch (Exception $e){
                echo "Error in Query passed : ".$e;
            }
            

        }

    }

    $product_order = new order();
    $product_order->database_connection();
    $product_order->product_order();

?>