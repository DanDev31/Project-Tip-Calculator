const totalValue = document.querySelector('.billValue');
const percentage = document.querySelector('.options');
const totalPeople = document.querySelector('.peopleAmount');
const calculateButton = document.querySelector('.button');
const result = document.querySelector('.result');


calculateButton.addEventListener('click', calculateTip);

function calculateTip (e) {
    e.preventDefault();

    const tip = Math.ceil(Math.round((totalValue.value * percentage.value) / totalPeople.value));

    result.innerHTML = "La propia recomendada es $: " + tip + " pesos";
    result.style.fontSize = "16px"



}