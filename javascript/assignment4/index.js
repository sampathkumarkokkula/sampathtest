
let localScore = 0;
function localButton(){
    localScore++;
    localStorage.setItem('localScore',localScore)
 
}

let sessionScore=0
function sessionButton(){
    sessionScore++;
    sessionStorage.setItem('sessionScore',sessionScore);
}