function showToast(){

const toast = document.getElementById("toast")

toast.innerText = "Registration Page Coming Soon 🚀"

toast.style.display = "block"

setTimeout(function(){

toast.style.display = "none"

},3000)

}