document.addEventListener("scroll",()=>{
    document.querySelector("nav").style.backgroundColor="black";
})

const imgshow=document.querySelector(".imgshow");
document.getElementById("img1").addEventListener("click",()=>{
    document.querySelector(".imgshow img").classList.add("hide");
    imgshow.innerHTML=`<img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
    document.getElementById("img1").classList.add("borde");
    document.getElementById("img2").classList.remove("borde");
    document.getElementById("img3").classList.remove("borde");
    document.getElementById("img4").classList.remove("borde");
    document.getElementById("img5").classList.remove("borde");
})
document.getElementById("img2").addEventListener("click",()=>{
    document.querySelector(".imgshow img").classList.add("hide");
    imgshow.innerHTML=`<img src="https://images.pexels.com/photos/5211430/pexels-photo-5211430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
    document.getElementById("img1").classList.remove("borde");
    document.getElementById("img2").classList.add("borde");
    document.getElementById("img3").classList.remove("borde");
    document.getElementById("img4").classList.remove("borde");
    document.getElementById("img5").classList.remove("borde");
})
document.getElementById("img3").addEventListener("click",()=>{
    document.querySelector(".imgshow img").classList.add("hide");
    imgshow.innerHTML=`<img src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
    document.getElementById("img1").classList.remove("borde");
    document.getElementById("img2").classList.remove("borde");
    document.getElementById("img3").classList.add("borde");
    document.getElementById("img4").classList.remove("borde");
    document.getElementById("img5").classList.remove("borde");
})
document.getElementById("img4").addEventListener("click",()=>{
    document.querySelector(".imgshow img").classList.add("hide");
    imgshow.innerHTML=`<img src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
    document.getElementById("img1").classList.remove("borde");
    document.getElementById("img2").classList.remove("borde");
    document.getElementById("img3").classList.remove("borde");
    document.getElementById("img4").classList.add("borde");
    document.getElementById("img5").classList.remove("borde");
})
document.getElementById("img5").addEventListener("click",()=>{
    document.querySelector(".imgshow img").classList.add("hide");
    imgshow.innerHTML=`<img src="https://images.pexels.com/photos/5428002/pexels-photo-5428002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">`;
    document.getElementById("img1").classList.remove("borde");
    document.getElementById("img2").classList.remove("borde");
    document.getElementById("img3").classList.remove("borde");
    document.getElementById("img4").classList.remove("borde");
    document.getElementById("img5").classList.add("borde");
})