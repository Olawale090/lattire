<?php

    session_start();
    Interface Idelete_from_cart{

        public function database_connection();
        public function remove_one_carted_product();
        
    }

    class delete_carted_product implements Idelete_from_cart
    {
        
        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->productName = $_POST["cart_pr_name"];
            $this->customeremail = $_POST["cart_cust_email"];
        }

        

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function remove_one_carted_product (){

            $customer_email = $this->customeremail;
            $product_name = $this->productName;
        
            $query = " DELETE FROM customer_cart 
                       WHERE customer_email = '$customer_email' AND product_name = '$product_name' 
                    ";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            
            try {
                if ($passQuery) {

                    echo "Product removed from cart successfuly";
                    
                }else{
                    echo "Product removal failed";
                    
                }
            } catch (Exception $e){
                echo "Error in Query passed : ".$e;
            }
            

        }

    }

    $carter = new delete_carted_product();
    $carter->database_connection();
    $carter->remove_one_carted_product();

?>