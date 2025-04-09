let userRole = 'Enrolled Member'
let accessLevel = ''

if (userRole == 'Employee') {
    accessLevel = 'Dietary services'
} else if (userRole == 'Enrolled Member') {
    accessLevel = 'Dietary services and one interaction with a dietician'
} else if (userRole == 'Subscriber') {
    accessLevel = "Dietary services partial access"
} else {
    accessLevel = 'Sorry, you must enroll or subscribe'
}

console.log(`Your user role of ${userRole} means you get the following: ${accessLevel}`)

// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }

// console.log("Access Level:", accessLevel);

// let isLoggedIn = true;
// let userMessage;

// if (isLoggedIn) {
//     if (userRole === "admin") {
//         userMessage = "Welcome, Admin!";
//     } else {
//         userMessage = "Welcome, User!";
//     }
// } else {
//     userMessage = "Please log in to access the system.";
// }

// console.log("User Message:", userMessage);

// let userType = "subscriber";
// let userCategory;

// switch (userType) {
//     case "admin":
//         userCategory = "Administrator";
//         break;
//     case "manager":
//         userCategory = "Manager";
//         break;
//     case "subscriber":
//         userCategory = "Subscriber";
//         break;
//     default:
//         userCategory = "Unknown";
// }

// console.log("User Category:", userCategory);

// let isAuthenticated = true;
// let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// console.log("Authentication Status:", authenticationStatus);

