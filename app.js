const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelectorAll('.nextBtn')
const prevBtn = document.querySelectorAll('.prevBtn')

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})