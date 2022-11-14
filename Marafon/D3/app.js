const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIntex = 0

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIntex++ 
        if (activeSlideIntex === slidesCount) {
            activeSlideIntex = 0
        }
    } else if (direction === 'down') {
        activeSlideIntex-- 
        if (activeSlideIntex < 0) {
            activeSlideIntex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlideIntex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIntex * height}px)`
}
