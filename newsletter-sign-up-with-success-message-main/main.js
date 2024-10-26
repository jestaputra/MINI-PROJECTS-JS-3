let content = document.getElementById("content-1")
let inputBox = document.getElementById("inputBox")
let confirm = document.getElementById("confirm")

function checkEmail(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputBox.value.match(validRegex)){
        let popup = document.querySelector(".popup")
        popup.style.display = "block"
        document.querySelector(".container").style.display = "none"
        confirm.addEventListener("click", () => {
            popup.style.display = "none"
            document.querySelector(".container").style.display = "flex"
        })
        inputBox.value = ""
        return true
    }else{
        let label = document.createElement("label")
        label.innerText = "*your email invalid"
        content.appendChild(label)
        inputBox.classList.add("wrong")
        setTimeout(() => {
            content.removeChild(label)
            inputBox.classList.remove("wrong")
        }, 3000)
        inputBox.value = ""
        return false
    }
}
