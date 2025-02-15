

// ///// Page 1 Registration form /////////

let inputFirstName = document.getElementById("firstname");
let inputLastName = document.querySelector("#lastname");
let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".pass");
let inputReEnterPassword = document.querySelector("#re-enter-password");
let btnSignUp = document.querySelector(".btnsignup");
const form = document.getElementById("myForm");

function displayError(inputField, message) {
    let childDiv = inputField.nextElementSibling;
    if (!childDiv || childDiv.tagName !== "DIV") {
        childDiv = document.createElement("div");
        childDiv.style.color = "red";
        childDiv.className = "errormessage";
        inputField.parentNode.insertBefore(childDiv, inputField.nextSibling);
    }
    childDiv.textContent = message;
}

function clearError(inputField) {
    let errorElement = inputField.nextElementSibling;
    if (errorElement && errorElement.className === "errormessage") {
        errorElement.remove();
    }
}

btnSignUp.addEventListener("click", function (e) {
    let isValid = true;

    // Clear Previous Errors
    clearError(inputFirstName);
    clearError(inputLastName);
    clearError(inputEmail);
    clearError(inputPassword);
    clearError(inputReEnterPassword);

    // Check First Name
    if (inputFirstName.value.trim() === "") {
        displayError(inputFirstName, "This Field Is Required");
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(inputFirstName.value)) {
        displayError(inputFirstName, "Enter Characters Only");
        isValid = false;
    }

    // Check Last Name
    if (inputLastName.value.trim() === "") {
        displayError(inputLastName, "This Field Is Required");
        isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(inputLastName.value)) {
        displayError(inputLastName, "Enter Characters Only");
        isValid = false;
    }

    // Check Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputEmail.value.trim() === "") {
        displayError(inputEmail, "This Field Is Required");
        isValid = false;
    } else if (!emailRegex.test(inputEmail.value)) {
        displayError(inputEmail, "Enter a Valid Email");
        isValid = false;
    }

    // Check Password
    if (inputPassword.value.trim() === "") {
        displayError(inputPassword, "This Field Is Required");
        isValid = false;
    } else if (inputPassword.value.length < 9) {
        displayError(inputPassword, "Password Should Be At Least 9 Characters Long");
        isValid = false;
    }

    // Check Re-Enter Password
    if (inputReEnterPassword.value.trim() === "") {
        displayError(inputReEnterPassword, "This Field Is Required");
        isValid = false;
    } else if (inputReEnterPassword.value !== inputPassword.value) {
        displayError(inputReEnterPassword, "Passwords Don't Match");
        isValid = false;
    }

    let oldUser = JSON.parse(localStorage.getItem("newUser")) || [];

    for(let i = 0; i <oldUser.length; i++){
        if(inputEmail.value == oldUser[i].email){
            console.log("tttttttttttttttttttttt")
            displayError(inputEmail, "This Email Alredy Exists Please Go To Sign In")
            isValid = false;
            break;
        }
    }

    if (!isValid) {
    e.preventDefault();
    // return;
    }
    if (isValid) {
        e.preventDefault()
        
        // Create User Object
        let newUser = {
            firstName: inputFirstName.value.trim(),
            lastName: inputLastName.value.trim(),
            email: inputEmail.value.trim(),
            password: inputPassword.value.trim(),
            
        };

        oldUser.push(newUser);
        localStorage.setItem("newUser", JSON.stringify(oldUser));
        // window.Location.href = "http://127.0.0.1:5500/pages/signin.html"
        window.location.href = "../pages/signin.html";
    }
});


