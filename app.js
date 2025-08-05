const dataDiv = document.getElementById("data-div");

function getData() {
  let ids = JSON.parse(localStorage.getItem("id")) || [];
  btn1.style.backgroundColor = "red";
  btn1.style.color = "white";
  let html = "";
  data.forEach((curr) => {
    html += `<div class="relative w-[23%] rounded-md bg-white h-[300px]">
                        <a href="./detail.html?id=${curr.id}" target="_blank">
                        <img src="${curr.images[0]}" class="w-full object-cover rounded-t-md h-[160px]" />
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

let flag = false;
function changeDarkLightMode() {
  flag = !flag;
  dark.innerHTML = flag
    ? `<i class="fa-solid fa-moon fa-2xl" style="color: #fff"></i>`
    : `<i class="fa-solid fa-sun fa-2xl" style="color: #f5cb32"></i>`;
  document.documentElement.classList.toggle("dark");
}
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
