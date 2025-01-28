
// ///// Page 1 Registration form /////////

// let inputFirstName = document.getElementById("firstname")
// console.log(inputFirstName)

// let inputLastName = document.querySelector("#lastname");
// console.log(inputLastName)

// let inputEmail = document.querySelector(".email");
// console.log(inputEmail)

// let inputPassword = document.querySelector(".pass");
// console.log(inputPassword)

// let inputReEnterPassword = document.querySelector("#re-enter-password")
// console.log(inputReEnterPassword)

// let btnSignUp = document.querySelector(".btnsignup");
// const form = document.getElementById("myForm");

// function displayError (inputField, message){
//     let childDiv = inputField.nextElementSibling;
//     if (!childDiv || childDiv.tagName !== "DIV"){
//         childDiv = document.createElement("div");
//         childDiv.style.color = "red";
//         childDiv.className = "errormessage";
//         inputField.parentNode.insertBefore(childDiv, inputField.nextSibling);
//     }
//     childDiv.textContent = message;
// };

// function clearError (inputField){
//     let errorElement = inputField.nextElementSibling;
//     if (errorElement && errorElement.className === "errormessage"){
//         errorElement.remove();
//     }
// };


// btnSignUp.addEventListener("click", function(e){
//     let isValid = true;
//     // Clear Brevious Errors
//     clearError(inputFirstName);
//     clearError(inputLastName);
//     clearError(inputEmail);
//     clearError(inputPassword);
//     clearError(inputReEnterPassword);

//     //Check On Firstname
//     if (inputFirstName.value.trim() === ""){
//         displayError(inputFirstName, "This Field Is Required");
//         isValid = false;
//     }else if (!/^[a-zA-Z]+$/.test(inputFirstName.value)){
//         displayError(inputFirstName, "Enter Cherecters Only");
//         isValid = false;
//     };

//     //Check On Lastname
//     if (inputLastName.value.trim() === ""){
//         displayError(inputLastName, "This Field Is Required");
//         isValid = false;
//     }else if (!/^[a-zA-Z]+$/.test(inputLastName.value)){
//         displayError(inputLastName, "Enter Cherecters Only");
//         isValid = false;
//     };

//     //Check On Email
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (inputEmail.value.trim() === ""){
//         displayError(inputEmail, "This Field Is Required");
//         isValid = false;
//     }else if (!emailRegex.test(inputEmail.value)){
//         displayError(inputEmail, "Enter Valid Email");
//         isValid = false;
//     };

//     //Check On Password
//     if (inputPassword.value.trim() === ""){
//         displayError(inputPassword, "This Field Is Required");
//         isValid = false;
//     }else if(inputPassword.value.length < 9){
//         displayError(inputPassword, "Password Should Be More Than 9 Charecter");
//         isValid = false;
//     };

//     //Check On ReEnterPassword
//     if (inputReEnterPassword.value.trim() === ""){
//         displayError(inputReEnterPassword, "This Field Is Required");
//         isValid = false;
//     }else if(inputReEnterPassword.value !== inputPassword.value){
//         displayError(inputReEnterPassword, "Passwords Don't Match");
//         isValid = false;
//     };

//     if (!isValid){
//         e.preventDefault();
//     };

//         const newUser = {
//         firstName: inputFirstName.value.trim(),
//         lastName: inputLastName.value.trim(),
//         email: inputEmail.value.trim(),
//         password: inputPassword.value.trim(), // In production, do NOT store plain passwords like this!
//     };

//     // Retrieve Existing Users from Local Storage
//     let usersArray = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if Email Already Exists
//     const emailExists = usersArray.some(user => user.email === newUser.email);

//     if (emailExists) {
//         alert("This email is already registered. Please use a different email.");
//     } else {
//         // Add New User to Array
//         usersArray.push(newUser);

//         // Save Updated Array Back to Local Storage
//         localStorage.setItem("users", JSON.stringify(usersArray));

//         alert("Registration Successful!");
//         console.log("Users Array:", usersArray); // For debugging: logs the array of user objects
//         form.reset(); // Clear the form
//     }
    
// })




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
        window.location.href = "http://127.0.0.1:5500/pages/signin.html";
    }
});


