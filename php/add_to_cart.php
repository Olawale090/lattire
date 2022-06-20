<?php

    session_start();
    interface Imethods{
        public function database_connection();
        public function addProduct();
    }

    class addToCart implements Imethods
    {
        public function __contruct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
        }

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function addProduct(){
            
            $customerName = $_SESSION['customer_name'];

            // $query = " INSERT INTO customer_cart(customer_name,product_id,product_category,product_name,product_details,product_price,productpicdir)
            //            VALUES('$customerName') 
            //         ";

            // $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            // $fetchAllData = $passQuery->fetch_array(MYSQLI_ASSOC);
            // $_SESSION['customer_name'] = $fetchAllData['customername'];

            if ($customerName) {
                echo $customerName;
            }
        }
    }
    


    $push_to_cart = new addToCart();
    $push_to_cart->database_connection();
    $push_to_cart->addProduct();




?>