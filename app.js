fetch("http://localhost:3000/api/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    //pokemon-list에 item을 추가

    for (let i = 0; i < data.length; i++) {
      const pokemon_list = document.getElementById("poke-list");
      //.item div 생성
      const itemEl = document.createElement("div");
      //class 추가
      itemEl.classList.add("item");
      itemEl.innerHTML = `
        <img src="${data[i].imgUrl}" alt="${data[i].name}">
        <div class="info">
        <h3>이름 : ${data[i].name}</h3>
        <p>타입 : ${data[i].type}</p>
        </div>
        `;
      pokemon_list.appendChild(itemEl);
    }
  });
