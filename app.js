const dataDiv = document.getElementById("data-div");
let dataa = JSON.parse(localStorage.getItem("data")) || data;

function getData() {
  let ids = JSON.parse(localStorage.getItem("id")) || [];
  btn1.style.backgroundColor = "red";
  btn1.style.color = "white";
  let html = "";
  dataa.forEach((curr) => {
    html += `<div class="relative w-[23%] rounded-md bg-white h-[300px] dark:bg-gray-400">
                        <a href="./detail.html?id=${curr.id}" target="_blank">
                        <div class="hover:overflow-hidden"><img src="${curr.images[0]}" class="w-full object-cover hover:scale-110 hover:duration-300 rounded-t-md h-[160px]" /></div>
                        <h1 class="font-bold ml-2 mt-2">${curr.price} ${curr.currency}</h1>
                        <p class="ml-2 mt-2">${curr.brand} ${curr.model}</p>
                        <p class="ml-2 mt-2">${curr.year}, ${curr.engine} L, ${curr.odometer} km</p>
                        <p class="ml-2 mt-2 text-gray-400">${curr.city}</p>
                        <a id="wish" onclick="addWishList(event)" class="absolute text-white font-extralight top-1 right-1 text-2xl" target="_blank"><i class="fa-regular fa-heart" data-id="${curr.id}"></i>
                        </a>
                        </a>
                        </div>`;
  });
  dataDiv.innerHTML = html;
  ids.forEach((item) => {
    const icon = document.querySelector(`i[data-id="${item}"]`);
    if (icon) {
      icon.classList.add("fa-solid", "text-red-600");
    }
  });
}
getData();

let wishArr = JSON.parse(localStorage.getItem("id")) || [];

function addWishList(e) {
  const i = e.target.getAttribute("data-id");
  if (wishArr.includes(i)) {
    wishArr = wishArr.filter((item) => item !== i);
    e.target.classList.remove("fa-solid", "text-red-600");
    e.target.classList.add("fa-regular");
  } else {
    wishArr.push(i);
    e.target.classList.remove("fa-regular");
    e.target.classList.add("fa-solid", "text-red-600");
  }
  localStorage.setItem("id", JSON.stringify(wishArr));
}

function handleDarkLight() {
  let theme = localStorage.getItem("theme");
  if (theme == "dark") {
    document.documentElement.classList.add("dark");
    dark.innerHTML = `<i onclick="changeDarkLightMode('light')" class="fa-solid fa-moon fa-2xl" style="color: #fff"></i>`;
  } else {
    document.documentElement.classList.remove("dark");
    dark.innerHTML = `<i onclick="changeDarkLightMode('dark')" class="fa-solid fa-sun fa-2xl" style="color: #f5cb32"></i>`;
  }
}
handleDarkLight();

function changeDarkLightMode(theme) {
  localStorage.setItem("theme", theme);
  handleDarkLight();
}

function showAddNewDataModal() {
  modalSec.classList.remove("hidden");
}

modalSec.addEventListener("click", function () {
  document.querySelectorAll("input").forEach((item) => (item.value = ""));
  modalSec.classList.add("hidden");
});

function AddNewData() {
  const obj = {
    id: String(dataa.length + 1),
    brand: brend.value ? brend.value : Swal.fire("boş qoymaq olmaz!"),
    model: model.value ? model.value : Swal.fire("boş qoymaq olmaz!"),
    banType: banType.value ? banType.value : Swal.fire("boş qoymaq olmaz!"),
    odometer: Number(oMeter.value),
    odometerUnit: oCurr.value ? oCurr.value : Swal.fire("boş qoymaq olmaz!"),
    price: Number(price.value),
    currency: curry.value.toUpperCase(),
    year: year.value ? year.value : Swal.fire("boş qoymaq olmaz!"),
    credit: credit.checked ? true : false,
    barter: barter.checked ? true : false,
    images: [img.value],
    city: city.value,
    engine: Number(engine.value),
  };
  obj.values.forEach((item) => {
    if (item) {
      return;
    }
  });
  dataa.push(obj);
  localStorage.setItem("data", JSON.stringify(dataa));
  getData();
  modalSec.classList.add("hidden");
}

const markaCard = document.querySelector(".markaCard");
function showSelectOp() {
  markaCard.classList.toggle("hidden");
  markaCard.innerHTML = `<button>Marka</button>
                <button>❌ Sıfırla</button>`;
  [...new Set(dataa.map((item) => item.brand))].forEach((item) => {
    markaCard.innerHTML += `<button onclick="filteredMarka(event)">${item}</button>`;
  });
}

function filteredMarka(e) {
  console.log("salam");
  marca.innerHTML = e.target.innerHTML;
}
