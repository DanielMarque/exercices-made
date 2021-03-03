// This Keyword: Its like a pointer, that references an object

// const user = {
//   name: "Daniel Marques",
//   sayThis() {
//     console.log(this);
//   },
// };

// console.log(this.user);

/*========================================*/

// const user = {
//   name: "daniel",
// };

// const admin = {
//   name: "admin",
// };

// function yoho() {
//   console.log(this.name.toUpperCase());
// }

// user.io = yoho;
// admin.io = yoho;

// user.io();
// admin.io();

/*========================================*/

// With Dom

// const list = document.querySelectorAll("li");

// list.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log(this);
//   });
// });

const user = {
  name: "Daniel Marques",
  videos: ["HTML", "SCSS", "Js", "React"],
  sayHello: function () {
    console.log(this.videos);

    const teste = () => {
      console.log(`Teste aqui: ${this.name}`);
    };
    teste();
  },
  greet() {
    console.log(`Hello Brothar ${this.name}`);

    const getVideos = () => {
      console.log(`Você tem ${this.videos.length} para assistir!`);
    };
    getVideos();
  },
};
user.sayHello();
user.greet();
