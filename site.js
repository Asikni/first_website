function openNav() {
   
    document.getElementById("mySidenav").style.marginLeft = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.marginLeft = "-100vw";
    document.getElementById("main").style.marginLeft= "0vw";
  }

  document.getElementById('searchIcon').onclick = function() {
    document.getElementById('search').classList.add("visible");
    document.getElementById('clear').classList.add("visible");
    document.getElementById('search').focus();
    document.getElementById('searchIcon').classList.add("hide");
  }
  document.getElementById('clear').onclick = function() {
    document.getElementById('searchIcon').classList.remove("hide");
    document.getElementById('search').classList.remove("visible");
    document.getElementById('clear').classList.remove("visible");
  }