let currentSlide = 0
const images = ['ban-1.jpg', 'ban-2.jpg', 'ban-3.jpg', 'ban-4.jpg', 'ban-5.jpg', 'ban-6.jpg']
const listId = document.getElementById("carousel_list_id")
const carouselId = document.getElementById("img_id")
const list = images.reduce((accumulator, current, index) => {
    accumulator += `<img id="list_${index}" class="list_images" onclick="selectSlide(${index})" src="images/${current}"></img>`
    return accumulator;
}, '')

listId.innerHTML = list
const itemId = document.querySelectorAll(".list_images");
carouselId.src = `images/${images[0]}`
itemId[currentSlide].classList.add("active");

function changeSlide(action) {
    if (action === 'prev' && currentSlide != 0) {
        addClass(currentSlide, currentSlide - 1)
        currentSlide -= 1;
        carouselId.src = `images/${images[currentSlide]}`
    }
    else if (action === 'next' && currentSlide < images.length - 1) {
        addClass(currentSlide, currentSlide + 1)
        currentSlide += 1;
        carouselId.src = `images/${images[currentSlide]}`
    }
}

function selectSlide(index) {
    carouselId.src = `images/${images[index]}`
    addClass(currentSlide, index)
    currentSlide = index;
    clearInterval(is)

}

function addClass(prevIndex, currIndex) {
    itemId[prevIndex].classList.remove("active");
    itemId[currIndex].classList.add("active");

}

//timer function
// function startTimer() {
//     itemId[currentSlide].classList.remove("active");

//     if (currentSlide < images.length - 1) {
//         currentSlide += 1;
//         carouselId.src = `images/${images[currentSlide]}`
//     }
//     else {
//         carouselId.src = `images/${images[0]}`
//     }

// }
// setInterval(startTimer, 2000)