// Step 1: Register User
function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register");
            resolve();
        }, 3000);
    });
}

// Step 2: Login User
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login here");

            // resolve();

            reject(new Error("Login Failed"));
        }, 2000);
    });
}

// Step 3: Fetch Data
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data from DB");
            resolve();
        }, 1000);
    });
}

// Step 4: Display Data
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Display data");
            resolve();
        }, 500);
    });
}

async function test() {
    try {
        await register();
        await login();
        await getData();
        await displayData();
    } catch (err) {
        console.log("Error:", err.message);
    }
}

test();

// register()
//     .then(login)
//     .then(getData)
//     .then(displayData)
//     .catch((err)=>{
//         console.log("Error:",err)
//     })



console.log("Call Another App");
