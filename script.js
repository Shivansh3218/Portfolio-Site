let show =document.querySelector(".show_hide")
let about = document.querySelector(".about_div")
show.addEventListener("click", ()=>{
    document.querySelector(".aside").classList.toggle("active")
    document.querySelector(".show_hide").classList.toggle("going_left")
})
about.addEventListener("click", ()=>{
   about.classList.toggle("activate")
})