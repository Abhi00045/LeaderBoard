// let name = document.getElementById("Name");
// let score = document.getElementById("Score");
// let country = document.getElementById("country");
// let AddPlayer = document.getElementById("submit");
// let leaderBoard = document.getElementById("leaderboard");
// let data =[];

// function renderPlayer(){
//     leaderBoard.innerHTML="";
//     data.forEach((ele , idx)=>{
//         let newPlayer = document.createElement("div");
//         newPlayer.classList.add("player");
//         newPlayer.style.display = "flex";
//         newPlayer.style.justifyContent = "space-between";
//         newPlayer.style.alignItems = "center";
//         newPlayer.style.padding = "10px";
//         newPlayer.style.margin = "5px";
//         newPlayer.style.border = "1px solid black";
//         newPlayer.style.borderRadius = "5px";
//         newPlayer.classList.add("bg-blue-600");

//         let scoreMarks = parseInt(score.value);

        

//         newPlayer.innerHTML = `
//         <h3>${idx +1}</h3>
//         <div>
//         <p class="name w-24"> ${name.value}</p>
//         <p class="scored" id="scored"> score :${scoreMarks}</p>
//         </div>
//         <div class="country">
//         <p class="country-name">${country.value}</p>
//         </div>
//         <div>
//         <button id="delete" class="text-base bg-blue-600  w-[80px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800">Delete</button>
//         </div>
//         <div>
//         <button id="update" class="text-base bg-blue-600  w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800">+5</button>
//         </div>
//         <div>
//         <button id="decrease" class="text-base bg-blue-600  w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50  hover:bg-blue-800 ">-5</button>
//         </div>
//         `; 
//         leaderBoard.appendChild(newPlayer);

//         let deleteBtn = newPlayer.querySelector("#delete");
//         let updateBtn = newPlayer.querySelector("#update");
//         let decreaseBtn = newPlayer.querySelector("#decrease");
//         let scoreValue = parseInt(scoreMarks);
//         let scored = document.getElementById("scored");
//         // console.log(scored);
        
//         deleteBtn.addEventListener("click",()=>{
//             data.splice(idx,1);
//             renderPlayer();
//         })
//         updateBtn.addEventListener("click",()=>{
//            scoreValue+=5;
//            scoreMarks=scoreValue;
//            scored.innerHTML = `score : ${scoreMarks}` 
//         // scoreMarks+=5;
//         // renderPlayer();
//         //    renderPlayer();
//         })
//         decreaseBtn.addEventListener("click",()=>{
//             scoreValue-=5;
//            scoreMarks=scoreValue;
//            scored.innerHTML = `score : ${scoreMarks}` 
//         })
//         // console.log(player);
        
//     })
// }


// AddPlayer.addEventListener("click",()=>{
//     if(name.value == "" || score.value == "" || country.value == ""){
//         alert("Please fill all the fields");
//     }else{
//         let player =
//             {
//                 name:name.value,
//                 score:score.value,
//                 country:country.value
//             }
//             data.push(player);
//             renderPlayer();
//             console.log(data);
            
            
//             name.value = "";
//             score.value = "";
//             country.value = ""; 
//     }
// })
let nameInput = document.getElementById("Name");
let scoreInput = document.getElementById("Score");
let countryInput = document.getElementById("country");
let addPlayerButton = document.getElementById("submit");
let leaderBoard = document.getElementById("leaderboard");
let data = [];

// Function to render the leaderboard from the data array
function renderLeaderboard() {
    // Sort the data array by score in descending order
    data.sort((a, b) => b.score - a.score);

    leaderBoard.innerHTML = '';

    data.forEach((player, index) => {
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

        newPlayer.innerHTML = `
            <h3 id ="indexLove">${index + 1}</h3>
            <div>
                <p class="name w-24">${player.name}</p>
                <p class="score">Score: ${player.score}</p>
            </div>
            <div class="country">
                <p class="country-name">${player.country}</p>
            </div>
            <div>
                <button class="delete-btn text-base bg-blue-600 w-[80px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50 hover:bg-blue-800">Delete</button>
            </div>
            <div>
                <button class="update-btn text-base bg-blue-600 w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50 hover:bg-blue-800">+5</button>
            </div>
            <div>
                <button class="decrease-btn text-base bg-blue-600 w-[50px] p-1 rounded-3xl text-center border-x-blue-50 border-2 text-slate-50 hover:bg-blue-800">-5</button>
            </div>
        `;

        leaderBoard.appendChild(newPlayer);

        let deleteBtn = newPlayer.querySelector(".delete-btn");
        let updateBtn = newPlayer.querySelector(".update-btn");
        let decreaseBtn = newPlayer.querySelector(".decrease-btn");
        let idxLove = document.getElementById("indexLove");
        let playerIndex = data.indexOf(player);

        // if(data.length>3){
        // idxLove.innerHTML = `<img class="w-1"  src = "https://cdn.imgbin.com/6/14/18/imgbin-gold-medal-silver-medal-bronze-medal-realistic-gold-medal-round-gold-frame-background-template-uyw5AekncCrW3yizzPFQWqTtZ.jpg">`
        // }

        deleteBtn.addEventListener("click", () => {
            // Find the index of the player in the data array and remove it
            if (playerIndex !== -1) {
                data.splice(playerIndex, 1);
            }
            renderLeaderboard();
        });

        updateBtn.addEventListener("click", () => {
            player.score += 5;
            renderLeaderboard();
        });

        decreaseBtn.addEventListener("click", () => {
            player.score -= 5;
            renderLeaderboard();
        });
    });
}

addPlayerButton.addEventListener("click", () => {
    if (nameInput.value === "" || scoreInput.value === "" || countryInput.value === "") {
        alert("Please fill all the fields");
    } else {
        let newPlayer = {
            name: nameInput.value,
            score: parseInt(scoreInput.value, 10),
            country: countryInput.value
        };
        data.push(newPlayer);
        renderLeaderboard();
        

        // Clear input fields
        nameInput.value = "";
        scoreInput.value = "";
        countryInput.value = "";
    }
});
