document.getElementById("firstIcon").addEventListener("click", block1)
document.getElementById("secondIcon").addEventListener("click", block2)
document.getElementById("thirdIcon").addEventListener("click", block3)

function block1() {
    var check = document.getElementById("firstUL")

    if (check.style.display == "block") {
        check.style.display = "none"
        check.style.listStyleType = "none"
    } else {
        check.style.display = "block"
        check.style.listStyleType = "none"
    }

}
function block2() {
    var check = document.getElementById("secondUL")
    if (check.style.display == "block") {
        check.style.display = "none"
        check.style.listStyleType = "none"
    } else {
        check.style.display = "block"
        check.style.listStyleType = "none"
    }

}
function block3() {
    var check = document.getElementById("thirdUL")
    if (check.style.display == "block") {
        check.style.display = "none"
        check.style.listStyleType = "none"
    } else {
        check.style.display = "block"
        check.style.listStyleType = "none"
    }
}


