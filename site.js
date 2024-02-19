function openNav() {
   
    document.getElementById("mySidenav").style.marginLeft = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.marginLeft = "-100vw";
    document.getElementById("main").style.marginLeft= "0vw";
  }

const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);
let state=false;

if (state===false){
function clickBell(){
  
  let notification = document.getElementById("notification-icon")
  notification.innerHTML="Subscribed"

  const width_1 = document.getElementById("notification");
  width_1.style.width="10px";
  state=true;
}
} else{
  function clickBell(){

  let notification = document.getElementById("notification-icon")
  notification.innerHTML="Subscribe for notifications"

  const width_1 = document.getElementById("notification");
  width_1.style.width="50px";
  state=false;
}
}