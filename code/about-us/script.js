function revealElements() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);

window.addEventListener("DOMContentLoaded", revealElements);


function showTeamDetail(name, role, bio) {
    const modal = document.getElementById("teamModal");
    
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalRole").innerText = role;
    document.getElementById("modalBio").innerText = bio;
    
    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("teamModal");
    modal.classList.remove("show");
}

window.onclick = function(event) {
    const modal = document.getElementById("teamModal");
    if (event.target == modal) {
        modal.classList.remove("show");
    }
}