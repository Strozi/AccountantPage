window.addEventListener('DOMContentLoaded', () => {
    toggleActive();

});


function toggleActive() {
    var a = document.querySelectorAll("#navbar li a");
    a.forEach(element => {
        element.addEventListener("click", () => {
            if (!element.hasAttribute('class')) {

                a.forEach(el => {
                    el.removeAttribute('class');
                });

                element.setAttribute('class', 'active');
            }
        });
    });
};