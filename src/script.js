addEventListener("load", (event) => {

    //OPEN MENU
    let menu = document.querySelector(".menu");
    let closeMenu = document.querySelector(".close-menu");
    console.log(closeMenu);
    let navMobile = document.getElementById("mobileNav");
    let bodyScroll = document.body;


    menu.addEventListener("click", function (e) {
        bodyScroll.style.overflowY = "hidden";
        navMobile.classList.add("flex");
        menu.classList.add("hide");
        closeMenu.classList.add("show-menu");
      });

      closeMenu.addEventListener("click", function (e) {
        bodyScroll.style.overflowY = "scroll";
        navMobile.classList.remove("flex");
        menu.classList.remove("hide");
        closeMenu.classList.remove("show-menu");
      });


      let modal = document.getElementById("openModal");
      let modalOpen = document.querySelector(".open-modal");
      let modalClose = document.querySelector(".close-modal");

      modal.addEventListener("click", function (e) {
        modalOpen.style.display="flex";
    });

    modalClose.addEventListener("click", function (e) {
        modalOpen.style.display="none";
    });


      

});

