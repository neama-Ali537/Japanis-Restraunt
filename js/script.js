// check if there is local storge color option:

let mainColor = localStorage.getItem("colors");

if (mainColor !== null) {
  // set color on root and local storge
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("colors")
  );
}

// start swetch color

let colorLi = document.querySelectorAll(".colors li");

colorLi.forEach((li) => {
  // loop for make event to change the color
  li.addEventListener("click", (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    // set color on local storge
    localStorage.setItem("colors", e.target.dataset.color);

    // remove active class from all childrens from combonant function
    handelActive(e);
  });
});
// end swetch color

// start toggel icon with event and append classes

let eventOne = (document.querySelector(".toggel-icon .icon1").onclick =
  function () {
    // add ritation to icon on itself by cilicing
    this.classList.toggle("fa-spin");

    // add class OPEN for visibility the white page
    document.querySelector(".sitting-box").classList.toggle("open");
  });
//random backgrond option

let backgrondOption = true;
// vairable to control the ibackground interval
let backgrondIntirval;

// add active class to div sitting option-background-span

// check if there is local storge randome backgroud item
let optionBackgroundSpan = document.querySelectorAll(".group-bg span");

let backgrondLocalItem = localStorage.getItem("background-option");
// chech if random background local storge is not empty
if (backgrondLocalItem !== null) {
  if (backgrondLocalItem === "true") {
    backgrondIntirval = true;
  } else {
    backgrondLocalItem = false;
  }
  
}

// make loop for add and remove (active-class)

optionBackgroundSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    //   // use combonant function to add and remove (active class)

    handelActive(e);

    if (e.target.dataset.background === "yes") {
      backgrondOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgrondOption = false;
      clearInterval(backgrondIntirval);
      localStorage.setItem("background-option", false);
    }
  });
});

// start select landing page elemnt:

let landingPage = document.querySelector(".landing-page");

// get Array of imgs
let imgArray = ["5.jpg", "9.jpg", "10.jpg", "13.jpg"];

// chang background url
// functuin to randomize imgs

function randomizeImgs() {
  if (backgrondOption === true) {
    backgrondIntirval = setInterval(() => {
      // get randoum number
      let roandomNumber = Math.floor(Math.random() * imgArray.length);

      // change background img url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgArray[roandomNumber] + '")';
    }, 3000);
  }
}
randomizeImgs();
// end select landing page elemnt

// start nav bar effect to open NAVBAR

let eventNavbar = document.querySelector(".event");
let pageNavbar = document.querySelector(".page-navbar");
eventNavbar.onclick = function () {
  pageNavbar.style.display = "block";
};
// start nav bar effect to colse NAVBAR

let btnEvent = document.querySelector(".btnEvent");
btnEvent.onclick = function () {
  pageNavbar.style.display = "none";
};

// start page skills
let ourSkills = document.querySelector(".skills-parent");

window.onscroll = function () {
  // skills ofset top
  let skillsOfsitTop = ourSkills.offsetTop;
  //    this.console.log(skillsOfsitTop)

  // skills outer hieght

  let skillsOuterHieght = ourSkills.offsetHeight;

  // skills window height

  let windowHeight = this.innerHeight;

  // scroll top

  let windowScrollTop = this.pageYOffset;
  //   the real point for function
  if (windowScrollTop < skillsOfsitTop + skillsOuterHieght - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skills-parent .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// end page skills

// start page gallery-parent
// craet popUp with the img:

let ourGallery = document.querySelectorAll(".gallery-parent img");

// make loop to click on img to make event

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // make overLay div:
    let oveylay = document.createElement("div");

    // make className to (overlay) div:
    oveylay.className = "overlay-popup";

    // append overlay to body:
    document.body.appendChild(oveylay);

    // creat onother div to carry the img

    // popup-box div:
    let popupBox = document.createElement("div");

    //creat popup-box className:
    popupBox.className = "popup-box";

    // make if condition to append img alt to popup:
    if (img.alt !== null) {
      // craet heading div:
      let imgHeading = document.createElement("h3");
      // creat class name to imgHeading
      imgHeading.className = "img-heading";
      let imgText = document.createTextNode(img.alt);

      // append img text to img text:
      imgHeading.appendChild(imgText);

      popupBox.appendChild(imgHeading);
    }

    // creat img to append in popup box:
    let popupImg = document.createElement("img");
    // make popupimg the same source the real img in body:
    popupImg.src = img.src;

    // append popupimg to popupbox
    popupBox.appendChild(popupImg);

    //append popupbox to body

    document.body.appendChild(popupBox);

    // creat span to close the page
    let imgButton = document.createElement("span");
    imgButton.className = "img-button";
    // creat in imgbutton text node
    let buttonText = document.createTextNode("X");

    // append tetx node to img button
    imgButton.appendChild(buttonText);
    popupBox.appendChild(imgButton);
  });
});
// close popUp:
document.addEventListener("click", (e) => {
  //    make if to check if img button class name is open:
  if (e.target.className == "img-button") {
    // remove img when i click on( X )button
    e.target.parentNode.remove();
    document.querySelector(".overlay-popup").remove();
  }
});
// end page gallery-parent

// ///////////////////////////////////////////////
// start navigation bullet event after (sitteng box page)
// start NAVIGATION BULLET event

// (make a combonant function)
let allBullet = document.querySelectorAll(".nav-bullet .bullet");

//(1) make a function to scrool page when i click to bullet

function scroolToPage(elemnt) {
  elemnt.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scroolToPage(allBullet);
// /////////////////////////////////////////////
// (2) make function to add and remove (active ) class:

function handelActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((elemnt) => {
    elemnt.classList.remove("active");
  });
  ev.target.classList.add("active");
}
// ////////////////////////////////
// start put testing option (at sitting box) in local storage:

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletContainer = document.querySelector(".nav-bullet");

// put this sitting on lockal storage
let buletLocalItem = localStorage.getItem("bullets-option");

if (buletLocalItem !== null) {
  bulletsSpan.forEach(span => {
    // to remove active class from all span
    span.classList.remove("active");
  });

if (buletLocalItem ==="block") {
  bulletContainer.style.display = "block";
  document.querySelector(".bullets-option .yes").classList.add("active");
} else {
  bulletContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
}
} 
bulletsSpan.forEach((span) => {
// (make i function to) when i click on yes => show the bullet 
// when i cklick no => disapper the bullet
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "yes") {

      bulletContainer.style.display = "block";
      // locla storage
      localStorage.setItem("bullets-option", "block");

    } else {
      bulletContainer.style.display = "none";
      // locla storage
      localStorage.setItem("bullets-option", "none");
    }
    handelActive(e)
  });
});

// make (reset option) button:

let resetButton = document.querySelector(".reset-option");

resetButton.onclick = function () {
  // i have 2 option to clear local storage:
  // one:
  // localStorage.clear();
  // two:
  localStorage.removeItem("colors")
  localStorage.removeItem("background-option");
  localStorage.removeItem("bullets-option");

  window.location.reload();
}