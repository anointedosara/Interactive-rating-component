const rates = document.querySelector(".rates")
const rating = document.querySelector(".rating")
const thankYou = document.querySelector(".thank-you")
const submitBtn = document.querySelector(".submit-btn")
const numberSelected = document.querySelector(".number-selected")
const num = ['1', '2', '3', '4', '5']

let submit = true

thankYou.classList.add('hidden')
num.forEach(item => {
    rates.innerHTML += `<div class="rate">${item}</div>`
})
const rate = document.querySelectorAll(".rate")
for (let i = 0; i < rate.length; i++) {
    rate[i].addEventListener("click", () => {
        for (let j = 0; j < rate.length; j++) {
            rate[j].classList.remove('selected')
        }
        rate[i].classList.add('selected')
        submit = false
        numberSelected.innerHTML += `
        You selected ${rate[i].innerHTML} out of ${rate.length}
`
    })
}

submitBtn.addEventListener("click", () => {
    if (submit === false) {
        thankYou.classList.remove('hidden')
    rating.classList.add('hidden')
    }
})