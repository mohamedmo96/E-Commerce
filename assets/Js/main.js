

/**
 * navbar toggle
 */



var slider = document.querySelector(".image-slider")
var arrLeft = document.querySelector(".arrow-left")
var arrRight = document.querySelector(".arrow-right")

// var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
var images = [ "2.PNG", "3.PNG","4.PNG"]

let id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(${images[id]})`
    }
    
    slide(id);

    arrRight.addEventListener("click", () => {
      id++;
      if (id > images.length - 1) {
          id = 0;
      }
      slide(id);
    })
    
    arrLeft.addEventListener("click", () => {
        id--;
        if (id < 0) {
            id = images.length - 1;
        }
        slide(id);
    })
    let changeColors = document.querySelector('.container');

function changeColor(color){
    changeColors.style.background = color;
}  

  let changeColorP = document.querySelector('.text');

function changeColorp(color){
  changeColorP.style.color = color;
}




function showImage() {
  document.getElementById("p1").style.display = "block"
  document.getElementById("p2").style.display = "none"
 



  var div1 = document.getElementById("imgdiv1")
  div1.style.display = "flex"
  

}
function showImage2() {
  document.getElementById("p2").style.display = "block"
  document.getElementById("p1").style.display = "none"
  document.getElementById("p3").style.display = "none"
  document.getElementById("p4").style.display = "none"
  document.getElementById("p5").style.display = "none"

  var div1 = document.getElementById("imgdiv2")
  div1.style.display = "flex"
  div1.style.flexWrap = "wrap"


  document.getElementById("imgdiv1").style.display = "none"
  document.getElementById("imgdiv3").style.display = "none"
  document.getElementById("imgdiv4").style.display = "none"
  document.getElementById("imgdiv5").style.display = "none"


}
function showImage3() {
  document.getElementById("p1").style.display = "none"
  document.getElementById("p2").style.display = "none"
  document.getElementById("p3").style.display = "block"
  document.getElementById("p4").style.display = "none"
  document.getElementById("p5").style.display = "none"

  var div1 = document.getElementById("imgdiv3")
  div1.style.flexWrap = "wrap";
  div1.style.display = "flex"

  document.getElementById("imgdiv1").style.display = "none"
  document.getElementById("imgdiv2").style.display = "none"
  document.getElementById("imgdiv4").style.display = "none"
  document.getElementById("imgdiv5").style.display = "none"




}
function showImage4() {
  document.getElementById("p1").style.display = "none"
  document.getElementById("p2").style.display = "none"
  document.getElementById("p3").style.display = "none"
  document.getElementById("p4").style.display = "block"
  document.getElementById("p5").style.display = "none"

  var div1 = document.getElementById("imgdiv4")
  div1.style.flexWrap = "wrap";
  div1.style.display = "flex"
  document.getElementById("imgdiv3").style.display = "none"
  document.getElementById("imgdiv5").style.display = "none"
  document.getElementById("imgdiv1").style.display = "none"
  document.getElementById("imgdiv2").style.display = "none"



}
function showImage5() {
  document.getElementById("p1").style.display = "none"
  document.getElementById("p2").style.display = "none"
  document.getElementById("p3").style.display = "none"
  document.getElementById("p4").style.display = "none"
  document.getElementById("p5").style.display = "block"

  var div1 = document.getElementById("imgdiv5");
  div1.style.display = "flex"
  div1.style.flexWrap = "wrap";
  document.getElementById("imgdiv1").style.display = "none"
  document.getElementById("imgdiv2").style.display = "none"
  document.getElementById("imgdiv3").style.display = "none"
  document.getElementById("imgdiv4").style.display = "none"



}
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  
}
