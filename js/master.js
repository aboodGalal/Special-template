let landPage = document.querySelector(".landing-page")
let imagesArr = ["images/096a35453660aa9b83ba4ab6d9182d61.jpg","images/131661-sky-stars-mountain-trees-night-748x421.jpg","images/343619.jpg","images/mountains-best-for-desktop-background-wallpaper-preview.jpg","images/photo-1551509134-2f9d4ec80a9b.jpg"]


// landPage.style.backgroundImage = "url('images/096a35453660aa9b83ba4ab6d9182d61.jpg')"



// let randomNumber = Math.floor(Math.random() * imagesArr.length);
// landPage.style.backgroundImage = "url('" + imagesArr[randomNumber] + "')";

// setInterval(function() {
//     randomNumber = Math.floor(Math.random() * imagesArr.length);
//     landPage.style.backgroundImage = "url('" + imagesArr[randomNumber] + "')";
// }, 10000);



















let containI = document.querySelector(".containI")
let i = document.querySelector(".containI i")
let settings = document.querySelector(".settings-box")

containI.onclick = function(){
    settings.classList.toggle("open")
    i.classList.toggle("fa-spin")
}











let colorsLi = document.querySelectorAll(".list-colors li")

if(window.localStorage.getItem("color")){
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("color"))

    colorsLi.forEach(lr =>{
        lr.classList.remove("active")
    })


    colorsLi.forEach(la =>{
        if(la.dataset.color === window.localStorage.getItem("color")){
            la.classList.add("active")
        }
    })
}


colorsLi.forEach(li =>{
    li.addEventListener("click", (e) =>{
        // console.log(e.currentTarget)
        document.documentElement.style.setProperty("--main-color", e.currentTarget.dataset.color)

        colorsLi.forEach(lr =>{
            lr.classList.remove("active")
        })

        e.currentTarget.classList.add("active")

        window.localStorage.setItem("color", e.currentTarget.dataset.color)
    })
})




















// window.localStorage.clear()

let yesNo = document.querySelectorAll(".yes,  .no")


if(window.localStorage.getItem("random")){

    let randomNumber = Math.floor(Math.random() * imagesArr.length)

    landPage.style.backgroundImage = window.localStorage.getItem("random")

    yesNo.forEach(er =>{
        er.classList.remove("active")
    })

    if(window.localStorage.getItem("random") === "url('images/"+ imagesArr[randomNumber] +"')"){
        yesNo.forEach(ed =>{
            if(ed.classList.contains("yes")){
                ed.classList.add("active")
            }
        })
    }else{
        yesNo.forEach(ed =>{
            if(ed.classList.contains("no")){
                ed.classList.add("active")
            }
        })
    }
}



let intervalId; // Variable to store the interval ID

yesNo.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("yes")) {
      intervalId = setInterval(function() {
        randomNumber = Math.floor(Math.random() * imagesArr.length);
        landPage.style.backgroundImage = "url('" + imagesArr[randomNumber] + "')";
      }, 9000);

      let randomNumber = Math.floor(Math.random() * imagesArr.length);
      window.localStorage.setItem("random", "url('images/" + imagesArr[randomNumber] + "')");

      yesNo.forEach(ac => {
        ac.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
    } else if (e.currentTarget.classList.contains("no")) {
      clearInterval(intervalId); // Stop the interval

      landPage.style.backgroundImage = "url('images/photo-1551509134-2f9d4ec80a9b.jpg')";
      window.localStorage.setItem("random", "url('images/photo-1551509134-2f9d4ec80a9b.jpg')");

      yesNo.forEach(ac => {
        ac.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
    }
  });
});












let span1 = document.querySelector(".skills .box:nth-child(2) .progress span")
let span2 = document.querySelector(".skills .box:nth-child(3) .progress span")
let span3 = document.querySelector(".skills .box:nth-child(4) .progress span")


window.addEventListener("scroll", function(){
    let scrollPosition = window.scrollY

    if(scrollPosition > 720){
        span1.style.width = "90%"
        span2.style.width = "75%"
        span3.style.width = "65%"
    }
})














let images = document.querySelectorAll(".images-box div img")
let popup = document.querySelector(".popup")
let popupImg = document.querySelector(".popup img")
let overLay = document.querySelector(".overlay2")
let popupBtn = document.querySelector(".popup .btn")



images.forEach(img =>{
    img.addEventListener("click", (e) =>{
        popup.style.display = "block"
        popupImg.setAttribute("src", img.src)
        overLay.style.display = "block"
    })
})
// overLay.onclick = function(){
//     popup.style.display = "none"
//     overLay.style.display = "none"
// }
popupBtn.onclick = function(){
    popup.style.display = "none"
    overLay.style.display = "none"
}














let circle = document.querySelectorAll(".nav .box a")


circle.forEach(cr =>{
    cr.onmousemove = function(){
        cr.previousElementSibling.style.opacity = "1"
    }
})
circle.forEach(cr =>{
    cr.onmouseleave = function(){
        cr.previousElementSibling.style.opacity = "0"
    }
})



let yesNo2 = document.querySelectorAll(".yes2,.no2")
let nav = document.querySelector(".nav")



if(window.localStorage.getItem("shhdn")){
    nav.style.opacity = window.localStorage.getItem("shhdn")[0]
    nav.style.z_index = window.localStorage.getItem("shhdn")[1]


    yesNo2.forEach(rm =>{
        rm.classList.remove("active")
    })


    if(window.localStorage.getItem("shhdn")[0] == 1){
        yesNo2.forEach(el => {
            if(el.classList.contains("yes2")){
                el.classList.add("active")
            }
        })
    }else{
        yesNo2.forEach(el => {
            if(el.classList.contains("no2")){
                el.classList.add("active")
            }
        })
    }
}


yesNo2.forEach(el => {
    el.addEventListener("click", (e) =>{
        if(e.currentTarget.classList.contains("yes2")){
            nav.style.opacity = "1"
            nav.style.z_index = "3"
    
            window.localStorage.setItem("shhdn", [1,3])


            yesNo2.forEach(rm =>{
                rm.classList.remove("active")
            })


            e.currentTarget.classList.add("active")
        }else{
            nav.style.opacity = "0"
            nav.style.z_index = "-1"
            
            
            window.localStorage.setItem("shhdn", [0,-1])



            yesNo2.forEach(rm =>{
                rm.classList.remove("active")
            })


            e.currentTarget.classList.add("active")
        }
    })
})















let reset = document.querySelector(".content .reset").onclick = function(){
    window.localStorage.removeItem("color")
    window.localStorage.removeItem("shhdn")
    window.localStorage.removeItem("random")


    window.location.reload()
}

