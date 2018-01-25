var image = document.getElementsByClassName("tamanoAnimal");
var select = document.getElementById("select");
select.onchange = function(){
  //primero quito todas las clases para evitar el bug, se quedan las clases encoladas y ya no hace nada
  for (var i= 0; i<image.length;i++){
    image[i].classList.remove("white-black");
    image[i].classList.remove("negative-colors");
    image[i].classList.remove("sepia");
  }
  if (select.value == "original"){
    for (var i= 0; i<image.length;i++){
      image[i].classList.remove("white-black");
      image[i].classList.remove("negative-colors");
      image[i].classList.remove("sepia");
    }
  }
  else if (select.value=="white-black") {
    for (var i= 0; i<image.length;i++){
      image[i].classList.add("white-black");
    }
  }
  else if (select.value=="negative-colors") {
    for (var i= 0; i<image.length;i++){
      image[i].classList.add("negative-colors");
    }
  }
  else if (select.value=="sepia") {
    for (var i= 0; i<image.length;i++){
      image[i].classList.add("sepia");
    }
  }
}
