window.onscroll = function() {
    scrollFunction();
    socialsReveal();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('top-button').classList.add('appear');
        document.getElementById('top-button').style.display = "block";
    }
    else {
        document.getElementById('top-button').classList.remove('appear');
    }
}

function socialsReveal() {
    if (document.documentElement.scrollTop > 3500){
        document.getElementById('social-h1').classList.add('appear');
        document.getElementById('underline').classList.add('appear');
        document.getElementById('github-logo').classList.add('appear');
        document.getElementById('fb-logo').classList.add('appear');
        document.getElementById('twitter-logo').classList.add('appear');
        document.getElementById('insta-logo').classList.add('appear');
        document.getElementById('email-link').classList.add('appear');
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
