const startContainer = document.querySelector('.set-rate-container');
const submitBtn = document.getElementById('submitBtn');
const thanksContainer = document.querySelector('.thanks-container');

const ratings = document.querySelectorAll('.set-rate-item');

ratings.forEach(rate=>{

    rate.addEventListener('click', (e)=>{

        ratings.forEach(rate=>{
            rate.classList.remove('selected');
        })

        rate.classList.add('selected');
        submitBtn.style.pointerEvents="all";

    })
})



const yourRate = document.querySelector('.your-rate');

submitBtn.addEventListener('click', ()=>{
    var selectedItemValue = document.querySelector('.selected').value;

    yourRate.innerHTML = selectedItemValue;

    startContainer.style.display="none";
    thanksContainer.style.display="flex";

})