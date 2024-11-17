let btn1=document.querySelector(".btn #btn-sub").addEventListener("click",function(){
    validation();
})
let form=document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    validation();
});
const local =JSON.parse(localStorage.getItem("user"));
function validation(){
     document.location.reload();
    let namee=document.getElementById("nom").value.trim();
    let email=document.getElementById("email").value.trim();
    let mdp=document.getElementById("mot-de-passe").value.trim();
    let mdpConfirmer=document.getElementById("confirmer-mot-de-passe").value.trim();

    // const user={
    //     nom:namee.value,
    //     emaile:email.value,
    //     mdpe:mdp.value,
    //     mdpConfirmere:mdpConfirmer.value
    // };
    
    // localStorage.setItem("user",JSON.stringify(user));

    localStorage.setItem("name",namee);
    localStorage.setItem("email",email);
    localStorage.setItem("mdp",mdp);
    localStorage.setItem("mdpConfirmer",mdpConfirmer);



    // let amogeba=localStorage.getItem("name");
    // let amogeba2=localStorage.getItem("email");
    // let amogeba3=localStorage.getItem("mdp");
    // let amogeba4=localStorage.getItem("mdpConfirmer");
}



let fiable=document.getElementById("fiable");
let moyen=document.getElementById("moyene");
let fore=document.getElementById("forte");
let compt=0;

let confirmeMdp=document.getElementById("confirmer-mot-de-passe").addEventListener("input",function(){
    verifieMdp();
})

function verifieMdp(){
    let mdp=document.getElementById("mot-de-passe").value;
    let confirmation=document.getElementById("confirmer-mot-de-passe").value;
    let span=document.getElementById("confirme-error");
    if(mdp===confirmation){
        span.style.display="block";
        span.textContent ="C'est une seule et même chose";
        span.style.color="green";
        document.getElementById("btn-sub").disabled=false;
    }else{
        span.style.display="block";
        span.textContent ="Ce n'est pas le même mot de passe";
        span.style.color="red";
        document.getElementById("btn-sub").disabled=true;
    }
}


let nomInput=document.getElementById("nom").addEventListener("input",function(){
    controIputNom();
})

let emailInput=document.getElementById("email").addEventListener("input",function(){
    controlEmail();
});

let mdp1=document.getElementById("mot-de-passe").addEventListener("input",function(){
    mdpSecure();
})


function mdpSecure(){
    let mdp=document.getElementById("mot-de-passe").value;
   
    let controlMinuscule=controlMinusc(mdp); 
    let controlMajuscule=controlMajusc(mdp); 
    let controlNumer=controlchiffre(mdp); 
    let controlquantite=controlquantit(mdp); 

   if(controlMinuscule && controlMajuscule && controlNumer && controlquantite){
        afficherBlock("faible");
        afficherBlock("moyene");
        afficherBlock("forte");
    }

}

function controlMinusc(mdp){
    let presenceMinuscule = false;

    if (mdp.match(/.*[a-z].*/))
        presenceMinuscule = true;

    if (presenceMinuscule) {
        afficherBlock("faible");
    } else {
        cacherBlock("moyene");
        cacherBlock("forte");
    }

    return presenceMinuscule;
}

function controlMajusc(mdp){
    let presenceMajuscule = false;

    if (mdp.match(/.*[A-Z].*/))
        presenceMajuscule = true;

    if (presenceMajuscule) {
        afficherBlock("faible");
        
    } else {
        cacherBlock("moyene");
        cacherBlock("forte");
    }

    return presenceMajuscule;
}

function controlchiffre(mdp){
    let presenceChiffre = false;

    if (mdp.match(/.*[0-9].*/))
        presenceChiffre = true;

    if (presenceChiffre) {
        afficherBlock("faible");
        afficherBlock("moyene");
    } else {
        cacherBlock("forte");
    }

    return presenceChiffre;
}

function controlquantit(mdp){
    let presonteMinimum=false;
    if(mdp.length==0){
        cacherBlock("moyene");
        cacherBlock("faible");
        cacherBlock("forte");
    }
    if (mdp.length >= 9) {
        afficherBlock("forte");
        presonteMinimum= true;
    } 
    if(presonteMinimum){
        compt=1
    }else{
        compt=0;
    }

    return presonteMinimum;
   
}

function afficherBlock(id){
    document.getElementById(id).style.display="block";
}
function cacherBlock(id){
    document.getElementById(id).style.display="none";
}






function controIputNom(){
    let nom=document.getElementById("nom").value;
    let error=document.getElementById("username-error");
    let regex=/^[A-Za-z]{3,}$/;
    if(regex.test(nom)){
        error.style.display="none";
        return true;    
    }else{
        error.style.display="block";
        error.textContent="Choissisez un pseudo contenant au moins 3 caractères";
        error.style.color="red";
        return false;
    }  
}

function controlEmail(){
    let email=document.getElementById("email").value;
    let error=document.getElementById("email-error");
    let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email)){
        error.style.display="none";
        return true;
    }else{
        error.style.display="block";
        error.textContent="Rentrez un email valide.";
        error.style.color="red";
        return false;
    }
}




