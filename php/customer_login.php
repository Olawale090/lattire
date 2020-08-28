<?php

    $db = mysqli_connect('localhost','root','','nodetest');
    
    if ( mysqli_connect_errno() ) {
        echo "unable to connect to the database";
    }
    else {
        echo "database connected";
    }

    class Testing {
        // public $usernamevalue = mysqli_real_escape_string($_POST['username']);
        public function __construct(){
            $this->username = $_POST['username']; //'olawale';
            $this->password = $_POST['password'];
        } 

        public function callusername (){
            
            if (isset($_POST['submit'])) {

                if (!empty($this->username) && !empty($this->password)) {

                    $username = filter_input(INPUT_POST, $this->username, FILTER_VALIDATE_INT);
                    $password = filter_input(INPUT_POST, $this->password, FILTER_VALIDATE_EMAIL);
                    
                    if ($username && $password) {
                        echo '<br> valid  username and password';
                    } else {
                        echo '<br> invalid username or password';
                    }
                    
                } else {
                    echo 'Field empty';
                }

                echo '<br> customer name: '.$this->username . '<br> customer password: '.$this->password;
            }

            // echo 'methods working : '. $this->username;
        }

        public function validate (){
            $email = filter_var($this->username, FILTER_SANITIZE_EMAIL);
            if (isset($_POST['submit'])) {
                if ( filter_input(INPUT_POST, $email, FILTER_VALIDATE_EMAIL) ) {
                    echo "<p>" .$email."</p>";
                } else {
                    echo "please enter a valid email address ";
                }
               
            }
            
        }
    }

    $testing = new Testing();
    $testing->callusername();
    // $testing->validate();

?>

<form action="customer_login.php" method="post"> 
    <label for="username">Username</label> <br>
    <input type="text" name="username" placeholder="enter username"> <br>
    <label for="password">Password</label> <br>
    <input type="text" name="password" placeholder="enter password"> <br>
    <input type="submit" value="submit" name="submit">
</form>