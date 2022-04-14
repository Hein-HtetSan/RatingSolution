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
    })
})






submitBtn.addEventListener('click', () => {
    console.log('clicked')
    container.classList.add('show-submit')
})



