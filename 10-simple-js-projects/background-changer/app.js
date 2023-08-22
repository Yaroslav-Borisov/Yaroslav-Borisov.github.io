const pageBody = document.querySelector(".page-body")
const colorChangerBtn = document.querySelector(".button")

colorChangerBtn.addEventListener('click', function(event) {
    let red = Math.trunc(Math.random() * 255)
    let green = Math.trunc(Math.random() * 255)
    let blue = Math.trunc(Math.random() * 255)
    
    pageBody.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    console.log(pageBody.style.backgroundColor)
})



