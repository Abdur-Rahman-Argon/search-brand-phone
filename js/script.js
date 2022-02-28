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
    // console.log(url);
};

const displayDetail = (detail) => {
    console.log(detail.data);
    const div = document.createElement("div");
    div.className = "col";
    div.innerHTML = `
    <div class="card p-3 text-center" style="width: 18rem">
      <img  src=" ${detail.image}" class="card-img-top image-width" alt="..." />
      <div class="card-body">
      <h5 class="card-title">${detail.phone_name}</h5>
      <h5 class="card-title">${detail.brand}</h5>
      </div>
    </div>
        `;
};

/* 
data: brand: "Apple"
image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg"
mainFeatures: chipSet: "Apple A15 Bionic (5 nm)"
displaySize: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)"
memory: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM"
sensors: Array(6) 0: "Face ID"
1: "accelerometer"
2: "gyro"
3: "proximity"
4: "compass"
5: "barometer"
length: 6[[Prototype]]: Array(0) storage: "128GB/256GB/1TB storage, no card slot" [
    [Prototype]
]: Objectname: "iPhone 13 Pro"
others: Bluetooth: "5.0, A2DP, LE"
GPS: "Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS"
NFC: "Yes"
Radio: "No"
USB: "Lightning, USB 2.0"
WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot" [
    [Prototype]
]: Objectconstructor: ƒ Object() hasOwnProperty: ƒ hasOwnProperty() isPrototypeOf: ƒ isPrototypeOf() propertyIsEnumerable: ƒ propertyIsEnumerable() toLocaleString: ƒ toLocaleString() toString: ƒ toString() valueOf: ƒ valueOf() __defineGetter__: ƒ __defineGetter__() __defineSetter__: ƒ __defineSetter__() __lookupGetter__: ƒ __lookupGetter__() __lookupSetter__: ƒ __lookupSetter__() __proto__: (...) get __proto__: ƒ __proto__() set __proto__: ƒ __proto__() releaseDate: ""
slug: "apple_iphone_13_pro-11102" [
    [Prototype]
]: Objectstatus: true[[Prototype]]: Object */