let Heading = document.getElementById("heading")
let buttonGen = document.getElementById("genBtn")

let Dice = [
    "1", "2", "3", "4", "5", "6",
]


buttonGen.onclick = function getRandomName() {
    Name = Math.floor(Math.random() * Dice.length)
    Name = Dice[Name]
    Heading.innerHTML =  Name;
}


 console.log(Name)