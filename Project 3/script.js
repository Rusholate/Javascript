var Hello = true
    if (Hello === true) {
        Hello = "Welcome to my project!"
        }
    else {
        Hello = "I failed my project.."
        }

// alert(Hello)

function activeButton() {

    var alter = document.getElementById("alter")
    var div = document.getElementById("div")
    var whereMyGlasses = document.getElementById("whereMyGlasses")
    alter.innerHTML = "Did I do well..?"
    div.style.backgroundColor = "red"
    whereMyGlasses.style.display = "block"
    }

var whereMyGlasses = document.getElementById("whereMyGlasses")
var bidoof = document.getElementById("bidoof")
var pikachu = document.getElementById("pikachu")
var pikachuFaint = document.getElementById("pikachuFaint")


var images = document.querySelectorAll('.images')
var arrayofImages = [];

// This is a "for" loop
for (var i = 0; i < images.length; i++) {
  // Puts all the images into an array
  arrayofImages.push(images[i])

  // Attaches an Event Listner to every image
  images[i].addEventListener("click", function() {
    images[i].style.display = 'none'
    images[i+1].style.display = 'block'
  })
}

console.warn(arrayofImages)
