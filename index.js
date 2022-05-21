const mac = document.querySelector('.mac')
const currentColor = document.querySelector('.currentColor')
const btnColors = document.querySelectorAll('[data-setColor]')

let currentPrice = document.querySelector('.currentPrice')
const prices = document.querySelectorAll('[data-sum]')
let price = 1.999

let whiteBtn = document.querySelector('.one')
let greyBtn = document.querySelector('.two')

btnColors.forEach(color => {
    color.onclick = () => {
        changeColor(color.getAttribute('data-setColor'))
        color.classList.add('activated')
    }
})

prices.forEach(pric => {
    pric.onclick = () => {
        sum(pric.getAttribute('data-sum'))
    }
});

function changeColor(color) {
    switch (color) {
        case 'white':
            mac.style.opacity = '0'
            setTimeout(() => {
                mac.style.opacity = '1'
                mac.setAttribute('src', './assets/png/mbp14-silver-select-202110 1.png')
            }, 600);            
            currentColor.innerHTML = 'White'
            whiteBtn.classList.add('activated')
            greyBtn.classList.add('color')
            greyBtn.classList.remove('activated')
            break;
            case 'grey':
            mac.style.opacity = '0'

            greyBtn.classList.add('activated')
            whiteBtn.classList.add('color')
            whiteBtn.classList.remove('activated')
            setTimeout(() => {
                mac.style.opacity = '1'
                mac.setAttribute('src', './assets/png/mbp14-spacegray-select-202110 1.png')
            }, 600);
            currentColor.innerHTML = 'Space Grey'
            break;
        
        default:
            break;
    }
}
let firstDatum = document.querySelector('.firstDatum')
let secondDatum = document.querySelector('.secondDatum')
let thirdDatum = document.querySelector('.thirdDatum')
let fourthDatum = document.querySelector('.fourthDatum')

function sum(number) {
    switch (number) {
        case '0':
            firstDatum.classList.remove('datum')

            secondDatum.classList.add('datum')
            thirdDatum.classList.add('datum')
            fourthDatum.classList.add('datum')

            secondDatum.classList.remove('active__data')
            thirdDatum.classList.remove('active__data')
            fourthDatum.classList.remove('active__data')

            firstDatum.classList.add('active__data')

            currentPrice.innerHTML = '$' + price
            break;
        case '200':
            secondDatum.classList.remove('datum')

            firstDatum.classList.add('datum')
            thirdDatum.classList.add('datum')
            fourthDatum.classList.add('datum')

            firstDatum.classList.remove('active__data')
            thirdDatum.classList.remove('active__data')
            fourthDatum.classList.remove('active__data')

            secondDatum.classList.add('active__data')

            currentPrice.innerHTML = '$' + (price + 0.2).toFixed(3)
            break;
        case '600':
            thirdDatum.classList.remove('datum')

            secondDatum.classList.add('datum')
            firstDatum.classList.add('datum')
            fourthDatum.classList.add('datum')

            secondDatum.classList.remove('active__data')
            firstDatum.classList.remove('active__data')
            fourthDatum.classList.remove('active__data')

            thirdDatum.classList.add('active__data')

            currentPrice.innerHTML = '$' + (price + 0.600)
            break;
        case '1200':
            fourthDatum.classList.remove('datum')

            secondDatum.classList.add('datum')
            thirdDatum.classList.add('datum')
            firstDatum.classList.add('datum')

            secondDatum.classList.remove('active__data')
            thirdDatum.classList.remove('active__data')
            firstDatum.classList.remove('active__data')

            fourthDatum.classList.add('active__data')

            currentPrice.innerHTML = '$' + (price + 1.200)
            break;
    
        default:
            break;
    }
}
