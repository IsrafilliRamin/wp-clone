let iconChat = document.querySelector(".fa-user-group");
let leftMenu = document.querySelector("#left");
let closeMenu = document.querySelector(".fa-left-long");


iconChat.addEventListener("click",()=>{
    leftMenu.style.left = "0%"
})
closeMenu.addEventListener("click",()=>{
    leftMenu.style.left = "-100%"
})