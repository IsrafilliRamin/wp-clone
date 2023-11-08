let iconChat = document.querySelector(".fa-user-group");
let leftMenu = document.querySelector("#left");
let closeMenu = document.querySelector(".fa-left-long");
var chatContainer = document.querySelector(".allMessage");
var chatContainerDivs = [...document.querySelectorAll(".allMessage > div")];
let allDivsHeight = 0;
chatContainerDivs.forEach((div) => {
    allDivsHeight += div.clientHeight

})
if ((chatContainer.clientHeight - 200) < allDivsHeight) {
    chatContainer.style.justifyContent = "initial"
}
chatContainer.scrollTop = chatContainer.scrollHeight;
iconChat.addEventListener("click", () => {
    leftMenu.style.left = "0%"
})
closeMenu.addEventListener("click", () => {
    leftMenu.style.left = "-100%"
})