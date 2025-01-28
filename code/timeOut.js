document.querySelector(
  ".name-space"
).innerText = `TimeOut`;
document.querySelector(".name-space").style.color = "red";

document.querySelector('.btn-exam').addEventListener('click',()=>{
  window.location.href = "../pages/Exam.html";
});