// // toggle slider

// //  slider in
const slideInNav = function () {
    let getSidebar = document.querySelector(".aside-nav")
    getSidebar.style.left = "0";
};
// attacht to 
const attachSlideInMenu = function () {
    const toggleMenuBtn = document.querySelector(".wrapper-for-slide-out");
    toggleMenuBtn.addEventListener("mouseover", function () {
        slideInNav();
    });
}
attachSlideInMenu();

// // slider out
const slideOutNav = function () {
    let getSidebar = document.querySelector(".aside-nav")
    getSidebar.style.left = "-140px";
};
// attacht to 
const attachSlideOutMenu = function () {
    const toggleMenuBtn = document.querySelector(".wrapper-for-slide-out");
    toggleMenuBtn.addEventListener("mouseout", function () {
        slideOutNav();
    });
}
attachSlideOutMenu()


// Nav with toggle click on/off
///////////////////////////////////////////////////////

// let toggleNavStatus = false;
// let toggleNav = function () {
//     let getSidebar = document.querySelector(".aside-nav")

//     if (toggleNavStatus === false) {
//         getSidebar.style.left = "0";
//         toggleNavStatus = true;
//     }
//     else if (toggleNavStatus === true) {
//         getSidebar.style.left = "-140px";

//         toggleNavStatus = false;
//     }
// }
// // attacht to 
// const attachEventToToggleMenu = function () {
//     const toggleMenuBtn = document.getElementById("toggle-menu-btn");
//     toggleMenuBtn.addEventListener("click", function () {
//         toggleNav();
//     });
// }
// attachEventToToggleMenu();

// ///////////////////////////////////////////////////////////////////////

// change to white 
const changeClassToWhiteBackground = function () {
    const bodyElement = document.getElementById("body");
    bodyElement.classList.add("white");
    bodyElement.classList.remove("red");
    bodyElement.classList.remove("orange");
    bodyElement.classList.remove("purple");
    bodyElement.classList.remove("green");
};
const attachEventToChangeColorBtnWhite = function () {
    const btnWhite = document.getElementById("btn-white");
    btnWhite.addEventListener("click", function () {
        changeClassToWhiteBackground();
    });
}
attachEventToChangeColorBtnWhite()

// change to red
const changeClassToRedBackground = function () {
    const bodyElement = document.getElementById("body");
    bodyElement.classList.remove("white");
    bodyElement.classList.add("red");
    bodyElement.classList.remove("orange");
    bodyElement.classList.remove("purple");
    bodyElement.classList.remove("green");
};
const attachEventToChangeColorBtnRed = function () {
    const btnRed = document.getElementById("btn-red");
    btnRed.addEventListener("click", function () {
        changeClassToRedBackground();
    });
}
attachEventToChangeColorBtnRed()

// change to orange
const changeClassToOrangeBackground = function () {
    const bodyElement = document.getElementById("body");
    bodyElement.classList.remove("white");
    bodyElement.classList.remove("red");
    bodyElement.classList.add("orange");
    bodyElement.classList.remove("purple");
    bodyElement.classList.remove("green");
};
const attachEventToChangeColorBtnOrange = function () {
    const btnOrange = document.getElementById("btn-orange");
    btnOrange.addEventListener("click", function () {
        changeClassToOrangeBackground();
    });
}
attachEventToChangeColorBtnOrange()

// change to Purple
const changeClassToPurpleBackground = function () {
    const bodyElement = document.getElementById("body");
    bodyElement.classList.remove("white");
    bodyElement.classList.remove("red");
    bodyElement.classList.remove("orange");
    bodyElement.classList.add("purple");
    bodyElement.classList.remove("green");
};
const attachEventToChangeColorBtnPurple = function () {
    const btnPurple = document.getElementById("btn-purple");
    btnPurple.addEventListener("click", function () {
        changeClassToPurpleBackground();
    });
}
attachEventToChangeColorBtnPurple()

// change to Green
const changeClassToGreenBackground = function () {
    const bodyElement = document.getElementById("body");
    bodyElement.classList.remove("white");
    bodyElement.classList.remove("red");
    bodyElement.classList.remove("orange");
    bodyElement.classList.remove("purple");
    bodyElement.classList.add("green");
};
const attachEventToChangeColorBtnGreen = function () {
    const btnGreen = document.getElementById("btn-green");
    btnGreen.addEventListener("click", function () {
        changeClassToGreenBackground();
    });
}
attachEventToChangeColorBtnGreen()
