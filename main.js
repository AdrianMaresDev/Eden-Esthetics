document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const navigation = document.querySelector('.pageNav');

    hamburger.addEventListener('click', function() {
        navigation.classList.toggle('navActive');
        hamburger.style.display = 'none';
        close.style.display = 'block';
    });

    close.addEventListener('click', function() {
        navigation.classList.toggle('navActive');
        close.style.display = 'none';
        hamburger.style.display = 'block';
    })
});