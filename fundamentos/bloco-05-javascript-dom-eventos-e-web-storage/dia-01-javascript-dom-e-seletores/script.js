document.querySelector('#container #header-container').style.backgroundColor="green";
let emergenciais = document.querySelectorAll(".emergency-tasks div")
for (i=0; i<emergenciais.length;i+=1){
    emergenciais[i].style.backgroundColor="pink"
};
let naoEmergenciais = document.querySelectorAll(".no-emergency-tasks div");
for (ind=0; ind<naoEmergenciais.length;ind+=1){
    naoEmergenciais[ind].style.backgroundColor="yellow"
};
let titulos1 = document.querySelectorAll(".emergency-tasks h3");
for (n=0; n < titulos1.length; n+=1) {
    titulos1[n].style.backgroundColor = "purple"
}
let titulos2 = document.querySelectorAll(".no-emergency-tasks h3");
for (m=0; m < titulos2.length; m+=1) {
    titulos2[m].style.backgroundColor = "black"
}
document.getElementById('footer-container').style.backgroundColor="green"