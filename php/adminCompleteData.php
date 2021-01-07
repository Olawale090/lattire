<?php

    session_start();
    class administratordata 
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
        }

        public function admin_complete_data (){

            $sessionEmail = $_SESSION['admin_email'];

            $query = " SELECT * FROM adminaccount 
                        WHERE email = '$sessionEmail'";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);

            $fetchAllData = $passQuery->fetch_array(MYSQLI_ASSOC);

            if ($fetchAllData) {

                echo json_encode($fetchAllData);

            }else{

                echo "error occured ";
                
            }
        }
    }
    
    $admindata = new administratordata();
    $admindata->admin_complete_data();

?>