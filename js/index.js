$(document).ready(function() {
    $('.ham-burger').click(function() {
        $(this).toggleClass('active');
        $('.navbar').toggleClass('open');
    });


    let arrowUp = document.getElementById('arrow');

    window.onscroll = function() {
        scrollup();
    }

    function scrollup() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    }
    arrowUp.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

});