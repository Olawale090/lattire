<?php

    class customer_registration
    {
        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->username = mysqli_real_escape_string($this->mysqli, $_POST['username']);
            $this->email = mysqli_real_escape_string($this->mysqli, $_POST['email']);
            $this->password = mysqli_real_escape_string($this->mysqli, $_POST['password']);
            $this->confirm_password = mysqli_real_escape_string($this->mysqli, $_POST['confirm_password']);
        }

        public function database_connection(){
            if (mysqli_connect_errno()) {
                echo " Connection failed, please try again ";
            }
        }

        
        public function customer_signup(){
                
                if (!empty($this->username) && !empty($this->email) && !empty($this->password)) {
                    
                    session_start();
                    $_SESSION['username'] = mysqli_real_escape_string($this->mysqli, $_POST['username']);
                    
                    $username = strip_tags($this->username);
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = strip_tags($this->password);
                    $confirm_password = strip_tags($this->confirm_password); 

                    if ($password === $confirm_password) {
                        
                        if ($username && $email && $password) {

                            $customer_exist_query = "SELECT customeremail FROM customerprofile 
                                                     WHERE customeremail = '$email'";

                            $customer_exist_passQuery = $this->mysqli->query($customer_exist_query, MYSQLI_USE_RESULT);

                            $customer_passQuery_data = $customer_exist_passQuery->fetch_array(MYSQLI_ASSOC);

                            
                            if ( $customer_passQuery_data['customeremail'] === $email) {

                                echo " This account already exist, please login ";

                            }else {

                                $query = "INSERT INTO customersignup(customeremail,customername,customerpassword)
                                          VALUES ( '$email', '$username','$password')";

                                $passQuery = $this->mysqli->query($query, MYSQLI_USE_RESULT);

                                $profile_query = "INSERT INTO customerprofile(customername,customeremail,customerpassword) 
                                                  VALUES ('$username','$email','$password')";

                                $passProfileQuery = $this->mysqli->query($profile_query, MYSQLI_USE_RESULT);

                                if ($passQuery && $passProfileQuery) {

                                    echo 'Form submitted successfuly';
    
                                } else {
    
                                    echo ' Form not submitted please try again.';
    
                                } 
                            }
    
                        } else {
                           echo " Pleaae enter valid email ";
                        }

                    } else {
                        echo " Your password must match ";
                    }
                    

                } else {
                    echo " Please fill the empty field(s) ";
                }
         
        }
    }
    
    $customer_reg = new customer_registration();
    $customer_reg->database_connection();
    $customer_reg->customer_signup();

?>