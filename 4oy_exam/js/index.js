const searchInput = document.getElementById("search");
let list = document.querySelector('.list');

let product = [
    {
     "createdAt": "2023-02-28T16:01:08.757Z",
     "name": "Eugene Adams",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 1",
     "id": "1"
    },
    {
     "createdAt": "2023-03-01T04:50:51.805Z",
     "name": "Monique Emmerich",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 2",
     "id": "2"
    },
    {
     "createdAt": "2023-02-28T19:04:29.837Z",
     "name": "Charles Quigley III",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 3",
     "id": "3"
    },
    {
     "createdAt": "2023-02-28T10:22:01.679Z",
     "name": "Katrina Durgan III",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 4",
     "id": "4"
    },
    {
     "createdAt": "2023-02-28T18:44:39.510Z",
     "name": "Eugene Quitzon",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 5",
     "id": "5"
    },
    {
     "createdAt": "2023-02-28T19:28:25.649Z",
     "name": "Gabriel Oberbrunner",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 6",
     "id": "6"
    },
    {
     "createdAt": "2023-03-01T07:38:06.966Z",
     "name": "Alton Gerhold",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 7",
     "id": "7"
    },
    {
     "createdAt": "2023-02-28T15:26:49.214Z",
     "name": "David D'Amore",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 8",
     "id": "8"
    },
    {
     "createdAt": "2023-02-28T12:07:31.859Z",
     "name": "Enrique Schimmel I",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 9",
     "id": "9"
    },
    {
     "createdAt": "2023-03-01T04:06:33.165Z",
     "name": "Myra Rodriguez",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 10",
     "id": "10"
    },
    {
     "createdAt": "2023-03-01T05:49:52.625Z",
     "name": "Kelli Ebert",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 11",
     "id": "11"
    },
    {
     "createdAt": "2023-03-01T03:56:24.812Z",
     "name": "Hubert Leannon",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 12",
     "id": "12"
    },
    {
     "createdAt": "2023-02-28T16:25:18.002Z",
     "name": "Dewey Stracke",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 13",
     "id": "13"
    },
    {
     "createdAt": "2023-03-01T03:37:43.294Z",
     "name": "Debbie Hegmann",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 14",
     "id": "14"
    },
    {
     "createdAt": "2023-03-01T02:04:39.621Z",
     "name": "Miss Flora Miller",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 15",
     "id": "15"
    },
    {
     "createdAt": "2023-03-01T03:56:38.337Z",
     "name": "Earl O'Connell",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 16",
     "id": "16"
    },
    {
     "createdAt": "2023-02-28T10:09:10.843Z",
     "name": "Mr. Pamela Cruickshank V",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 17",
     "id": "17"
    },
    {
     "createdAt": "2023-02-28T10:14:03.479Z",
     "name": "Dr. Marlene Prosacco",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 18",
     "id": "18"
    },
    {
     "createdAt": "2023-02-28T10:06:00.503Z",
     "name": "Allen Daugherty",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 19",
     "id": "19"
    },
    {
     "createdAt": "2023-02-28T08:48:19.410Z",
     "name": "Juanita Ernser V",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 20",
     "id": "20"
    },
    {
     "createdAt": "2023-02-28T22:15:54.464Z",
     "name": "Miss Stella Goyette",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 21",
     "id": "21"
    },
    {
     "createdAt": "2023-03-01T08:14:07.840Z",
     "name": "Kent Donnelly",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 22",
     "id": "22"
    },
    {
     "createdAt": "2023-03-01T03:58:45.082Z",
     "name": "Maureen Kertzmann",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 23",
     "id": "23"
    },
    {
     "createdAt": "2023-02-28T18:17:00.223Z",
     "name": "Verna Rau DDS",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 24",
     "id": "24"
    },
    {
     "createdAt": "2023-02-28T19:07:03.283Z",
     "name": "Lonnie Wolff",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 25",
     "id": "25"
    },
    {
     "createdAt": "2023-03-01T00:41:57.648Z",
     "name": "Theodore Ortiz",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 26",
     "id": "26"
    },
    {
     "createdAt": "2023-03-01T01:11:13.777Z",
     "name": "Kelly Smith",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 27",
     "id": "27"
    },
    {
     "createdAt": "2023-02-28T15:41:23.529Z",
     "name": "Randy O'Reilly",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 28",
     "id": "28"
    },
    {
     "createdAt": "2023-03-01T00:57:13.910Z",
     "name": "Harry Metz",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 29",
     "id": "29"
    },
    {
     "createdAt": "2023-03-01T04:44:52.145Z",
     "name": "Faye Streich",
    "image": "https://eloquentjavascript.net/img/cover.jpg",
     "item": "item 30",
     "id": "30"
    },
   ]


var user = []

console.log(product);
function filterArr(data) {
    data.map(item =>{
        console.log(item);
        list.innerHTML += `
    
        <li class="book__item-list">
        <div class="book__img-back">
            <img class="book__item__list-img" src="${product.image}" alt="book img">
        </div>
        <div class="list">
            <div class="div">
                <b>Python</b>
                <p class="book__list-text">${item.name}</p>
                <p class="book__list-textyear">${item.id}</p>
            </div>
            <div class="book__buttons">
                <button type="button" class="btn btn-warning">Warning</button>


                <button onclick="document.getElementById('id01').style.display='block'"
                    class="btn btn-light">More Info</button>

            </div>


            <button type="button" class="btn btn-secondary">Secondary</button>
        </div>

        <div id="id01" class="modal">

            <form class="modal-content animate" action="/action_page.php" method="post">
                <div class="imgcontainer">
                
                  
                </div>
                   
                    <div class="modal__header-flex">
                        <h3 class="modal__header-log">Phyton</h3>
                            <span onclick="document.getElementById('id01').style.display='none'"
                        class="close modal__header" title="Close Modal"> &times;</span>
                    </div>
                        
                    <div class="modal__box">
                        
                
                    <a class="modal__bok-link mt-100"  href="#">
                        <img src="../images/bokmodal.svg" alt="">
                    </a>

                    <p>Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit commodo cillum eiusmod reprehenderit labore irure. Cillum et incididunt et nostrud exercitation quis aute laboris non ut adipisicing. Laboris ad minim aute nulla proident deserunt velit anim sunt aliquip ut sit. Exercitation aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam id eiusmod sit consectetur mollit ea aliqua officia consequat. Magna non mollit nisi est commodo voluptate aute id. Deserunt nostrud id do in nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris. Id aliquip non consectetur esse proident duis Lorem.</p>



                    <ul class="modal__list">
                        <li class="modal__item">
                            <b>Autor:</b>
                            <button class="modal__btn">Jamal Kasper</button>
                            <button class="modal__btn">Author 2</button>
                        </li>
                        <i>Autor :</i>

                        <li class="modal__item">
                            <b>Published : </b>
                            <button class="modal__btn">2019</button>
                        </li>

                        <li class="modal__item">
                            <b>Publishers :</b>
                            <button class="modal__btn">Hollman</button>
                        </li>

                        
                        <li class="modal__item">
                            <b>Categories:</b>
                            <button class="modal__btn">Computers</button>
                        </li>

                        <li class="modal__item">
                            <b>Pages Count:</b>
                            <button class="modal__btn">346</button>
                        </li>
                    </ul>

                <div class="modal__none" style="background-color:#ffffff">
                 
                   
                    <button type="button"
                        onclick="document.getElementById('id01').style.display='none'"
                        class="cancelbtn ">Cancel</button>

                </div>
                    </div>
            </form>
        </div>

    </li>
        `
    })
}

filterArr(product)

const item = document.querySelector("list")
const searchInp = document.getElementById("serch")
var users = []

const getItem = () => {
    fetch(product)
    .then(res => {res.json()
    .then(res => {
        users = res;
    })
    .catch(err = console.log(err));
})
};

searchInp.addEventListener('input', e => {
    const element= e.target.value.toLowerCase()
    console.log(element);
})


let moon = document.querySelector('#sun');

//lightmode

let theme = "light";

moon.addEventListener('click', () => {

    if (theme === "light") {
        theme = "dark";
        moon.src = '../img/crescent-moon.png';
        elBody.style.background = 'black';
        elLogo.src = '../img/logowhite.svg';
        heroText.style.color = 'white';
        leftBlock.style.background = '#10404e';
        elHero.className = 'hero-style';
        rightBlock.style.background = '#0f566b';


        mainTitle.style.color = 'white';
        mainText.style.color = 'white';

    }
    else if (theme == "dark") {
        moon.src = '../img/quyosh.svg';
        theme = "light";
        elBody.style.background = 'white';
        elLogo.src = '../img/logo.black.svg';
        heroText.style.color = 'black';
        leftBlock.style.background = 'white';
        elHero.className = 'hero';
        rightBlock.style.background = '#F8FAFD';

        mainTitle.style.color = 'black';
        mainText.style.color = 'black';
    }

})

