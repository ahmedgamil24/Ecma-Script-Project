document.querySelector(".btn-exam").addEventListener("click", () => {
  window.location.href = "../pages/home.html";
});

window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("newUser")) || [];
  const lastUser = user[user.length - 1];

  document.querySelector(".precentage").innerText =
    user[user.length - 1].score + "%";

  if (user[user.length - 1].score >= 50) {
    console.log('succed');
    document.querySelector(
      ".name-space"
    ).innerText = `Congratulations ${lastUser.firstName} ${lastUser.lastName}`;
    document.querySelector(".name-space").style.color = "green";
    document.querySelector(".btn-start-again").classList.add("success");
  } else {
    document.querySelector(
      ".name-space"
    ).innerText = `You Failed ${lastUser.firstName} ${lastUser.lastName}`;
    document.querySelector(".name-space").style.color = "red";
  }
});
