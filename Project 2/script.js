var Hello = true
    if (Hello === true) {
        Hello = "Welcome to my project!"
        }
    else {
        Hello = "I failed my project.."
        }

show = alert(Hello)

function activeButton() {

    var alter = document.getElementById("alter")
    var div = document.getElementById("div")
    var whereMyGlasses = document.getElementById("whereMyGlasses")
    alter.innerHTML = "Did I do well..?"
    div.style.backgroundColor = "red"
    whereMyGlasses.style.display = "block"
    }
