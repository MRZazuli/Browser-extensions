let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const activeCard = document.querySelectorAll(".card");
const toggleButtons = document.querySelectorAll(".slider");
const filterButtons = document.querySelectorAll("#list-btn ul>li");
const filterAbleCards = document.querySelectorAll(".card-groups .card");
const removeButtons = document.querySelectorAll(".remove-btn");


// --------------Darkmode theme
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// --------------filter
const filterCards = (e) => {
  document.querySelector(".active-btn").classList.remove("active-btn");
  e.target.classList.add("active-btn");
  
  filterAbleCards.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach((li) => li.addEventListener("click", filterCards));

// --------------Toggle button
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetIndex = button.getAttribute("data-target");
    const targetDiv = activeCard[targetIndex];
    const cards = button.closest(".card");

    if (button.classList.contains("inactive")) {
      button.classList.replace("inactive", "active");
      targetDiv.setAttribute("data-name", "active");
      cards.classList.add("hide");
    } else {
      button.classList.replace("active", "inactive");
      targetDiv.setAttribute("data-name", "inactive");
      cards.classList.add("hide");
    }
  });
});

// ----------------remove button-------------------------------------
removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cards = button.closest(".card");
    if (cards) {
      cards.remove();
    }
  });
});


