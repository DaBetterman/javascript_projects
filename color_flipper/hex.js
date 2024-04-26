const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    let results = "#";
    for (let i = 0; i < 6; i++)
    {
        results += hex[getRandomNumber()];
    }
    
    document.body.style.backgroundColor = results;
    color.textContent = results
    // color.style.color = "#FFFFFF";
    // console.log(results);
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
