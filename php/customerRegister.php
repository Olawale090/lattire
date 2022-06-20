<?php
    session_start();
    class customer_registration
    {
        public function constructor_props(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->username = mysqli_real_escape_string($this->mysqli, $_POST['username']);
            $_SESSION['customer_name'] = $this->username;
            $this->email = mysqli_real_escape_string($this->mysqli, $_POST['email']);
            $_SESSION['customeremail'] = $this->email;
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
                    
                    $username = strip_tags($this->username);
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = strip_tags($this->password);
                    $confirm_password = strip_tags($this->confirm_password); 

                    if ($password === $confirm_password) {
                        
                        if ($username && $email && $password) {

                            $customer_exist_query = "SELECT * FROM customerprofile 
                                                     WHERE customeremail = '$email'";

                            $customer_exist_passQuery = $this->mysqli->query($customer_exist_query, MYSQLI_USE_RESULT);
                            $customer_passQuery_data = $customer_exist_passQuery->fetch_array(MYSQLI_ASSOC);

                              // echo substr_compare($customer_passQuery_data['email'],$email,0,strlen($customer_passQuery_data['email']));

                            if ( substr_compare($customer_passQuery_data['customeremail'],$email,0,strlen($email)) > -1) {
                               
                                    echo "This account already exist, please login "; 

                            }else {

                                $query = "INSERT INTO customersignup(customername,customeremail,customerpassword)
                                          VALUES ( '$username','$email','$password')";

                                $passQuery = $this->mysqli->query($query, MYSQLI_USE_RESULT);

                                $profile_query = "INSERT INTO customerprofile(customername,customeremail,customerpassword) 
                                                  VALUES ('$username','$email','$password')";

                                $passProfileQuery = $this->mysqli->query($profile_query, MYSQLI_USE_RESULT);
                                

                                if ($passQuery && $passProfileQuery) {
                                    
                                    mkdir("../customer_pics/".$username);

                                    // $_SESSION['USERNAME'] = mysqli_real_escape_string($this->mysqli, $_POST['username']);

                                    echo ' Form submitted successfuly ';
    
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
    $customer_reg->constructor_props();
    $customer_reg->database_connection();
    $customer_reg->customer_signup();

?>