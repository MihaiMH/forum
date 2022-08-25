const profil = document.getElementById("profil");
const txtpost = document.getElementById("txtpost");
const inspost = document.getElementById("inspost");
const postari = document.getElementById("postari");
const logout = document.getElementById("logout");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

document.addEventListener('DOMContentLoaded', function() {
    show();
    console.log(posts);
 }, false);


 function show(){

    localStorage.getItem('posts',JSON.stringify(posts));
    postari.innerHTML=`<h1>Toate postarile</h1>`;
    posts.forEach(post => {
        if (nume != post.autor){
            postari.innerHTML+= ` 
            <div class="poxt">
                    <h3> Autor: ${post.autor} </h3>
                    <p> ${post.text} </p>
                    </div>
            `} else { 
                     postari.innerHTML+= ` 
                     <div class="poxt">
                     <div class="atxt">
                    <h3> Autor: ${post.autor} </h3>
                    <p> ${post.text} </p> 
                    </div>
                    <div class="btns2">
                    <button class="btn" onclick="sterge(${post.idt})"> Sterge </button>
                    <button class="btn" onclick = "modifica(${post.idt})"> Modifica </button>  
                    </div>
                    <div id="${post.idt}">
                    </div>   
                    </div>              
                    `
            }
        });
}

inspost.addEventListener("click", ()=>{

    if(txtpost.value){

    let post = {
        autor: nume,
        text: txtpost.value,
        idt: Date.now()
    }



    posts = [...posts,post];

    localStorage.setItem('posts',JSON.stringify(posts));
    console.log(posts);
    txtpost.value= "";

    show();
} else {alert("Nu puteti publica o postare goala!");}
})

function modifica(id){
    let txt;
    let idt = Date.now();
    let pid = document.getElementById(id);
    pid.innerHTML='';
    let cauta = posts.map(post=>{
         if(post.idt==id){
            txt=post.text;
        }})
    pid.innerHTML+=`
     <textarea class="txtfrum" id=${idt}  rows="5" cols="50" placeholder="">${txt}</textarea>  
     <div class="btns3">
     <button class="btn" id=${idt} onclick=closeEdit(${idt})>Anuleaza</button>
     <button class="btn" id=${idt} onclick=confirmPost(${id},${idt})>Confirma</button>
     </div>
     `;
     console.log('modifica open success');
}

function confirmPost(id,idt){
    let txt = document.getElementById(idt);
    if (txt.value!=""){
    let i=0;
    let cauta = posts.map(postx=>{
        if(postx.idt==id){
            posts[i].text=txt.value;
            txt.remove();
            localStorage.setItem('posts',JSON.stringify(posts));
            show();
            console.log('modifica confirm success');
            
            return;
        } else {i+=1;}
    
    })
    
    } else {sterge(id);}

}

function closeEdit(idt){
    let txt;
    for(i=0;i<3;i++){
     txt = document.getElementById(idt);
    txt.remove();
  }
  console.log('modifica close success');
}



function sterge(id){
localStorage.getItem('posts',JSON.stringify(posts));
    let i=0;
    let del = posts.map(post=>{
        if(post.idt==id){
            posts.splice(i,1);
            localStorage.setItem('posts',JSON.stringify(posts)); 
            show();
            console.log("success");
            console.log(posts);
            return;
        } else {i+=1;}
    })  
}

function st(){
    localStorage.getItem('posts',JSON.stringify(posts));
    let i=0;
    let del = posts.map(post=>{
            post.value="";
            posts.splice(i,1);
            i+=1;
})
localStorage.setItem('posts',JSON.stringify(posts));
console.log(posts);
show();
}





let nume = sessionStorage.getItem("login");
let pass = sessionStorage.getItem("pass");
console.log(nume);
profil.innerHTML=`Bine ai venit, ${nume}!`;


logout.addEventListener("click",()=>{
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    document.location.href = "index.html";
    
})



const cngu = document.getElementById("cngu");

cngu.addEventListener("click",()=>{
{
    let nn = prompt("Introduceti numele nou: ");
    if (nn!=""){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let person = users.filter(user=> user.username === nn)[0];
        if (person === undefined){
    users.forEach(user => {
        if(user.username === nume){
            user.username = nn;
        }        
    });
    sessionStorage.setItem('login',nn);
    localStorage.setItem('users',JSON.stringify(users));
    console.log(users);
    profil.innerHTML=`Bine ai venit, ${nume}!`;
    document.location.reload();
}else alert("Acest username deja exista!");} else {alert("Numele nu poate fi gol");}

}});


const cngp = document.getElementById("cngp");

cngp.addEventListener("click",()=>{
{
    let pp = prompt("Introduceti parola noua: ");
    if (pp!=""){
    if (pp.length>=3){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
        if(user.username === nume){
            user.pass = pp;
        }        
    });
    sessionStorage.setItem('password',pp);
    localStorage.setItem('users',JSON.stringify(users));
    console.log(users);
    document.location.reload();
}else alert("Parola trebuie sa contina minim 3 caractere!");} else {alert("Numele nu poate fi gol");}

}});


const stgac= document.getElementById("stgac");

stgac.addEventListener("click",()=>{
{
    let i=0;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
        if(user.username === nume){
            users.splice(i,1);
        } else {i+=1;}    
    });
    localStorage.setItem('users',JSON.stringify(users));
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    document.location.href = "index.html";

} 

});

const toextra = document.getElementById("toextra");

toextra.addEventListener("click",()=>{
    document.location.href = "extra.html";

})

