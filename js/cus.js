const numRatingBtn = document.querySelectorAll(".btn")
const container = document.querySelector('.container-2')
const submitBtn = document.querySelector('.submit-btn')
const number = document.querySelector('.number')



numRatingBtn.forEach(function(btn) {
    const current = btn.querySelector('.num-btn')
    current.addEventListener('click', function() {
        numRatingBtn.forEach(function(item){
            if(item !== btn){
                item.classList.remove('active')
            }
        })
        btn.classList.toggle('active')
        if(btn.classList.contains('active') && current.classList.contains('num1')){
            number.textContent = 1;
        } else if (btn.classList.contains('active')  && current.classList.contains('num2')){
            number.textContent = 2;
        } else if (btn.classList.contains('active')  && current.classList.contains('num3')){
            number.textContent = 3;
        } else{
            number.textContent = 4;
        }
    })
})

var loader;
function loadNow(opacity) {
    if (opacity <= 0){
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05)
        }, 150)
    }
}
function displayContent() {
    loader.style.display = 'none';
    document.querySelector('.container').style.display = 'gird';
}

document.addEventListener('DOMContentLoaded', function() {
    loader = document.querySelector('.loader');
    loadNow(1);
});





submitBtn.addEventListener('click', () => {
    console.log('clicked')
    container.classList.add('show-submit')
})



