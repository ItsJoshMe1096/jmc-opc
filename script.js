function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    
}

var showFormButton = document.getElementById("showForm");
var formContainer = document.querySelector('.form-container');
showFormButton.addEventListener('click', () => {
    formContainer.classList.toggle('active');
});
