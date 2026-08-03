// Step 1: Register User
function register(cb) {
    setTimeout(() => {
        console.log("Register");
        cb(); // Register complete hone ke baad login ko call karo
    }, 3000);
}

// Step 2: Login User
function login(cb) {
    setTimeout(() => {
        console.log("Login here");
        cb(); // Login complete hone ke baad getData ko call karo
    }, 2000);
}

// Step 3: Fetch Data
function getData(cb) {
    setTimeout(() => {
        console.log("Fetch data from DB");
        cb(); // Data fetch hone ke baad displayData ko call karo
    }, 1000);
}

// Step 4: Display Data
function displayData() {
    setTimeout(() => {
        console.log("Display data");
    }, 500);
}

// Callback Hell
register(() => {
    login(() => {
        getData(() => {
            displayData();
        });
    });
});

// Ye line wait nahi karegi.
// JavaScript synchronous code ko pehle execute kar deta hai.
console.log("Call Another App");