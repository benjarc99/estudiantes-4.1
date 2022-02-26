const d = document;

const $template = d.querySelector("template").content,
  $fragment = d.createDocumentFragment(),
  $containerCards = d.querySelector(".container-cards");

const myArray = [
  {
    name: "Jonh Smith",
    title: "Newbie Programer",
    buttontext: "Follow",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    name: "Alesha Doe",
    title: "FullStack Programer",
    buttontext: "Add Friend",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    name: "Jessica Jones",
    title: "Copywriter",
    buttontext: "View Text",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
];

const myDeformedArray = [
  {
    firstName: "Juanse Laverde",
    title: "Singer",
    buttontext: "Sing",
    icon: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    firstName: "Alesha Doe",
    title: "Newbie",
    buttontext: "Add Oil",
    icon: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    firstName: "Jonas Uala",
    title: "Lier",
    buttontext: "View Text",
    icon: "https://reqres.in/img/faces/11-image.jpg",
  },
];

const filteredArray = myDeformedArray.map((student) => {
  return {
    name: student.firstName,
    title: student.title,
    buttontext: student.buttontext,
    avatar: student.icon,
  };
});

const myStudents = myArray.concat(filteredArray);

const printCards = (data) => {
  data.forEach((el) => {
    $template.querySelector(".img-card").setAttribute("src", `${el.avatar}`);
    $template.querySelector("h4").textContent = el.name;
    $template.querySelector("div.text-card").textContent = el.title;
    $template.querySelector("button").textContent = el.buttontext;

    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $containerCards.appendChild($fragment);
};
printCards(myStudents);

const $arrayBtns = d.querySelectorAll("button");

const printBtns = (buttons) => {
  buttons.forEach((el) => {
    if (el.textContent === "Follow") {
      el.innerHTML = `
      <i class="fa-solid fa-user-plus"></i> 
      Follow
      `;
      el.style.setProperty("background-color", "rgb(40, 167, 71)");
    }
    if (el.textContent === "Unfollow") {
      el.innerHTML = `
      <i class="fa-solid fa-minus"></i>
      Unfollow
      `;
      el.style.setProperty("background-color", "rgb(220, 53, 70)");
    }
    if (el.textContent === "Add Friend") {
      el.innerHTML = `
      <i class="fa-solid fa-user-plus"></i> 
      Add Friend
      `;
      el.style.setProperty("background-color", "rgb(0, 122, 254)");
    }
    if (el.textContent === "Hire") {
      el.innerHTML = `
      <i class="fa-solid fa-plus"></i>
      Hire
      `;
      el.style.setProperty("background-color", "rgb(50, 57, 63)");
    }
    if (el.textContent === "View Proyect") {
      el.innerHTML = `
      <i class="fa-solid fa-briefcase"></i>   
      View Proyect
      `;
      el.style.setProperty("background-color", "rgb(0, 122, 254)");
    }
    if (el.textContent === "Sing") {
      el.innerHTML = `
      <i class="fa-solid fa-music"></i>
      Sing
      `;
      el.style.setProperty("background-color", "rgb(86, 61, 125)");
    }
    if (el.textContent === "View Text") {
      el.innerHTML = `
      <i class="fa-solid fa-file-lines"></i>
      View Text
      `;
      el.style.setProperty("background-color", "rgb(226, 76, 38)");
    }
    if (el.textContent === "Add Oil") {
      el.innerHTML = `
      <i class="fa-solid fa-circle-plus"></i>
      Add Oil
      `;
      el.style.setProperty("background-color", "rgb(206, 185, 0)");
    }
  });
};
printBtns($arrayBtns);
