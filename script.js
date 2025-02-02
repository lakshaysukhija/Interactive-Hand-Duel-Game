let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")
const usersc= document.querySelector("#user-score");
const compsc= document.querySelector("#comp-score");


const gencomputerchoice =()=>{
const options = ["stone", "paper" , "scissors"]
const random = Math.floor(Math.random()*3);
return options[random];
}

const drawgame = ()=>{
    
    msg.innerText= " 😁Its A DRAW Try Again! ";
    msg.style.backgroundColor= "rgb(97, 29, 4)" ;  


}

const showwinner = (userwin)=>{
    if (userwin){
        userscore++;
        usersc.innerText=userscore;

        
         msg.innerText="You Win :)";
         msg.style.backgroundColor= "green";  
         }
    else {
       
        msg.innerText="You Lose ):";
        msg.style.backgroundColor= "red";  
        compscore++;
        compsc.innerText=compscore;


    }

}

const playgame=(userchoice)=>{
    console.log("user choice =", userchoice);
    const compchoice = gencomputerchoice();
    console.log ("comp choice = " , compchoice);
    if (userchoice===compchoice){
      drawgame();
    } else {
        let userwin = true;
        if (userchoice==="stone"){
            userwin = compchoice==="paper"? false:true;
        }
        else if (userchoice=== "paper")
            {
                userwin=compchoice==="scissors" ? false : true;
            }
            else {
               userwin = compchoice==="stone" ? false : true;
            } 
            showwinner(userwin);
    }

}



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playgame(userchoice);

    });
});