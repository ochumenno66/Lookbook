const container = document.querySelector(".container");

// Создаем секции
const section1 = document.createElement("section");
section1.classList.add("clothes");
container.appendChild(section1);

const section2 = document.createElement("section");
section2.classList.add("labels");
container.appendChild(section2);

// Создаем два div внутри первой секции
const div1 = document.createElement("div");
div1.classList.add("img_container");
section1.appendChild(div1);

const div2 = document.createElement("div");
div2.classList.add("img_container");
section1.appendChild(div2);

// Создаем один div внутри второй секции
const div3 = document.createElement("div");
div3.classList.add("img_container");
section2.appendChild(div3);

// Создаем div для заголовка внутри каждого img_container
const div4 = document.createElement("div");
div4.classList.add("title");
div1.appendChild(div4);

const div5 = document.createElement("div");
div5.classList.add("title");
div2.appendChild(div5);

const div6 = document.createElement("div");
div6.classList.add("title");
div3.appendChild(div6);

// Создаем div для img
const div7 = document.createElement("div");
div7.classList.add("img_wrapper");
div1.appendChild(div7);

const div8 = document.createElement("div");
div8.classList.add("img_wrapper");
div2.appendChild(div8);

const div9 = document.createElement("div");
div9.classList.add("img_wrapper");
div3.appendChild(div9);

// Создаем заголовки
const title1 = document.createElement("h2");
title1.textContent = "Divisione Protagonista / 58 артиклей";
div4.appendChild(title1);

const title2 = document.createElement("h2");
title2.textContent = "Alma Libre / 55 артиклей";
div5.appendChild(title2);

const title3 = document.createElement("h1");
title3.textContent = "Бирки";
div6.appendChild(title3);

// JSON
fetch("items.json")
  .then((response) => response.json())
  .then((data) => {
    // Вставляем изображения для dp в div7
    data.dp.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.images;
      img.alt = "DP Image";
      div7.appendChild(img);
    });

    // Вставляем изображения для al в div8
    data.al.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.images;
      img.alt = "AL Image";
      div8.appendChild(img);
    });

    // Вставляем изображения для labels в div9
    data.labels.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.images;
      img.alt = "Label Image";
      div9.appendChild(img);
    });
  })
  .catch((error) => console.error("Ошибка загрузки данных:", error));
