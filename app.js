const dataDiv = document.getElementById("data-div");

function getData() {
  btn1.style.backgroundColor = "red";
  btn1.style.color = "white";
  let html = "";
  data.forEach((curr) => {
    html += `<div class="w-[23%] rounded-md bg-white h-[300px]">
                        <img src="${curr.images[0]}" class="w-full object-cover rounded-t-md h-[160px]" />
                        <h1 class="font-bold ml-2 mt-2">${curr.price} ${curr.currency}</h1>
                        <p class="ml-2 mt-2">${curr.brand} ${curr.model}</p>
                        <p class="ml-2 mt-2">${curr.year}, ${curr.engine} L, ${curr.odometer} km</p>
                        <p class="ml-2 mt-2 text-gray-400">${curr.city}</p>
                        </div>`;
  }, "");
  dataDiv.innerHTML = html;
}
getData();
