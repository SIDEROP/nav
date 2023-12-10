document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("new_cls").classList.toggle("active")
})

const btn = document.getElementById("new_cls").querySelectorAll("span")
btn.forEach(e=>{
    e.addEventListener("click",()=>{
        btn.forEach(elm=>elm.classList.remove("atv"))
        e.classList.add("atv")
    })  
})




/* flatu */

let pop = document.getElementById("close")
let pop_click = document.getElementById("click")
let pop_img = document.getElementById("close").querySelector("img")


pop_click.addEventListener("click",()=>{
    pop.classList.remove("pop")
    document.getElementById("new_win").querySelectorAll("img").forEach(e=>{
            pop_img.src = ""
    })
})


let new_win = document.getElementById("new_win").querySelectorAll("img")

new_win.forEach(e=>{
    e.addEventListener("click",()=>{
        pop.classList.add("pop")
        pop_img.src = e.src
    })
})