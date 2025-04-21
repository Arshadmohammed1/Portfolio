function main(){
    var h1Text = document.querySelector("#firsth1").textContent
var splitedText = h1Text.split("")
var clutter = ""
splitedText.forEach(function(elem) {
  clutter += `<span>${elem}</span>`
});
document.querySelector("#firsth1").innerHTML = clutter

var tl = gsap.timeline()

tl.from("#nav h3", {
    y:-50,
    duration:1,
    opacity:0,
    delay:0.4,
    stagger:0.4
})

tl.from("#main h1", {
    x:-500,
    duration:1,
    opacity:0,
    delay:0.4,
    stagger:0.4
})

tl.from("img", {
    x:100,
    rotate:45,
    opacity:0,
    delay:0.4,
    stagger:0.5
})

tl.to("#page2 h1",{
    transform:"translateX(-500%)",
    stagger:0.1,
    color: "white",
    opacity:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 1",
        end:"top -100",
        scrub:2,
        pin:true
    }
})

tl.to("#page3 h1 span",{
    color: "#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"body",
    markers:false,
    start:"top 80%",
    end:"top 35%",
    scrub:2
    }
})

tl.to("#page4 h1",{
    x:-300,
    opacity:1,
    stagger:0.5,
    /*duration:2,
    delay:1*/
})
}

main()