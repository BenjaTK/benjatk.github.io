const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-image")

const images = document.querySelectorAll('img.lightboxable')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        lightboxImg.src = image.src
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})