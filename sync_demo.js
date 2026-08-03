function register() {
    console.log("Register");
}

function login() {
    console.log("login here");
}

function getData() {
    console.log("fetch data from DB");
}

function displayData() {
    console.log("Display data");
}

function waitForDelay(delay) {
    const mt = Date.now() + delay;
    while (Date.now() < mt);
}

register();
login();
getData();
displayData();