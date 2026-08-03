function register() {
    setTimeout(() => {
        console.log("Register");
    }, 3000);
}
function login() {
    setTimeout(() => {
        console.log("Login here");
    }, 2000);
}

function getData() {
    setTimeout(() => {
        console.log("Fetch data from DB");
    }, 1000);
}

function displayData() {
    setTimeout(() => {
        console.log("Display data");
    }, 500);
}

register();
login();
getData();
displayData();