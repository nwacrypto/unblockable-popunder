
window.onload = function() {
  function openPopunder() {
    var popunderWindow;
    var sessionStorage = window.sessionStorage;
    if (!sessionStorage.getItem("popunder")) {
      popunderWindow = window.open("https://cryptoredeemer.com/?redirect_to=random", "popunder", "width=500,height=400,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes");
      if (popunderWindow) {
        popunderWindow.focus();
        sessionStorage.setItem("popunder", true);
      }
    }
  }

  function handleElementClick(event) {
    openPopunder();
    setTimeout(function() {
      event.target.click();
    }, 1000);
  }

  var elements = document.querySelectorAll("a, img");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", handleElementClick);
  }
};
