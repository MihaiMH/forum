const logn = document.getElementById("login");
const logp = document.getElementById("pass");
const logb = document.getElementById("logbtn");



logb.addEventListener("click",()=>{
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let person = users.filter(user=> user.username === logn.value)[0];
    if ((logn.value!="")&&(logp.value!="")){
    if (person === undefined){alert("Parola sau username incorect!")} else{

    if(person.pass === logp.value){
        sessionStorage.setItem('login',logn.value);
        sessionStorage.setItem('password',logp.value);
        document.location.href = "forum.html";
    } else {alert("Parola sau username incorect!")}}

} else {alert("Completati toate spatiile!");}



}
)