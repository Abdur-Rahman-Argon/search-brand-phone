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
        console.log(data);
        const div = document.createElement("div");
        div.className = "col";
        div.innerHTML = `
    <div class="card p-3 text-center" style="width: 18rem">
      <img  src=" ${data.image}" class="card-img-top image-width" alt="..." />
      <div class="card-body">
      <h5 class="card-title">${data.phone_name}</h5>
      <h5 class="card-title">${data.brand}</h5>
        <button onclick="detailDisplay('${data.slug}')" href="#" class="btn btn-primary">
          See Detail
        </button>
      </div>
    </div>
        `;
        displaySearch.appendChild(div);
    });
};

const detailDisplay = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
};