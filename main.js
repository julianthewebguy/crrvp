    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('<!--AboveMedia Footer Content Starts --> <!-- Back to top--> <style> .button-row a { padding: 0.9em; background-color: #252525; color: #FFF; text-decoration: none; border-radius: 26px; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 71px; right: 30px; display: none; } @media only screen and (min-width: 1190px) { #toTop { display: none!important; } } </style> <div id="toTop" class="button-row align-center"><a href="#Top">Back to Top</a> </div> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <P><strong>Robert Shannon</strong></p> <p><strong><a href="tel:+50688205627">+506-8820-5627</a></strong> Cell </p> <p><strong><a href="tel:+50684156881">+506 8415 6881</a></strong> Other </p> <p><strong><a href="tel:+18005283890">+1-800-528-3890</a></strong> Toll-Free</p> <p><strong><a href="tel:+15062293244">+506-2293-2446/7</a></strong> Office </p> <p>Ciudad Cariari</p> <p>Belen, Heredia, Asuncion</p> <p>Cariari, HE 40701</p> <p>Costa Rica</p> <div class="footer-social"> <h3>Follow Me:</h3> <a href="#" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/a8a8/4945/ca1b/f1b211a60b16b55ec826/original.png" alt="Facebook" /></a> <a href="https://www.costaricaretirementvacationproperties.com/Util/EmailAgent.aspx?uid=997976" class="contact-bt">Contact Me</a> </div> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/21bd/bca3/d1d3/ca3bf1e689ca27141057/original.png" alt="Costa Rica Retirement Vacation Properties"> <img src="https://mediavault.point2.com/p2a/htmltext/b632/bed2/f11f/4f8f7250867f6cc88ec6/original.png" alt="" style="height: 170px; margin: 0 auto;"> <p>We offer full service countrywide,<br />with over 2500 listings.</p> </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/Costa_Rica_Residency_Options/page_2684186.html">Costa Rica Residency Options</a></li> <li><a href="/Costa_Rica_Blogs_of_interest/page_2683831.html">Costa Rica Blogs of interest</a></li> <li><a href="/aaa_Cafetales_Homesites/page_2697230.html">Cafetales Homesites</a></li> <li><a href="/La_Palma_Homesites/page_2689586.html">La Palma Homesites</a></li> <li><a href="/Searches_you_may_like/page_2704598.html">Searches you may like</a></li> <li><a href="#">Blog</a></li> </ul> </div> </div> <div class="footer-flex mobile-only"> <h2>Costa Rica Retirement Vacation Properties</h2> <p>copyright</p> </div> </div> <div id="final-footer"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div> <!--AboveMedia Footer Content Ends -->');

            jQuery('body').append(listingFooter);
        }
        jQuery(".row-fluid").last().addClass("footerBG");
    });

    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByClassName('nav-holder')[0];

        }
        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {

            header.classList.remove("sticky");

        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    // Make home fill width
    $(document).ready(function () {
        var url = location.href;
        var headerDiv1 = document.getElementsByClassName('row-fluid')[1];
        var headerDiv2 = document.getElementsByClassName('row-fluid')[2];
        console.log(url)
        if (url == "https://www.costaricaretirementvacationproperties.com/" || url == "https://www.costaricaretirementvacationproperties.com/#Top") {
            headerDiv1.classList.add('fullwidth');
            headerDiv2.classList.add('fullwidth');
        }
        else {
            if (window.location.href.indexOf("Listing_") == -1 && window.location.href.indexOf("listingid") == -1 && window.location.href.indexOf("Listing_") == -1) {
                headerDiv1.classList.add('fullwidth');
            }
        }

    });
