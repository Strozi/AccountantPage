window.addEventListener('DOMContentLoaded', () => {
    toggleActive();
    toggleInfo();
    document.getElementById("defaultOpen").click();
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


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab-active";
}