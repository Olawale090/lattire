<?php 

    session_start();

    interface Ifetcher{
         public function props();
         public function conn ();
         public function data_pipe();
    }

    class full_details_fetcher implements Ifetcher
    {
        public function props (){
            $this->mysqli = new mysqli('localhost','root','','lattire');
        }

        public function conn (){
            if (mysqli_connect_errno()) {
                echo " Connection failed, please try again ";
            }
        }

        public function data_pipe(){

            $productName = $_GET["product"];

            $query = "  SELECT * FROM productstable 
                        WHERE product_name = '$productName'";

            $passQuery = $this->mysqli->query($query,MYSQLI_USE_RESULT);
            $fetchAllData = $passQuery->fetch_all(MYSQLI_ASSOC);

            if ($fetchAllData) {

                $_SESSION["alldata"] = $fetchAllData;
               

            }
        }
    }

    $f_details = new full_details_fetcher();
    $f_details->props();
    $f_details->conn();
    $f_details->data_pipe();

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/useraccount.css">
    <link rel="stylesheet" href="../styles/full_detail.css">

    <link rel="stylesheet" href="../styles/style.css">
    <link rel="shortcut icon" href="../assets/icons/company_logo.svg" type="image/x-icon">

    <script type="module" async src="../script/product_details.js"></script>
    <title>Product full details</title>
    
</head>
<body>
    <div class="navbar mainbar">

        <div class="left_menu">
            <img src="../assets/icons/companyicon.svg" alt="company icon" class="img mainIcon">
        </div>

        <input type="text" name="" id="" placeholder="Search products here" class="main_search">
         <ul class="search_results" style="top: 2.2em;">
            <li class="search_list"> Products </li>
        </ul>

        <div class="right_menu">
            <li><img src="../assets/icons/042-menu.svg" alt="company icon" class="img menuicon prod_details_menu"></li>
            <li class="usericon">
                <div class="userimg_container">  </div> 
            </li>
            <li class="username padd pr_username"> Username</li>
            <li class="padd">Help</li>
        </div>
        
    </div>

    <div class="mobile_product_list mobile_hide_toggle">
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li> 
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
        <li><a href="http://" class="menu_list homeProd"> Products</a></li>
    </div>

    <div class="banner first_banner">
        <header class="banner_title">
            Fast product delivery 
        </header> 
    </div>

    <section class="productdetails_maincontainer">
        <div class="first_section">
            <div class="productPic">
                <img src="<?php 

                    print_r($_SESSION["alldata"][0]["productpicdir"]);

                ?>" height="320px" alt="product picture" class="">
            </div>

            <div class="button_containers">
                <footer class="button_holders">
                    <button type="submit" class="cart_btn btn">
                        <div class="cart_icon"></div> Add to cart
                    </button>
    
                    <button type="submit" class="order_btn btn">  
                        Order
                    </button>

                </footer>
            </div>   
        </div>

        <div class="second_section">
            <div class="page_subtitle">
                <?php
                    print_r($_SESSION["alldata"][0]["product_name"]);
                ?>
                </div>

            <div class="two_subhead">
                <div class="product_features">
                    <li>Dress type:  
                        <?php
                            print_r($_SESSION["alldata"][0]["product_type"]);
                        ?>
                    </li>
                    <li>Dress size : 
                        <?php
                            print_r($_SESSION["alldata"][0]["product_size"]);
                        ?>
                    </li>
                    <li>Dress material : 
                        <?php
                            print_r($_SESSION["alldata"][0]["product_material"]);
                        ?>
                    </li>
                    <li>Dress maker :
                        <?php
                            print_r($_SESSION["alldata"][0]["product_maker"]);
                        ?>
                    </li>
                </div>
    
                <div class="color_price">
                    <div class="product_color">color, dress pattern</div>
                    <div class="product_price">
                        <?php
                            print_r($_SESSION["alldata"][0]["product_price"]);
                        ?>
                    </div>
                </div>
            </div>

            <div class="product_fulldetails">
                <?php
                    print_r($_SESSION["alldata"][0]["product_details"]);
                ?>
            </div>
            <div class="delivery_date">Delivery is next two weeks </div>
        </div>
        
    </section>

    <header class="category_title">
        Sugggested products for <span class="suggestionusername"> USERNAME </span>
    </header> 
    <section class="category" id="third_categ">

<div class="product_scroll">

    <div class="categ_scroll_btn left_scroll" id="third_left_scroll">  </div>
    <div class="categ_scroll_btn right_scroll" id="third_right_scroll"> </div>
    
    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni molestiae 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Add to cart
            </button>
        </footer>
    </div>

    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni molestiae 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Cart
            </button>
        </footer>
    </div>

    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Add to cart
            </button>
        </footer>
    </div>

    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Add to cart
            </button>
        </footer>
    </div>

    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni molestiae 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Add to cart
            </button>
        </footer>
    </div>

    <div class="product_tag">
        <img src="../product_pics/blue-background-close-up-clothing-1579063.jpg" alt="product image" class="product_pics">
        <footer class="product_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque inventore nam eum. Velit magni molestiae 
            <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
        </footer>
        <footer class="button_holders">
            <button type="submit" class="price prod_btn btn">$50</button>

            <button type="submit" class="product_cart Add_to_cart btn">  
                <div class="cart_icon"></div> Add to cart
            </button>
        </footer>
    </div>
    

</div>

</section>

    <footer class="main_footer">
        <ul class="block1">
            <p>
                <li>
                    <h3>Head office:</h3>
                    No. 23 Dr. Akintunde Babatunde Alade street <br>
                    Opposite Adekunle Christoper crescent, <br>
                    Idumota, Lagos state, Nigeria. <br>
                    +2348168612448,+2348050967907 <br>
                </li> 
            </p>

            <p>
                <li>Customer care line: <br>
                    +2348100049454 <br>
                    +2349030299483 <br>
                    +2348068402794 <br>
                    <p>
                        OR chat us up <br>
                        <a href="">url</a> <br>
                    </p>
                    
                </li>
            </p>
            <li>Email:lattirefeedback@lattire.com</li>
            <li>&copy; lattire2020</li>
        </ul>

        <ul class="block2">
            <li>Latest products</li>
            <li>General products</li>
            <li>Men wears</li>
            <li>Women wears</li>
            <li>Sport wears</li>
            <li>Roundnecks</li>
            <li>T-shirts</li>
            <li>Trousers</li>
            <li>Skirts</li>
            <li>Jackets</li>
        </ul>

        <ul class="block3">
            <li>Sign in</li>
            <li> Sign up</li>
            <li> About us</li>
            <li> Contact us</li>
            <li> Cart</li>
            <li>Blog</li>
            <li>Help</li>
            <li>Questions</li>
            <li>Deliveries</li>
            <li>Log out</li>
        </ul>

        <ul class="block4">
            <p>
                <li>
                    <h3>Nigeria office:</h3>
                    No. 23 Dr. Akintunde Babatunde Alade street <br>
                    Opposite Adekunle Christoper crescent, <br>
                    Idumota, Lagos state, Nigeria. <br>
                    +2348168612448,+2348050967907 <br>
                </li> 
            </p>

            <p>
                <li>Customer care line: <br>
                    +2348100049454 <br>
                    +2349030299483 <br>
                    +2348068402794 <br>
                    <p>
                        OR chat us up <br>
                        <a href="">url</a> <br>
                    </p>
                    
                </li>
            </p>
            <li>Email:lattirefeedback@lattire.com</li>
        </ul>
    </footer>

</body>
</html>

