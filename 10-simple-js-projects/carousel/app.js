const images = [
    'https://img.goodfon.ru/original/1280x1024/9/bd/medved-buryi-svet-les-poliana-listia-profil.jpg',
    'https://funik.ru/wp-content/uploads/2018/11/17c0a0a91dda10657f73.jpg',
    'https://w.forfun.com/fetch/00/00afef8809cdc4e4f6f62c38d581c2d4.jpeg',
    'https://jooinn.com/images/brown-moose-1.jpg',
    'https://imgfon.ru/Img/Crop/1600x1200/Animals/volk-hischnik-vzglyad-sherst-lejit.jpg?img.1',
]

images.push(images[0])

const html = `
    <div class="carousel">
        <ul class="carousel__list" data-carousel-list>
            ${images.map(image => `<li class="carousel__item" data-carousel-item>
                <img class="carousel__image" src="${image}"/>
            </li>`).join('\n')}
        </ul>
    </div>`

const container = document.getElementById('app')
container.innerHTML = html

let index = 0

const carouselList = document.querySelector('[data-carousel-list]')

function animate () {
    if (index === images.length) {
        carouselList.classList.add('carousel__list--no-transition')
        index = 0
    } else {
        carouselList.classList.remove('carousel__list--no-transition')
    }
  
    carouselList.style.transform = `translateX(-${index * 500}px)`;
    index++
}

animate()
  
setInterval(() => animate(), 2000)









