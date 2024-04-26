const max = document.getElementById('btn-max');
const min = document.getElementById('btn-min');
const reset = document.getElementById('btn-re');
let clock = document.querySelector(".clock")
let i = 0;

max.addEventListener('mouseover', function() {
max.style.transition = 'ease-in 0.2s';
max.style.fontSize = '250%';
// alert("increased")
});

max.addEventListener('mouseout', function () {
    max.style.transition = 'ease-out 0.2s';
    max.style.fontSize = '200%';
});

max.addEventListener('click', function() {
    max.style.transition = 'ease-out 0.2s';
    max.style.fontSize = '150%';
    max.innerHTML = "Punch me!!!";
    if (i > 20 && i < 50)
    {
        max.innerHTML = "Are you getting tired??";
    }
    else if (i > 50 && i < 100)
    {
        max.innerHTML = "Whewwww!!!!!";
    }
    else{
        max.innerHTML = 'increase'
    }
    let results = ++i;
    clock.textContent = results
});


reset.addEventListener('click', function() {
    max.style.transition = 'ease-out 0.2s';
    max.style.fontSize = '150%';
    i = 0;
    clock.textContent = i
});

min.addEventListener('click', function() {
    max.style.transition = 'ease-out 0.2s';
    max.style.fontSize = '150%';
    let results = --i;
    clock.textContent = results
});