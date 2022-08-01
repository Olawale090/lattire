<?php

    session_start();
    Interface Iproduct_in_cart{

        public function database_connection();
        public function carted_product_data();
        
    }

    class product_carter implements Iproduct_in_cart
    {
        
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->customer_email = $_SESSION['customeremail'];
            // $this->product_category =  $_SESSION['product_category'];
        }

        

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function carted_product_data (){

            $customer_email = $this->customer_email;
            // $product_category = $this->product_category;

            $query = " SELECT * FROM customer_cart 
                       WHERE customer_email = '$customer_email'
                    ";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            $passAllData = $passQuery->fetch_all(MYSQLI_ASSOC);
            
            try {
                if ($passAllData) {

                    echo json_encode($passAllData);
                    
                }else{
                    echo "Fetching failed ";
                    
                }
            } catch (Exception $e){
                echo "Error in Query passed : ".$e;
            }
            

        }

    }

    $carter = new product_carter();
    $carter->database_connection();
    $carter->carted_product_data();

?>