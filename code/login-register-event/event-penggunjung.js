const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

  });

});

const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Menuju halaman detail event");

  });

});