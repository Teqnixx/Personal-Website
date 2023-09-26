window.onscroll = function() {
    scrollFunction();
    scroll();
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

function scroll() {
    if (document.documentElement.scrollTop >= 300) {
        document.getElementById('scroll-down-button').classList.remove('appear');
    }
    else {
        document.getElementById('scroll-down-button').classList.add('appear');
        document.getElementById('scroll-down-button').style.display = "block";
    }
}

function scrollDown() {
    document.documentElement.scrollTop = 950;
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
