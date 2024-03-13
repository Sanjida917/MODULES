

const btnContainer = document.getElementById('main-container');

const fetchCatagories = async () => {


    const url = 'https://openapi.programming-hero.com/api/videos/categories';

    const res = await fetch(url);
    const data = await res.json();

    const datas = data.data;


    datas.forEach(dta => {

        console.log(dta.category_id)

        const btnsStore = document.createElement('div');

        btnsStore.innerHTML = `
    

          <button onclick = "fetchDataByCatagories(${dta.category_id})" class="px-6 py-2 text-lg font-semibold bg-zinc-100 border-2 rounded-xl">${dta.category}</button>
        

    `

        btnContainer.appendChild(btnsStore);

    });


}

fetchCatagories();



let initContainer = 1000;
const emptyEL = document.getElementById('empty');

const fetchDataByCatagories = async (categoryId) => {
    initContainer = categoryId;

    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`;

    const res = await fetch(url);
    const dta = await res.json();


    const detdata = dta.data;
    console.log(detdata);

    if (detdata.length === 0) {


        emptyEL.classList.remove('hidden');

    }

    else {

        emptyEL.classList.add('hidden')
    }




    // console.log(detdata);

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = ' ';



    detdata.forEach(data => {

        console.log(data.authors[0].verified);

        // console.log(data.thumbnail);

        let varificationPic = ''

        if (data.authors[0].verified) {

            varificationPic = `*`
        }


        const cardDiv = document.createElement('div');

        cardDiv.innerHTML =
            `
        <div class="card rounded-none bg-zinc-200 bg-base-100 shadow-xl">
            <figure><img class="bg-cover w-full h-60 m-0" src="${data.thumbnail}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${data.title}</h2>
              <div class="flex mt-4 justify-center items-center gap-4">
              <img class="w-8 h-8 rounded-full" src="${data.authors[0].profile_picture}" alt="Shoes" />
              <p class="inline">${data.authors[0].profile_name} <span class="inline text-4xl text-blue-600 font-extrabold ">${varificationPic}</span> </p>

              </div>
            <p>${data.others.views} </p>

            </div>

          </div>
        `

        cardContainer.appendChild(cardDiv);

    });





};


fetchDataByCatagories(initContainer);