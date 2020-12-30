/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict


function fadeLettersIn() {
    const text = document.querySelector('.subheader');
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    
    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span class = 'random'>" + splitText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 50);
    
    function onTick() {
        const span = text.querySelectorAll('span.random')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length) {
            complete();
            return;
        }
    }
    
    function complete() {
        clearInterval(timer);
        timer = null;
    }
}
