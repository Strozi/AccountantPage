window.addEventListener('DOMContentLoaded', () => {
    toggleActive();
    toggleInfo();
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

function toggleInfo() {
    var button = document.querySelectorAll(".box a.btn");
    button.forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            if (element.previousElementSibling.style.display === "") {
                element.previousElementSibling.style.display = "block";
            } else {
                element.previousElementSibling.style.display = "";
            }

        });
    });
}