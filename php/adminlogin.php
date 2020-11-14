<?php 
    session_start();

     class administrator_authentication
    {

        public function __construct(){
            $this->mysqli = new mysqli('localhost','root','','lattire');
            $this->email = mysqli_real_escape_string($this->mysqli, $_POST['admin_email']);
            $_SESSION['admin_email'] = $this->email;

            $this->pik = mysqli_real_escape_string($this->mysqli, $_POST['admin_personal_identification_key']);
            $this->password = mysqli_real_escape_string($this->mysqli, $_POST['admin_password']);
        }

        public function database_connection(){
            if (mysqli_connect_errno()) {
                echo " Connection failed, please try again ";
            }
        }

        public function administrator_validation(){
                
                if (!empty($this->email) && !empty($this->password) && !empty($this->pik)) {
                    
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = strip_tags($this->password);
                    $pik = strip_tags($this->pik); 

                    if ($email && $password && $pik) {
                        
                        $query = "SELECT * FROM adminaccount
                                  WHERE email = '$email' AND adminpassword = '$password'";

                        $passQuery = $this->mysqli->query($query, MYSQLI_STORE_RESULT);
                        $admin_data = $passQuery->fetch_array(MYSQLI_ASSOC);

                        if ($admin_data['email'] === $email && $admin_data['adminpassword'] === $password && $admin_data['identificationpin'] === $pik) {

                            // json_encode($admin_data);
                            echo "Login successful"; 
                            
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


    $admin_login = new administrator_authentication();
    $admin_login->database_connection();
    $admin_login->administrator_validation();
?>