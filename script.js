const myrow = document.querySelector(".my-row");
const btnfirst = document.querySelector(".my-first-btn");
const URL = "https://api.pexels.com/v1/search?query=nature";
const imgnature = () => {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "DjZ1bC98ix9tgR07ZPSwCJZKWbN57RokYXZHoEX9gXM31PvR4Tz5WJLd",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((imgobj) => {
      console.log(imgobj);
      const pexel = imgobj.photos;
      pexel.forEach((pexels) => {
        const col = document.createElement("div");
        col.className = "col-10 col-sm-6 col-md-4  ";
        col.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${pexels.src.medium}" class="card-img-top" alt="...">
                               <div class="card-body">
                                 <h5 class="card-title">${pexels.photographer}</h5>
                                 <p class="card-text">${pexels.alt}</p>
                                  <div class="d-flex justify-content-between">
                                      <div class="btn-group">
                                          <button type="button" class="btn btn-sm btn-outline-secondary">
                                               View
                                          </button>
                                          <button type="button" class="btn btn-sm btn-outline-secondary">
                                               Edit
                                          </button>
                                     </div>
                                           <small class="text-muted">${pexels.id}</small>
                                  </div>
                              </div>
                        </div>`;

        // const card = document.createElement("div");
        // card.className = "card bg-body";

        // const img = document.createElement("img");
        // img.src = pexels.src.original;
        // img.className = "card-img-top object-fit-cover";
        // img.style.height = "200px";

        // const cardbody = document.createElement("div");
        // card.className = "card-body";

        // const name = document.createElement("p");
        // name.innerText = pexels.alt;

        // const title = document.createElement("h5");
        // title.innerText = pexels.photographer;

        // const small = document.createElement("div");
        // small.innerHTML = `<small class="text-muted">${pexels.id}</small>`;

        myrow.appendChild(col);
        // col.appendChild(card);
        // card.appendChild(img);
        // card.appendChild(cardbody);
        // cardbody.appendChild(title);
        // cardbody.appendChild(name);

        // cardbody.appendChild(small);
      });
    });
};
