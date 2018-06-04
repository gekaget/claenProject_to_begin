
$(document).ready(function () {


    window.addEventListener('resize', reloadJsScripts);
    window.addEventListener('load', checkUserHeightFirst);


    var winWidth = 0;
    var winHeight = 0;

    getWinSize();


    /*var indexPage = document.querySelector('.section.services');
    var servicePage = document.querySelector('.section.service-page');
    var blogOnePage = document.querySelector('.section.blog-page');
    var galeryPage = document.querySelector('.section.galery-page');
    var aboutPage = document.querySelector('.section.about-page');*/

    /* Begining Scripts for Index Page */
    if (indexPage) {
        
    }
    /* Ending Scripts for Index Page */

    /* Begining Scripts for servicePage Page */
    if (servicePage) {

    
    }
    /* Ending Scripts for servicePage Page */

    /* Begining Scripts for Blog One Page */
    if (blogOnePage) {

    }
    /* Ending Scripts for Blog One Page */

    /* Begining Scripts for Galery Page */

    if (galeryPage) {
       
    }
    /* Ending Scripts for Galery Page */



    if (aboutPage) {
        
    }

    
    

    function getWinSize() {
        winWidth = $(window).width();
        winHeight = $(window).height();
    }
});