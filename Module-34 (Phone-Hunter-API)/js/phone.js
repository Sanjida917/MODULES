// Move-01
const loadPhone = async (searchPhone, isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();

    const phones = data.data;
    // console.log(data);
    // console.log(phones);
    // console.log(phones[6].phone_name);
    displayPhones(phones, isShowAll);
}



// Move-02
const displayPhones = (phons, isShowAll) => {
    // console.log(phons);

//Move-05 

    //stpe 1 : get the phone Container
    const phoneContainer = document.getElementById('phone-container');


    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');



    //display show all button if there are more than 12 phones
    if (phons.length > 12 && !isShowAll) {

        showAllContainer.classList.remove('hidden');
    }

    else {

        showAllContainer.classList.add('hidden');
    }




    //display only first 12 phones if not clicked show-All button

    if (!isShowAll) { 
        phons = phons.slice(0, 12);
    }

    // Move-03
    phons.forEach(phone => {
        // console.log(phone);


    // Move-06    
        //Step 2 : create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl p-4 mb-6`;

        //Step 3 : set the inner HTML
        phoneCard.innerHTML = `
        
        <figure class="mt-10"><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title text-center justify-center w-full">${phone.phone_name}</h2>

        <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>

        <div class="card-actions justify-center ">
            <button onclick="handleShowDetails('${phone.slug}')" class="btn mt-5 btn-primary bg-teal-500 border-none text-white">Show Details</button>
        </div>
        </div>
    
        `

        //Step 4 : append Child
        phoneContainer.appendChild(phoneCard);

    });


    //hide loading spinner
    toggleLoadingSpinner(false);


}


const handleShowDetails = async (id) => {

    // console.log("Clicked Show Deatils...",id);
    // load single phone data

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);

    const data = await res.json();

    // console.log(data.data.brand, data.data.image);
    showPhoneDetails(data.data);

}


const showPhoneDetails = (phnData) => {

    const phoneName = document.getElementById('show-details-phone-name');
    // phoneName.innerText = phnData.name;
    // console.log(phoneName.innerText);



    const showDetailsContainer = document.getElementById('show-details-container');

    showDetailsContainer.innerHTML =
        ` 

        
        <figure  class=" flex justify-center text-center  bg-slate-100 w-full  max-w-full ">
        <img class=" justify-center py-4 text-center" src="${phnData.image}" alt="">
        </figure>

        <p class="text-justify pt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        <div class="text-left mt-6 mb-4">
        
        <h1  class="font-bold text-xl">${phnData.name}</h1> 
        <p><span class="text-base font-bold mt-4">Storage : </span> ${phnData?.mainFeatures?.storage} </p>
        <p><span  class="text-base font-bold mt-4">GPS : </span>${phnData?.others?.GPS ? phnData.others.GPS : "No GPS Found For This Device"}</p>
        <p><span></span></p>

        </div>
        
        
        `

    //show the modal
    details_modal.showModal();


}

// Move-08
//handle search butoon
const handleSearch = (isShowAll) => {


    toggleLoadingSpinner(true);

    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;

    // console.log(searchText);
    loadPhone(searchText, isShowAll);


}


const toggleLoadingSpinner = (isLoading) => {

    const loadingSpinner = document.getElementById('loading-spinner');

    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }

    else {

        loadingSpinner.classList.add('hidden');
    }

}

//handle show All

const handleShowAll = () => {

    handleSearch(true);

}


