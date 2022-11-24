// open and close main
document.querySelector(".fa-gear").onclick =function (){

    document.querySelector(".setting").classList.toggle("open")
}


// color
let colorli =document.querySelectorAll(".color-list li")

colorli.forEach(li => {
    li.addEventListener("click", (e)=> {
    document.documentElement.style.setProperty('--color--', e.target.dataset.color)
})
})

// switsh img back
    const imgback= document.querySelectorAll(".random-background span")

imgback.forEach(span =>{
    span.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")

        if(e.target.dataset.back === "yes"){
            backgroundImge= true
            background()
        }
        else{
            backgroundImge =false;
            clearInterval(backgroundint)
            
        }
    }
    )
})



//  img
let page = document.querySelector(".landing-page");

let img =['1.webp','2.jpg','3.jpg','4.png'];

page.style.backgroundImage = 'url("assets/img/3.jpg")'
let backgroundImge =true;
let backgroundint;

function background(){
    if(backgroundImge === true){
      backgroundint = setInterval(() =>{
    let number1=Math.floor(Math.random() * img.length)
    page.style.backgroundImage = 'url("assets/img/'+ img[number1] +'")';
},3000)
    }
   

}
background()

// propess
let skilles =document.querySelector(".skilles")
let spans =document.querySelectorAll(".propress span")
window.onscroll= function(){

    if( scrollY >= skilles.offsetTop -300 ){
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }

}


// gallery 

let ourgallery =document.querySelectorAll(".gallery img")

ourgallery.forEach(img =>{
    img.addEventListener("click",(e)=>{
        let div =document.createElement("div")

        div.className = 'popup'

        let closebtn= document.createElement("span")
        let X =document.createTextNode("X")

        closebtn.className = 'btn-close-popup'

        closebtn.appendChild(X)
        

        let divbox= document.createElement("div")

        divbox.className= 'popup-box'

        let imgBox=document.createElement("img")

        imgBox.src = img.src;

        if(img.alt !==null){

            let imghead =document.createElement("h3")

            let textimg =document.createTextNode(img.alt.toUpperCase())

            imghead.appendChild(textimg)
            divbox.appendChild(imghead)

        }

        


        divbox.appendChild(imgBox)
        divbox.appendChild(closebtn)
        div.appendChild(divbox)
        document.body.appendChild(div)
    })
})

document.addEventListener("click",(e)=>{
    if(e.target.className == 'btn-close-popup'){
        document.querySelector(".popup").remove()
    }
})


// bullets
const Allbullets= document.querySelectorAll(".nav-bullets .bullets")
const Alllinke= document.querySelectorAll(".links a")



// Allbullets.forEach(bullet=>{
//     bullet.addEventListener("click",(e)=>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior : 'smooth'
//         })
//     })
// })


function trans(element){
    element.forEach(ele=>{

        ele.addEventListener("click",(e)=>{
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
    })
}

trans(Allbullets)
trans(Alllinke)
// show bullets

let Allshow =document.querySelectorAll(".bullets-option span")

let bulletcon = document.querySelector(".nav-bullets")

let bulletstorge =localStorage.getItem("bullets_option")

// stor the bullets-nav
if( bulletstorge !== null){
    Allbullets.forEach(span =>{

        span.classList.remove("active")
    })
    if(bulletstorge == 'block'){
        bulletcon.style.display = "block"
        document.querySelector(".bullets-option .yes").classList.add("active")
    }
    else{
        bulletcon.style.display = 'none'
    }
}


Allshow.forEach(span => {
    span.addEventListener("click",(e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(el=>{
            el.classList.remove("active")
        })
        e.target.classList.add("active")

        if(span.dataset.display === 'show'){
            bulletcon.style.display = 'block'

            localStorage.setItem("bullets_option", "block")
        }
        else
        if(span.dataset.display === 'none'){
            bulletcon.style.display = 'none'

            localStorage.setItem("bullets_option", "none")

        }
        
    })
})
// menu

let btntoggle =document.querySelector(".toggle-menu")
let linkesm = document.querySelector(".header-area .links")

btntoggle.addEventListener("click" , function(){
    this.classList.toggle("menu-active")
    linkesm.classList.toggle("open")
})

document.addEventListener("click", (e)=>{
    if(e.target !== btntoggle && e.target !== linkesm ){
        linkesm.classList.remove("open")
        btntoggle.classList.remove("menu-active")
    }
})

