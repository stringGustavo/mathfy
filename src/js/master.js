let sidebar = document.querySelector(".sidebar")

document.querySelector(".fa-bars").addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

document.querySelectorAll(".arrow").forEach( () => {
    this.addEventListener("click", (event) => {
        let arrowParent = event.target.parentElement.parentElement;

        arrowParent.classList.toggle("show");
    });
});


