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