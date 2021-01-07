<?php

    session_start();

    // interface Icustomerdata{
    //     public function customer_data();
    // }

    // class customerdata implements Icustomerdata
    class customerdata
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
        }

        public function customer_data (){
            $sessionEmail = $_SESSION['customeremail'];
            $query = " SELECT * FROM customerProfile 
                        WHERE customeremail = '$sessionEmail'";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            $fetchAllData = $passQuery->fetch_array(MYSQLI_ASSOC);

            $_SESSION['customer_name'] = $fetchAllData['customername'];

            if ($fetchAllData) {
                echo json_encode($fetchAllData);
            }
        }
    }
    
    $customerdata = new customerdata();
    $customerdata->customer_data();

?>