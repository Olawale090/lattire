<?php
    /*****************
     * PLEASE DON'T FORGET THAT MOST OF YOUR PATHS WILL HAVE TO CHANGED WHEN CALLING
     * THESE METHODS WITH AJAX. THE MYSQLI_REAL_ESCAPE_STRING MAY GIVE YOU PROBLEM IN THE LONG RUN
     * CHANGE IT TO STRIP TAGS
     *      
     * */


    // $db = mysqli_connect('localhost','root','','nodetest');

    $mysqli = new mysqli('localhost','root','','lattire');
    
    if ( mysqli_connect_errno() ) {
        echo "unable to connect to the database";
    }
    else {
        echo "database connected";
    }

    session_start();

    interface customerInterface {
        public function customer_login();

        public function customer_register();

        public function customer_profile();

        public function customer_session();
    }

    abstract class customer_authentication implements customerInterface{
        public $username;
        public $email;
        public $password;
        public $location;
        public $phoneNo;
        public $privatePassword;
        public $country;
        public $state;
        public $city;
        public $customer_pic_dir;

        public function __construct(){

            $this->username = $_POST['username'];
            $this->email = $_POST['email'];
            $this->password = $_POST['password'];
            $this->confirm_password = $_POST['confirm_password'];
            $this->address = $_POST['location'];
            $this->phoneNo = $_POST['phone_number'];
            $this->private_pfassword = $_POST['private_password'];
            $this->country = $_POST['country'];
            $this->state = $_POST['state'];
            $this->city = $_POST['city'];
            $this->customer_pic_dir = $_FILES['customer_pic_dir'];

            #customer session storage
            // $_SESSION['customer_name']
            
        }

        public function customer_login(){

            if (isset($_POST['submit'])) {
                
                if (!empty($this->email) && !empty($this->password)) {
                    
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = mysqli_real_escape_string($db,$this->password); 

                    if ($email && $password) {
                        
                        $query = "SELECT * FROM customersignup
                                  WHERE customeremail = " . $this->email .  "AND customerpassword = " . $this->password;

                        $passQuery = $mysqli->query($query, MYSQLI_USE_RESULT);

                        if ($passQuery) {

                            while ($customer_data = $passQuery->fetch_row(MYSQLI_ASSOC)) {
                                $_SESSION['customer_name'] = $customer_data['customername'];
                                $_SESSION['customer_email'] = $customer_data['customeremail'];
                                $_SESSION['customer_location'] = $customer_data['customeraddress'];
                                $_SESSION['customer_phoneno'] = $customer_data['customerphoneno'];
                                $_SESSION['customer_picdir'] = $customer_data['customerpicdir'];
                                $_SESSION['customer_country'] = $customer_data['customercountry'];
                                $_SESSION['customer_state'] = $customer_data['customerstate'];
                                $_SESSION['customer_city'] = $customer_data['customercity'];
                                $_SESSION['customer_privatepassword'] = $customer_data['privatepassword'];
                            }


                            header('Location: ../index.html');

                        } else {
                            echo ' Account not found, please create new account ';
                        }

                        $passQuery->free();
                        

                    } else {
                       echo " Enter valid email or password ";
                    }
                    


                } else {
                    echo " Email or Password is empty ";
                }
                


            }
        }

        
        
        public function customer_register(){
            if (isset($_POST['submit'])) {
                
                if (!empty($this->email) && !empty($this->password)) {
                    
                    $username = mysqli_real_escape_string($db, $this->username);
                    $email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
                    $password = mysqli_real_escape_string($db,$this->password);
                    $confirm_password = strip_tags($this->confirm_password); 

                    if (strcmp($password,$confirm_password)) {
                        
                        if ($username && $email && $password) {
                        
                            $query = "INSERT INTO customersignup
                                      VALUES ( '$username', '$email','$password')";
    
                            $passQuery = $mysqli->query($query, MYSQLI_USE_RESULT);
                            
                            $profile_query = "INSERT INTO customerprofile 
                                              VALUES ('','$username','$email','','','','','','','') ";

                            $passProfileQuery = $mysqli->query($profile_query, MYSQLI_USE_RESULT);

                            if ($passQuery && $passProfileQuery) {

                                header('Location: ../links/login.html');

                            } else {

                                echo ' Account not found, Please create account ';

                            }
    
                            // $passQuery->free();
                            
    
                        } else {
                           echo " Enter valid email or password ";
                        }

                    } else {
                        echo " Your password must match ";
                    }
                    

                } else {
                    echo " Please enter the empty field ";
                }
                

            }
        }


        public function customer_profile(){

            if (isset($_POST['username_submit'])) { 

                    if (!empty($this->username)) {
                        $username = strip_tags($this->username);
                        $username_query = " UPDATE customerprofile
                                            SET customername = $username";
                        
                        if ($username_query) {

                            echo " Username updated successfully";

                        } else {
                            echo " Username update failed ";
                        }
                        

                    } else {
                       echo "Please enter username";
                    }
                

            }

            if (isset($_POST['email_submit'])) { 

                if (!empty($this->email)) {
                    $email = strip_tags($this->email);
                    $email_query = " UPDATE customerprofile
                                        SET customeremail = $email";

                    if ($email_query) {

                        echo " E-mail address updated successfully";

                    } else {
                        echo " E-mail update failed ";
                    }

                } else {
                   echo "Please enter E-mail";
                }

            }

            if (isset($_POST['phoneno_submit'])) { 

                if (!empty($this->phoneNo)) {
                    $phone_number = strip_tags($this->phoneNo);
                    $phone_number_query = " UPDATE customerprofile
                                            SET customerphoneno = $phone_number";

                    if ($phone_number_query) {

                        echo " Phone number updated successfully";

                    } else {
                        echo " Phone number failed ";
                    }

                } else {
                   echo "Please enter phone number";
                }

            }




        }


    }



























































//     class Testing {
//         // public $usernamevalue = mysqli_real_escape_string($_POST['username']);



// $query = "INSERT INTO customerprofile
                        //           VALUES ('', '$customer_name','$customer_email','$customer_address',
                        //           '$customer_phoneno','$customer_pic_dir','$customer_country','$customer_state',
                        //           '$customer_city','$customer_privatePassword')";

                        // $passQuery = $mysqli->query($query, MYSQLI_USE_RESULT);

                        // if ($passQuery) {

                        //     header('Location: ../index.html');
                            
                        // } else {
                        //     echo ' Account not found, Please create account ';
                        // }

                        // $passQuery->free();


//         public function __construct(){
//             $this->username = $_POST['username']; //'olawale';
//             $this->password = $_POST['password'];
//         } 

//         public function callusername (){
            
//             if (isset($_POST['submit'])) {

//                 if (!empty($this->username) && !empty($this->password)) {

//                     $username = filter_input(INPUT_POST, $this->username, FILTER_VALIDATE_INT);
//                     $password = filter_input(INPUT_POST, $this->password, FILTER_VALIDATE_EMAIL);
                    
//                     if ($username && $password) {
//                         echo '<br> valid  username and password';
//                     } else {
//                         echo '<br> invalid username or password';
//                     }
                    
//                 } else {
//                     echo 'Field empty';
//                 }

//                 echo '<br> customer name: '.$this->username . '<br> customer password: '.$this->password;
//             }

//             // echo 'methods working : '. $this->username;
//         }

//         public function validate (){
//             $email = filter_var($this->username, FILTER_SANITIZE_EMAIL);
//             if (isset($_POST['submit'])) {
//                 if ( filter_input(INPUT_POST, $email, FILTER_VALIDATE_EMAIL) ) {
//                     echo "<p>" .$email."</p>";
//                 } else {
//                     echo "please enter a valid email address ";
//                 }
               
//             }
            
//         }
//     }

//     $testing = new Testing();
//     $testing->callusername();
//     // $testing->validate();

  // $customer_name = mysqli_real_escape_string($db, $this->username);
            // $customer_email = filter_var($this->email, FILTER_VALIDATE_EMAIL);
            // $customer_address = strip_tags($this->address);
            // $customer_phoneno = mysqli_real_escape_string($db, $this->phoneNo);
            // $customer_privatePassword = mysqli_real_escape_string($db, $this->privatePassword);
            // $customer_country = mysqli_real_escape_string($db, $this->country);
            // $customer_state = mysqli_real_escape_string($mysqli, $this->state);
            // $customer_city = mysqli_real_escape_string($mysqli, $this->city);
            // $customer_pic_dir = mysqli_real_escape_string($mysqli, $this->customer_pic_dir);

// ?>

<!-- <form action="customeraccount.php" method="post"> 
    <label for="username">Username</label> <br>
    <input type="text" name="username" placeholder="enter username"> <br>
    <label for="password">Password</label> <br>
    <input type="text" name="password" placeholder="enter password"> <br>
    <input type="submit" value="submit" name="submit">
</form> -->