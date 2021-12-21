<?php
require_once('views/select/select-newsletter.php');
?>
<?php require_once('views/page-content/header.php'); ?>

<div class="div-logo logo-menu">
    <a class="logo l-menu" href="index.php">tbs</a>
</div>

<section class="admin-page">
    <div class="inner-container">
        <div class="admin-area">
            <ul class="admin-nav">
                <li class="admin-nav-menu admin-navlink">
                    menu
                </li>
                <li class="admin-nav-subs admin-navlink">
                    subscribers
                    <div class="border"></div>
                </li>
                <li class="admin-nav-inbox admin-navlink">
                    inbox
                </li>
            </ul>
            <!-- menu -->
            <section class="container all-menu" id="admin-menu">
                <div class="food">
                    <!-- burgers -->
                    <div class="burgers-menu">
                        <h3>burgers <span class="icon add-icon add-burger"><img src="img/add_black_24dp.svg" alt=""></span></h3>
                    </div>

                    <!-- sides -->
                    <div class="sides-menu">
                        <h3>sides <span class="icon add-icon add-side"><img src="img/add_black_24dp.svg" alt=""></span></h3>
                    </div>

                    <!-- drinks -->
                    <div class="drinks-menu">
                        <h3>drinks <span class="icon add-icon add-drink"><img src="img/add_black_24dp.svg" alt=""></span></h3>
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
            </section>

            <!-- modal -->
            <div class="modal-edit">
                <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <div>
                            <p class="modal-heading edit-item">Edit <span class="edit-food"></span> ?</p>
                            <p class="modal-heading delete-item">Delete <span class="delete-food"></span> ?</p>
                            <p class="modal-heading add-item">Add new <span class="new-food"></span> ?</p>
                            <!-- row -->
                            <form id="modal-form" method="POST">
                                <div class="modal-inputs">
                                    <input type="text" name="food-name" class="food-name" placeholder="Name" value="">
                                    <input type="text" name="food-description" class="food-description" placeholder="Optional description" value="">
                                    <input type="text" name="food-price" class="food-price" placeholder="Price" value="">
                                    <input type="hidden" name="modal-id" class="modal-id" value="">
                                </div>

                                <div class="btns">
                                    <input class="btn modal-btn add-btn" type="submit" name="action" value="add">
                                    <input class="btn modal-btn edit-btn" type="submit" name="action" value="edit">
                                    <input class="btn modal-btn delete-btn" type="submit" name="action" value="delete">
                                    <div class="btn close">cancel</div>
                                </div>
                            </form>
                            <!-- row end -->
                        </div>
                        <span class="close">&times;</span>
                    </div>

                </div>
            </div>
            <!-- modal end -->

            <!-- subscribers -->
            <section class="subs" id="subs">
                <div class="inner-container">
                    <h1>subscribers to newsletter</h1>
                    <table>
                        <tr class="tr-heading">
                            <th class="nums">#</th>
                            <th>email</th>
                        </tr>

                        <?php $count = 0; ?>
                        <?php foreach ($subs as $sub) { ?>
                            <tr class="tr-body">
                                <td><?php echo $count += 1; ?></td>
                                <td><?php echo $sub['email'] ?></td>
                            </tr>
                        <?php } ?>
                    </table>
                </div>
            </section>
            <!-- inbox -->
            <section class="inbox" id="inbox">
                <div class="inner-container">
                    <h1>inbox</h1>
                    <table>
                        <!-- <p class="msg-deleted"></p> -->
                        <tr class="tr-heading">
                            <th>name</th>
                            <th>email</th>
                            <th>message</th>
                            <th>date sent</th>
                        </tr>
                    </table>

                    <div id="msg-clicked" class="none msg-clicked" style="text-align: left;">
                        <div class="msg-info">
                            <div><span class="msg-name"></span></div>
                            <div><span class="msg-email"></span></div>
                            <div><span class="time-sent"></span></div>
                        </div>
                        <div class="the-msg">
                            <span>Message:</span>
                            <p></p>
                        </div>
                        <div>
                            <div class="msg-btns">
                                <span class="inbox-btn delete-btn">Delete</span>
                                <!-- <a class="inbox-btn reply" href="#">Reply</a> -->
                            </div>
                        </div>
                        <span class="close">&times;</span>
                    </div>
                    <div class="confirm-delete none">
                        <form id="msg-form">
                            <div>Delete&nbsp;<span class="msg-name"></span>'s message?</div>
                            <input type="hidden" name="msg-id" value="">
                            <div class="flex">
                                <input class="inbox-btn" type="submit" name="delete" value="Delete">
                                <span class="inbox-btn cancel">Cancel</span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>


</section>



<?php require_once('views/page-content/footer.php'); ?>