// sessionStorage.setItem("user", "neel");
// sessionStorage.setItem("user2", "krishna");
// sessionStorage.setItem("user3", "krish");
// sessionStorage.setItem("user3", "Yash");
// console.log(sessionStorage.getItem("user3"));

// localStorage.setItem("id", "1");
// localStorage.setItem("id", "2");
// console.log(localStorage.getItem("id"));
var test = "Test";

console.log("Before :", document.cookie);
//add
// document.cookie = `name=${ID};`;
//edit
// document.cookie = "name={[Neel, Jai]};";

//delete
document.cookie = "name=Test;";
document.cookie = "name=;";
//read
console.log("After :", document.cookie);
