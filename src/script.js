let name = document.getElementById("Name");
let score = document.getElementById("Score");
let country = document.getElementById("country");
let AddPlayer = document.getElementById("submit");
let leaderBoard = document.getElementById("leaderboard");
let data =[];


AddPlayer.addEventListener("click",()=>{
    if(name.value == "" || score.value == "" || country.value == ""){
        alert("Please fill all the fields");
    }else{
        let player ={
            name:name.value,
            score:score.value,
            country:country.value
        }

        let newPlayer = document.createElement("div");
        newPlayer.classList.add("player");
        newPlayer.style.display = "flex";
        newPlayer.style.justifyContent = "space-between";
        newPlayer.style.alignItems = "center";
        newPlayer.style.padding = "10px";
        newPlayer.style.margin = "5px";
        newPlayer.style.border = "1px solid black";
        newPlayer.style.borderRadius = "5px";
        newPlayer.classList.add("bg-blue-600");

        newPlayer.innerHTML = `<div class="flex justify-evenly gap-4">
        <p class="name"> ${name.value}</p>
        <p class="score"> score :${score.value}</p>
        </div>
        <div class="country">
        <p class="country-name">${country.value}</p>
        </div>
        <div>
        <button id="delete" class="text-base bg-blue-600  w-[80px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800">Delete</button>
        </div>
        <div>
        <button id="update" class="text-base bg-blue-600  w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800">+5</button>
        </div>
        <div>
        <button id="decrease" class="text-base bg-blue-600  w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800 ">-5</button>
        </div>
        `; 
        leaderBoard.appendChild(newPlayer);
        name.value = "";
        score.value = "";
        country.value = ""; 

        let deleteBtn = newPlayer.querySelector("#delete");
        let updateBtn = newPlayer.querySelector("#update");
        let decreaseBtn = newPlayer.querySelector("#decrease");

        deleteBtn.addEventListener("click",()=>{
            newPlayer.remove();
        })
        updateBtn.addEventListener("click",()=>{
            player.score =+ parseInt(player.score) + 5
        })
        decreaseBtn.addEventListener("click",()=>{
            player.score =+ parseInt(score.value) - 5
        })
    }
})

