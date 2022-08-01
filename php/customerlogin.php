<?php 
    session_start();
    class customer_authentication
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->email = mysqli_real_escape_string($this->mysqli, $_POST['email']);
            $this->password = mysqli_real_escape_string($this->mysqli, $_POST['password']);
        }

        public function database_connection(){
            if (mysqli_connect_errno()) {
                echo " Connection failed, please try again ";
            }
        }

        public function customer_validation(){
                
                if (!empty($this->email) && !empty($this->password)) {
                    
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = strip_tags($this->password); 

                    if ($email && $password) {
                        
                        $query = "SELECT * FROM customerprofile
                                  WHERE customeremail = '$email' AND customerpassword = '$password'";

                        $passQuery = $this->mysqli->query($query, MYSQLI_STORE_RESULT);
                        $customer_data = $passQuery->fetch_array(MYSQLI_ASSOC);


                        if ($customer_data['customeremail'] === $email && $customer_data['customerpassword'] === $password) {

                            echo json_encode($customer_data); 
                            $_SESSION['logged_customer_name'] = $customer_data['customername'];
                            $_SESSION['customeremail'] = $this->email;
                            
                        } else {
                            echo ' Account not found, please signup ';
                        }
                        

                    } else {
                       echo " Enter valid email or password ";
                    }

                } else {
                    echo " Email or Password is empty ";
                }

        }

       
    }

    $customer_auth = new customer_authentication();
    $customer_auth->database_connection();
    $customer_auth->customer_validation();

?>