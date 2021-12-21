<?php
session_start();
require_once('views/page-content/header.php');
require_once('views/select/select-menu.php');
require_once('views/newsletter.php');
?>

<div class="div-logo logo-menu">
    <a class="logo l-menu" href="index.php">tbs</a>
</div>

<h2 class="h2-menu">menu</h2>

<div class="container all-menu" id="full-menu">

    <div class="food">
        <!-- burgers -->
        <div class="burgers-menu">
            <h3>burgers</h3>
        </div>

        <!-- sides -->
        <div class="sides-menu">
            <h3>sides</h3>
        </div>

        <!-- drinks -->
        <div class="drinks-menu">
            <h3>drinks</h3>
        </div>
    </div>


    <div class="info-menu">

        <div class="img-menu">
            <img src="img/pexels-nadezhda-moryak-4409273.jpg" alt="burger">
        </div>

        <div>
            <div class="h1 h1-menu">
                <h1><span>THE</span></h1>
                <h1><span>BURGER</span></h1>
                <h1><span>SHOP</span></h1>
            </div>
            <div class="contact-menu">
                <p>123 Anywhere St.</p>
                <p>Any City, ST 12345</p>
                <p>10AM to 8PM | M to F</p>
            </div>
        </div>

    </div>
</div>

<section class="newsletter">

    <div class="inner-container">
        <form id="sub-form" method="POST">
            <h3>newsletter</h3>
            <p class="subbed">
                Subscribe for menu updates and special events!
            </p>
            <div>
                <input type="email" name="sub-email" placeholder="Email">
                <input class="btn submit" name="submit-sub" type="submit" value="subscribe">
            </div>
            <p class="sub-error error"></p>
        </form>
    </div>

</section>

<?php require_once('views/page-content/footer.php'); ?>