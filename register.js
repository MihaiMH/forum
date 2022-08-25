const regn = document.getElementById("reg");
const regp = document.getElementById("rpass");
const regb = document.getElementById("regbtn");

let users = JSON.parse(localStorage.getItem("users")) || [];

regb.addEventListener("click", ()=>{
    if ((regn.value!="")&&(regp.value!="")){
        let person = users.filter(user=> user.username === regn.value)[0];
        if (person === undefined){
        if (regp.value.length>=3){

    let user = {
        username: regn.value,
        pass: regp.value
    }

    users = [...users,user];

    localStorage.setItem('users',JSON.stringify(users));
    alert(`Inregistrare cu succes! Login: ${regn.value} | Password: ${regp.value}`);
    regn.value ='';
    regp.value = '';
    document.location.href = "index.html";
    console.log(users);}else alert("Parola trebuie sa contina minim 3 caractere!");}else{alert("Acest username exista deja");}} else {alert("Completati toate spatiile!");}
})

console.log(users);