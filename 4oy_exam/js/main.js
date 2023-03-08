// const elTop = findElement('#blockBottom');
// const elTopTemp = findElement('#template');
//  let products = [];

// function renderProducts(array, parent) {
//     parent.textContent = null;
// 	array.slice(0, 20).forEach((product) => {
//     const newProduct = elTopTemp.content.cloneNode(true);
    
//     const elName = findElement('#card_name', newProduct);
// 	const elSpan = findElement('#span', newProduct);
// 	const elBookmark = findElement('#Bookmark', newProduct);
// 	const elImg = findElement('#card_img', newProduct);
//     const elMoreinfo = findElement('#more_info', newProduct);

//     elImg.src = product.imageLinks.thumbnail;
//     elName.textContent = product.name;
//     elSpan.textContent = product.publishedDate;
    
//     elTop.appendChild(newProduct);
//     });
// }

// function renderProducts(array, parent) {
//     parent.textContent = null;
//     array.slice(0, 20).forEach((product) => {
//       const newProduct = elTopTemplate.content.cloneNode(true);
  
//       const elTitle = findElement('#title', newProduct);
//       const elPrice = findElement('#price', newProduct);
//       const elRating = findElement('#rating', newProduct);
//       const elImg = findElement('img', newProduct);
  
//       elTitle.textContent =products.name;
//       elPrice.textContent = product.price + '$';
//       elRating.textContent = '⭐️' + product.rating;
//       elImg.src = product.image;
  
//       elTop.appendChild(newProduct);
//     });
//   }


// async function getCountry() {
//     let url = await fetch("https://www.googleapis.com/books/v1/volumes?q=java&startIndex=0&maxResults=6");
//     let res = await url.json();
//     console.log(res);
//     res.forEach(element => {
//         ShowCountry(element)
//     });
// }
// getCountry()
// const blockBottom = document.querySelector("#blockBottom");

// function ShowCountry(data) {
//     let country = document.createElement("div")
//     country.classList.add(".card")
//     country.innerHTML = ` 
//     <div class="card">
//     <div class="div_img">
//                           <img id="card_img" src="http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="book">
//                </div>
//                <h4 id="card_name">${fetch.title}</h4>
//                <span class="span">${fetch.subtitle}</span>
//                <p id="data"></p>
//                <div class="card_button d-flex">
//                    <button id="Bookmark">Bookmark</button>
//                    <button id="more_info">More info</button>
//                </div>
//                <button id="read">Read</button>
//     </div>`
//     blockBottom.appendChild(country)
//     country.addEventListener
   
// }
// ShowCountry()