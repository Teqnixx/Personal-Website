window.onscroll = function() {
    scrollFunction();
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

function topFunction() {
    document.documentElement.scrollTop = 0;
}
