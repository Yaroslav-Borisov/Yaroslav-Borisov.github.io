const text = document.querySelector(".text")
const str = "My name is Yaroslav. I'm a frontend developer"

let typeText = function (str, speed) {
    let index = 0

    const id = setInterval(() => {

        index++
        text.innerHTML = str.slice(0, index)
        console.log(index)

        if (index >= str.length) {
            clearInterval(id)
            setTimeout(() => typeText(str, speed), 2000)
        } 

    }, speed)

}

typeText(str, 250)



