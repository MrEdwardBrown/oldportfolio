document.addEventListener("DOMContentLoaded", function() {
    var hero = document.getElementById('hero');
    var social = document.getElementById('social');

    window.addEventListener("scroll", function() {
        var progress = window.scrollY / window.innerHeight;
        if(progress > 1) progress = 1;
        // noinspection JSValidateTypes
        hero.style.filter = "blur(" + (progress * 5) + "px) brightness(" + (1 - progress) + ")";
        // noinspection JSValidateTypes
        social.style.opacity = (1 - progress) * (1 - progress);
    });
});

window.onload = function() {
    var loader = document.getElementById('loader-wrapper');
    loader.style.opacity = "0";
    setTimeout(function() {
        loader.style.display = "none";
    }, 500);
};
