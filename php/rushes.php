<?php

// $db = mysqli_connect('localhost','root','','nodetest');

 // if ( mysqli_connect_errno() ) {
    //     echo "unable to connect to the database";
    // }
    // else {
    //     echo "database connected";
    // }

     // interface customerInterface {
    //     public function customer_login();

    //     public function customer_register();

    //     public function customer_profile();

    //     public function customer_session();
    // }

    // public $username;
        // public $email;
        // public $password;
        // public $location;
        // public $phoneNo;
        // public $privatePassword;
        // public $country;
        // public $state;
        // public $city;
        // public $customer_pic_dir;

         // while ($customer_data = $passQuery->fetch_all(MYSQLI_ASSOC)) {
                            //     $_SESSION['customer_id'] = $customer_data['id'];
                            //     $_SESSION['customer_name'] = $customer_data['customername'];
                            //     $_SESSION['customer_email'] = $customer_data['customeremail'];
                            //     $_SESSION['customer_location'] = $customer_data['customeraddress'];
                            //     $_SESSION['customer_phoneno'] = $customer_data['customerphoneno'];
                            //     $_SESSION['customer_picdir'] = $customer_data['customerpicdir'];
                            //     $_SESSION['customer_country'] = $customer_data['customercountry'];
                            //     $_SESSION['customer_state'] = $customer_data['customerstate'];
                            //     $_SESSION['customer_city'] = $customer_data['customercity'];
                            //     $_SESSION['customer_privatepassword'] = $customer_data['privatepassword'];
                            //     $_SESSION['customer_update_time'] = $customer_data['updatetime'];
                            // }




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




            // public function customer_session(){
            //     session_start();
            //     $customer_id = $_SESSION['customer_id'];
            //     $customer_name = $_SESSION['customer_name'];
            //     $customer_email = $_SESSION['customer_email'];
            //     $customer_address = $_SESSION['customer_location'];
            //     $customer_phoneno = $_SESSION['customer_phoneno'];
            //     $customerpicdir = $_SESSION['customer_picdir'];
            //     $customer_country = $_SESSION['customer_country'];
            //     $customer_state = $_SESSION['customer_state'];
            //     $customer_city = $_SESSION['customer_city'];
            //     $customer_private_password = $_SESSION['customer_privatepassword'];
            //     $customer_update_time = $_SESSION['customer_update_time'];
    
                // $_SESSION['customer_id'] = $customer_data['id'];
                                // $_SESSION['customer_name'] = $customer_data['customername'];
                                // $_SESSION['customer_email'] = $customer_data['customeremail'];
                                // $_SESSION['customer_location'] = $customer_data['customeraddress'];
                                // $_SESSION['customer_phoneno'] = $customer_data['customerphoneno'];
                                // $_SESSION['customer_picdir'] = $customer_data['customerpicdir'];
                                // $_SESSION['customer_country'] = $customer_data['customercountry'];
                                // $_SESSION['customer_state'] = $customer_data['customerstate'];
                                // $_SESSION['customer_city'] = $customer_data['customercity'];
                                // $_SESSION['customer_privatepassword'] = $customer_data['privatepassword'];
                                // $_SESSION['customer_update_time'] = $customer_data['updatetime'];
    
                               
    
                                // mysqli_free_result($query);
                                // mysqli_close($this->mysqli);
    
                            //    echo 'login successfuly '. $_SESSION['customer_name'];
            // 


?>

<!-- <form action="customeraccount.php" method="post"> 
    <label for="username">Username</label> <br>
    <input type="text" name="username" placeholder="enter username"> <br>
    <label for="password">Password</label> <br>
    <input type="text" name="password" placeholder="enter password"> <br>
    <input type="submit" value="submit" name="submit">
</form> -->

<input type="image" src="../assets/pics/adorable-animal-bow-1663409.jpg" alt="Submit" width="48" height="48">