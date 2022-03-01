const displaySearch = document.getElementById("display-search");
const detailContainer = document.getElementById("detail-container");
const searchInput = document.getElementById("search-value");
const searchError = document.getElementById("search-error");

const searchLoad = async() => {
    const searchText = searchInput.value;
    searchInput.value = "";

    if (searchText == "") {
        searchError.innerText = "Please input a phone name";
        displaySearch.textContent = "";
        detailContainer.textContent = "";
    } else {
        searchError.innerText = "";
        const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === false) {
            searchError.innerText = "NO DATA FOUND";
            displaySearch.textContent = "";
            detailContainer.textContent = "";
        }
        if (data.status === true) {
            displayData(data.data);
        }
        console.log(data.status);
    }
};

const displayData = (datas) => {
    displaySearch.textContent = "";
    console.log(datas.length);
    datas.forEach((data) => {
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
            <div class="card p-3 text-center" style="width: 18rem">
                 <img  src=" ${data.image}" class="card-img-top image-width" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <h5 class="card-title">${data.brand}</h5>
                    <button onclick="detailLoad('${data.slug}')" href="#"
                    class="btn btn-primary">See Detail</button>
                </div>
            </div>
        `;
        displaySearch.appendChild(div);
    });
};

const detailLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayDetail(data));
    // console.log(data);
};

const displayDetail = (detail) => {
    // console.log(detail.data.releaseDate || "date");
    const element = detail.data;
    detailContainer.textContent = "";
    const div = document.createElement("div");
    div.className = "col";
    div.innerHTML = `
    <div class="card p-3 mx-auto card-width">
      <img  src=" ${element.image}" class="card-img-top image-width-2" alt="..." />
      <div class="card-body">
      <h5 class="textcenter"> ${element.name}</h5>
      <h5 class="textcenter"> ${element.brand}</h5>
      <h5 class="textcenter"> ${element.releaseDate || "no release date found"}</h5>
      <ul>
      <li>chipSet: ${element.mainFeatures.chipSet}</li>
      <li>displaySize: ${element.mainFeatures.displaySize}</li>
      <li>memory: ${element.mainFeatures.memory}</li>
      <li>sensors:
      <ul>
      <li>${element.mainFeatures.sensors[0]}</li>
      <li>${element.mainFeatures.sensors[1]}</li>
      <li>${element.mainFeatures.sensors[2]}</li>
      <li>${element.mainFeatures.sensors[3]}</li>
      </ul>
      </li>
      </ul> 
      <h5 >Bluetooth: ${element.others.Bluetooth}</h5>
      <h5 >GPS: ${element.others.GPS}</h5>
      <h5 >NFC: ${element.others.NFC}</h5>
      <h5 >Radio: ${element.others.Radio}</h5>
      <h5 >USB: ${element.others.USB}</h5>
      <h5 >WLAN: ${element.others.WLAN}</h5>
      </div>
    </div>
        `;
    detailContainer.appendChild(div);
};