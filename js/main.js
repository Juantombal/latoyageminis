window.onload = () => {
  /* Modal code webshop page*/
    let btn = document.querySelectorAll(".modal-button");
    let modals = document.querySelectorAll('.modal');
    let spans = document.getElementsByClassName("close");

    for (let i = 0; i < btn.length; i++) {
     btn[i].onclick = function(e) {
       console.log("test");
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("id"));
        modal.style.display = "block";
     }
    }

    for (let i = 0; i < spans.length; i++) {
     spans[i].onclick = function() {
        for (let index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
     }
    }

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
         for (let index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
         }
        }
    }
}
