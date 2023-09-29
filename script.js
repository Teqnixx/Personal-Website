window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.onscroll = function() {
    scrollFunction();
    socialsReveal();
    cardFlip();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('top-button').classList.add('appear');
        document.getElementById('top-button').style.display = "block";
        console.log(document.documentElement.scrollTop)
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

function cardFlip() {
    if (document.documentElement.scrollTop > 1700){
        document.getElementById('card-1').classList.add('flip');
        document.getElementById('card-2').classList.add('flip');
        document.getElementById('card-3').classList.add('flip');
        document.getElementById('card-4').classList.add('flip');
    }
    if(document.documentElement.scrollTop > 1850){
        document.getElementById('card-5').classList.add('flip');
        document.getElementById('card-6').classList.add('flip');
        document.getElementById('card-7').classList.add('flip');
        document.getElementById('card-8').classList.add('flip');
    }
    if(document.documentElement.scrollTop > 2000){
        document.getElementById('card-9').classList.add('flip');
        document.getElementById('card-10').classList.add('flip');
        document.getElementById('card-11').classList.add('flip');
        document.getElementById('card-12').classList.add('flip');
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
