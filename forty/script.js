
function getUser() {
    return new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("User data fetched successfully");
        } else {
            reject("Failed to fetch user data");
        }
    });
}

getUser()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });