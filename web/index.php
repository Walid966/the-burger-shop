<?php
require_once('pdo.php');
require_once('views/newsletter.php');
require_once('views/contact-form.php');
require_once('views/page-content/header.php');
require_once('views/page-content/navbar.php');
?>

<main id="home">
    <section class="show-case flex">
        <div class="starburst">
            <img src="img/starburst-four-point.svg" alt="four point starburst">
        </div>
        <div class="inner-container">
            <div class="heading-text">
                <div class="h1">
                    <h1><span>THE</span></h1>
                    <h1><span>BURGER</span></h1>
                    <h1><span>SHOP</span></h1>
                </div>
                <div>
                    <p>Delicious food for every mood</p>
                </div>
            </div>


        </div>

        <div class="imgs">
            <div class="burger burger-one">
                <img src="img/pexels-valeria-boltneva-9406096.jpg" alt="burger">
            </div>
            <div class="burger burger-two">
                <img src="img/pexels-nadezhda-moryak-4409273.jpg" alt="burger">
            </div>
        </div>
        <!-- <div class="starburst">
            <img src="img/starburst-four-point.svg" alt="four point starburst">
        </div> -->
    </section>

    <div class="container">
        <!-- about -->
        <section id="about">
            <div class="inner-container">
                <div class="h2">
                    <h2 class="about-heading">
                        ALL ABOUT TBS
                    </h2>
                </div>
                <div class="about">
                    <div class="since">
                        <img src="img/starburst-four-point.svg" alt="">
                        <span>EST.</span>
                        <span class="year">1999</span>
                    </div>
                    <div class="about-info">
                        <div class="about-img">
                            <img src="img/pexels-anush-gorak-1431305.jpg" alt="burger">
                        </div>
                        <div class="about-text">
                            <p>
                                We have been serving irresistible confort food since 1999. Our mission is to keep you smiling with every bite.
                            </p>
                            <p>
                                Treat yourself to a feel-good meal today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- menu -->
        <section id="menu">
            <div class="inner-container">
                <div class="offer">
                    <div>
                        <div class="h2">
                            <h2>
                                WHAT
                            </h2>
                            <h2>
                                WE
                            </h2>
                            <h2>
                                OFFER
                            </h2>
                        </div>
                        <!-- <p>Here are our popular menu items.</p> -->
                        <div class="full-menu">
                            <p>Curious? See our full menu.</p>
                            <a class="btn" href="full-menu.php">full menu</a>
                        </div>
                    </div>

                    <div class="pop-menu">
                        <div class="pop-item">
                            <span class="rotated">Gourmet Burgers</span>
                            <div>
                                <img class="burger" src="img/pexels-daria-shevtsova-908849.jpg" alt="burger">
                            </div>
                        </div>
                        <div class="pop-item">
                            <span class="rotated">chicken Wings</span>
                            <div>
                                <img class="wings" src="img/pexels-chait-goli-2124699.jpg" alt="chicken wings">
                            </div>
                        </div>
                        <div class="pop-item">
                            <span class="rotated">Thirst Quenchers</span>
                            <div>
                                <img class="drinks" src="img/pexels-olenka-sergienko-3323682.jpg" alt="drinks">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- mobile menu slideshow -->
                <div class="m-menu">
                    <div class="h2">
                        <h2>
                            WHAT
                        </h2>
                        <h2>
                            WE
                        </h2>
                        <h2>
                            OFFER
                        </h2>
                    </div>

                    <!-- Slider main container -->
                    <div class="swiper1">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                                <span class="rotated">Gourmet Burgers</span>
                                <div>
                                    <img class="gourmet" src="img/pexels-daria-shevtsova-908849.jpg" alt="burger">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <span class="rotated">chicken Wings</span>
                                <div>
                                    <img class="wings" src="img/pexels-chait-goli-2124699.jpg" alt="chicken wings">
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <span class="rotated">Thirst Quenchers</span>
                                <div>
                                    <img class="drinks" src="img/pexels-olenka-sergienko-3323682.jpg" alt="drinks">
                                </div>
                            </div>
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>

                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="full-menu">
                        <p>Curious? See our full menu.</p>
                        <a class="btn" href="full-menu.php">full menu</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- reviews -->
        <section class="reviews">
            <div class="inner-container">
                <div class="h2">
                    <h2>WHAT OUR</h2>
                    <h2>CLIENTS SAY</h2>
                </div>
                <div class="clients-reviews flex">
                    <div class="review fade">
                        <div class="five-stars">
                            <img src="img/five-stars.png" alt="">
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet. Ipsum quos error architecto!
                            </p>
                        </div>
                        <div>
                            <span class="review-name fade">
                                The Online Food Hub
                            </span>
                        </div>
                    </div>
                    <div class="review fade">
                        <div class="five-stars">
                            <img src="img/five-stars.png" alt="">
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet. Ipsum quos error architecto!
                            </p>
                        </div>
                        <div>
                            <span class="review-name">
                                Food Pyramid Co.
                            </span>
                        </div>
                    </div>
                    <div class="review fade">
                        <div class="five-stars">
                            <img src="img/five-stars.png" alt="">
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet. Ipsum quos error architecto!
                            </p>
                        </div>
                        <div>
                            <span class="review-name">
                                Jul & Sons Co.
                            </span>
                        </div>
                    </div>
                </div>

                <!-- mobile reviews -->
                <div class="m-reviews swiper2">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="five-stars">
                                <img src="img/five-stars.png" alt="">
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet.
                                </p>
                            </div>
                            <div>
                                <span class="review-name fade">
                                    The Online Food Hub
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="five-stars">
                                <img src="img/five-stars.png" alt="">
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet.
                                </p>
                            </div>
                            <div>
                                <span class="review-name">
                                    Food Pyramid Co.
                                </span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="five-stars">
                                <img src="img/five-stars.png" alt="">
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia tenetur aperiam fuga fugit accusamus consectetur eveniet.
                                </p>
                            </div>
                            <div>
                                <span class="review-name">
                                    Jul & Sons Co.
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <div class="al swiper-button-prev swiper-button-next_slideshow<?= $module ?>"></div>
                    <div class="ar swiper-button-next swiper-button-prev_slideshow<?= $module ?>"></div>
                </div>
        </section>



        <!-- contact -->
        <section id="contact" class="contact">
            <div class="inner-container">
                <div class="h2">
                    <h2>CONTACT US</h2>
                </div>
                <div class="about flex">
                    <div class="shop-icon">
                        <img src="img/store_mall_directory_white_24dp.svg" alt="shop icon">
                    </div>
                    <div class="about-info flex">

                        <div id="map" src="https://maps.googleapis.com/maps/api/js?key=https://www.google.com/maps/embed/v1/place?q=place_id:EiVNYXJrZXQgU3QsIFN5ZG5leSBOU1cgMjAwMCwgQXVzdHJhbGlhIi4qLAoUChIJO1Nr_j6uEmsRmA-nK9oJ6GkSFAoSCT-Yix5ArhJrEcDMMhZofQEF&key=AIzaSyBAjapaahfRN1EpsiIWhRR6GWjISuFqoNw&callback=initMap"></div>
                        <div class="contact-info">
                            <!-- contact form -->
                            <form id="contact-form" method="POST">
                                <div>
                                    <p class="flash-msg success"></p>
                                </div>
                                <div>
                                    <label for="name">name</label>
                                    <input type="text" id="name" name="name" value="">
                                    <p class="name-error error"></p>
                                </div>

                                <div>
                                    <label for="email">email</label>
                                    <input type="email" name="email" id="email" value="">
                                    <p class="email-error error"></p>
                                </div>

                                <div>
                                    <label for="message">message</label>
                                    <textarea name="message" id="message" rows="5"></textarea>
                                    <!-- <p class="msg-error error"></p> -->
                                </div>
                                <div class="submit-div">
                                    <input class="btn submit-btn" type="submit" name="submit-message" value="send">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- newsletter -->
        <section class="newsletter" id="newsletter">
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
    </div>

</main>

<?php require_once('views/page-content/footer.php'); ?>