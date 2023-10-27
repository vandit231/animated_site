const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocon.addEventListener("mouseenter",()=>{
    // playbtn.style.opacity=1
    // playbtn.style.scale=1
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })

})
videocon.addEventListener("mouseleave",()=>{
    // playbtn.style.opacity=1
    // playbtn.style.scale=1
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })

})
videocon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y-70
    })

})
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.2
})
gsap.from("#page1 #video-container",{
    scale:0.8,
    opacity:0,
    delay:0.6,
    duration:0.3
})
var mousemovebutton=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    gsap.to(mousemovebutton,{
        left:dets.x,
        top:dets.y
    })
})