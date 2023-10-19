localStorage.setItem("cityLocal", "Mumbai");
sessionStorage.setItem("cityLocal", "Delhi");
console.log(localStorage.getItem("cityLocal"));
localStorage.setItem("name", "Mumbai");
console.log("Before ", document.cookie);
document.cookie = "name=Mumbai; ";
document.cookie = "name=; ";
document.cookie = "kal=Mumbai; ";
console.log("After ", document.cookie);
