const gallery = document.querySelector(".gallery")
window.addEventListener("keydown", onScrollGallery)

function onScrollGallery(event) {
    if (event.code === "KeyD") {
        gallery.scrollLeft += 100
    } else if (event.code === "KeyA") {
        gallery.scrollLeft -= 100;
    }
}

// 2

const refs = {
  input: document.querySelector("#controls input"),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  let inputValue = refs.input.value;
  let size = 20;

  const max = refs.input.max;
  const min = refs.input.min;

  if (inputValue > max || inputValue < min) {
    alert("Число должно быть в диапазоне от 0 до 100");
    return;
  }

  for (let i = 0; i < inputValue; i++) {
    const createDiv = document.createElement("div");
    createDiv.style.width = size + "px";
    createDiv.style.height = size + "px";
    createDiv.style.backgroundColor = getRandomColor();
    size += 10;
    refs.boxes.append(createDiv);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}