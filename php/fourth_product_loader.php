<?php

    Interface Ifetches{

        public function product_data();
        public function database_connection();
    }

    class product_fetch implements Ifetches
    {
        

        public function __construct(){

            $this->mysqli = new mysqli('localhost','root','','lattire');
            
        }

        

        public function database_connection(){

            if (mysqli_connect_errno()) {
                
                echo " Connection failed, please try again ";
            
            }

        }

        public function product_data (){

            $query = " SELECT * FROM productstable 
                       WHERE product_category = 'Furnitures'
                       LIMIT 6
                     ";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            $fetchAllData = $passQuery->fetch_all(MYSQLI_ASSOC);

            if ($fetchAllData) {

                echo json_encode($fetchAllData);
                
            }

        }

    }

    $product_loader = new product_fetch();
    $product_loader->database_connection();
    $product_loader->product_data();

?>