document.getElementById("box").addEventListener("click", function(){
    document.getElementById("box-tape").classList.add("box-tape-active");
    document.getElementById("box-tape-left").classList.add("box-tape-left-active");
    document.getElementById("box-tape-right").classList.add("box-tape-right-active");
    document.getElementById("box-gifts").classList.add("box-gifts-active");
    document.getElementById("box-gift").classList.add("box-gift-active");
    document.getElementById("box-gift-shadow").classList.add("box-gift-shadow-active");
    document.getElementById("box-star1").classList.add("box-star-active");
    document.getElementById("box-star2").classList.add("box-star-active");
    document.getElementById("box-star3").classList.add("box-star-active");
    document.getElementById("box-star4").classList.add("box-star-active");
    document.getElementById("box-star5").classList.add("box-star-active");

});
let count = 0;
let box = document.getElementById("box");
box.onclick = function(){
    count++;
  
    if (count === 7) {
    document.getElementById("box-tape").classList.remove("box-tape-active");
    document.getElementById("box-tape-left").classList.remove("box-tape-left-active");
    document.getElementById("box-tape-right").classList.remove("box-tape-right-active");
    document.getElementById("box-gifts").classList.remove("box-gifts-active");
    document.getElementById("box-gift").classList.remove("box-gift-active");
    document.getElementById("box-gift-shadow").classList.remove("box-gift-shadow-active");
    document.getElementById("box-star1").classList.remove("box-star-active");
    document.getElementById("box-star2").classList.remove("box-star-active");
    document.getElementById("box-star3").classList.remove("box-star-active");
    document.getElementById("box-star4").classList.remove("box-star-active");
    document.getElementById("box-star5").classList.remove("box-star-active");
    document.getElementById("kado").style.visibility = "hidden";
    }
    
    let showkado = document.getElementById("kado").style.visibility;
    if ( showkado === "hidden") {
            document.getElementById("button").click()
    }
    let modal8 = document.getElementById("exampleModal8")
    let pesan = document.getElementById("pesan")
    modal8.addEventListener('shown.bs.modal', function () {
        pesan.focus()
      })
}
// kado = function() {
//     let kado = document.getElementById("kado")
//     if (kado.style.visibility === 'hidden') {
//         console.log("anjai bisa");
//        } 
// }

// function kadofunction() {
//     var x = document.getElementById('kado');
//     if (x.style.visibility = 'hidden') {
//         console.log("asuuuuuu")
//     }
//   }
