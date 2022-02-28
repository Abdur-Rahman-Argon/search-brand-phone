const searchLoad = async() => {
    const searchInput = document.getElementById("search-value");
    const searchText = searchInput.value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
};

const displayData = (datas) => {
    const displaySearch = document.getElementById("display-search");
    datas.forEach((data) => {
        // console.log(data);
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
    <div class="card p-3 text-center" style="width: 18rem">
      <img  src=" ${data.image}" class="card-img-top image-width" alt="..." />
      <div class="card-body">
      <h5 class="card-title">${data.phone_name}</h5>
      <h5 class="card-title">${data.brand}</h5>
        <button onclick="detailLoad('${data.slug}')" href="#" class="btn btn-primary">
          See Detail
        </button>
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
    console.log(detail.data.others.Bluetooth);
    const element = detail.data;
    const displayDetail = document.getElementById("display-detail");
    const div = document.createElement("div");
    div.className = "col";
    div.innerHTML = `
    <div class="card p-3 mx-auto card-width">
      <img  src=" ${element.image}" class="card-img-top image-width-2" alt="..." />
      <div class="card-body">
      <h5 class="textcenter">${element.name}</h5>
      <h5 class="textcenter">${element.brand}</h5>
      <h5 class="textcenter">${element.releaseDate}</h5>
      <h5 class="textcenter">${element.others.Bluetooth}</h5>
      <h5 class="textcenter">${element.others.GPS}</h5>
      <h5 class="textcenter">${element.others.NFC}</h5>
      <h5 class="textcenter">${element.others.Radio}</h5>
      <h5 class="textcenter">${element.others.USB}</h5>
      <h5 class="textcenter">${element.others.WLAN}</h5>
                    <ul>
                        <li>${element.mainFeatures.chipSet}</li>
                        <li>displaySize:${element.mainFeatures.displaySize}</li>
                        <li>${element.mainFeatures.memory}</li>
                        <li>sensors:
                            <ul>
                                <li>${element.mainFeatures.sensors[0]}</li>
                                <li>${element.mainFeatures.sensors[1]}</li>
                                <li>${element.mainFeatures.sensors[2]}</li>
                                <li>${element.mainFeatures.sensors[3]}</li>
                            </ul>
                        </li>
                    </ul>
                </div>

      </div>
    </div>
        `;
    displayDetail.appendChild(div);
};
/* <h5 class="textcenter">${element.others.Bluetooth}</h5>
      <h5 class="textcenter">${element.others.GPS}</h5>
      <h5 class="textcenter">${element.others..NFC}</h5>
      <h5 class="textcenter">${element.others.Radio}</h5>
      <h5 class="textcenter">${element.others.USB}</h5>
      <h5 class="textcenter">${element.others.WLAN}</h5> */
// thers:
// : "5.0, A2DP, LE"
// GPS: "Yes, with A-GPS, GLONASS, GALILEO, QZSS"
// NFC: "Yes"
// Radio: "No"
// USB: "No"
// WLAN: "Wi-Fi 802.11 b/g/n"
// [[