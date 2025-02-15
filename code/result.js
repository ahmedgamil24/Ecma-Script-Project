document.querySelector(".btn-exam").addEventListener("click", () => {
  window.location.href = "../pages/home.html";
});

let imgFail = document.querySelector(".fail-img");
let imgSuccess = document.querySelector(".success-img");
let percentage = document.querySelector(".precentage");
window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("newUser")) || [];
  const lastUser = user[user.length - 1];

  percentage.innerText =
    user[user.length - 1].score + "%";

  if (user[user.length - 1].score >= 50) {
    percentage.style.color = "green";
    console.log(imgSuccess);
    document.querySelector(
      ".name-space"
    ).innerText = `Congratulations ${lastUser.firstName} ${lastUser.lastName}`;
    document.querySelector(".name-space").style.color = "green";
    document.querySelector(".btn-start-again").classList.add("success");
    imgSuccess.style.display = 'block'; 
  } else {
    percentage.style.color = "red";
    document.querySelector(
      ".name-space"
    ).innerText = `You Failed ${lastUser.firstName} ${lastUser.lastName}`;
    document.querySelector(".name-space").style.color = "red";
    imgFail.style.display = "block";

  }
});
