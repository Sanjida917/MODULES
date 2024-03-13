
const loadPosts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();

    toggleLoadingSpinner(true);

    // console.log(posted);

    displayPost(data);



}


const displayPost = (data) => {
    toggleLoadingSpinner(true);



    const allPostsContainer = document.getElementById('post-container');
    allPostsContainer.textContent = ''

    const isActive = document.getElementById('is-active');


    data.posts.forEach(post => {



        // console.log(post.isActive);


        setTimeout(() => {

            

            const postContainer = document.createElement('div');

            postContainer.innerHTML =

                `

        <div class="card m-10 card-side max-w-2xl w-full h-auto bg-base-100 shadow-xl">
        
            <div>
                <div id="is-active" class="avatar ${post?.isActive === true ? 'online' : 'offline'} placeholder ml-10 mt-10">
                    <div class="bg-neutral text-neutral-content rounded-2xl w-14">
                           <img src="${post.image}" alt="">
            
                    </div>
            
                </div>
              </div>
            
                <div >
                    <div >
                        <div class="card-body gap-2 max-w-md mr-5">
                            <div class="flex justify-between text-[#12132DCC] text-sm font-medium gap-2">
                                <button> #${post.category} </button>
                                <p>Author : ${post.author.name}</p>
                            </div>
            
                            <div class="border-b-2 border-dashed pb-4">
            
                                <h2 class="card-title text-[#12132D] text-xl font-bold">${post.title}</h2>
                                <p class="text-[#12132D99] text-base">${post.description}</p>
                            </div>
            
                            <div class="items-center h-full mt-5 ">
                                <div class="flex gap-2 items-center text-[#12132D99] text-base">
                                    <img src="images/msg.svg" alt="">
                                    <p> ${post.comment_count}</p>
                                    <img src="images/seen.svg" alt="">
                                    <p> ${post.view_count}</p>
                                    <img src="images/clock.svg" alt="">
                                    <p> ${post.posted_time} min</p>
            
            
                                    <div class="card-actions justify-end">
                                        <button onclick="selectedButton('${post.title}, ${post.view_count}')" class="btn "><img
                                                src="images/selectmsg.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            
            </div>

        `

        allPostsContainer.appendChild(postContainer);
        toggleLoadingSpinner(false);


        }, 2000);




    });




}

let count = 0;
const selectedButton = async (store) => {

    const titleCount = (store.split(','));

    const title = titleCount[0];
    const count_total = titleCount[1];


    const countTotal = document.getElementById('count-total');
    const countVal = countTotal.innerText;
    console.log(countVal)


    const selStore = document.getElementById('select-store')
    selStore.classList.remove('hidden');

    const selectContainer = document.getElementById('select-contaiiner');
    const selectedContain = document.createElement('div');

    selectedContain.innerHTML = `
    
    
    <div class="card w-96 h-24 card-body bg-base-100 mt-6 shadow-xl border-2">
    <div class="flex justify-evenly items-center gap-4">
        <p>${title}</p>
        <div class="flex gap-2">
            <img src="images/seen.svg" alt="">
            <p>${count_total}</p>
        </div>

    </div>
    </div>
    
    `

    selectContainer.appendChild(selectedContain);

    count++;
    console.log(count);
    countTotal.innerText = count;

}



const latestPosts = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();

    console.log(data);


    const latestPostContainer = document.getElementById('latest-post');


    data.forEach(latest => {

        const latestPosts = document.createElement('div');

        console.log("latest", latest);


        latestPosts.innerHTML = `
        
        <div class="card w-96 bg-base-100 border-2 shadow-xl">
        <figure class="px-10 pt-10">
            <img src="${latest.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>


        <div class="card-body items-start text-center">
            <div class="flex gap-2">
                <img src="images/date.svg" alt="">
                <p class="text-[#12132D99] text-base ">${latest?.author?.posted_date ? latest.author.posted_date : "No Publish Date"}</p>
            </div>
            <h2 class="card-title text-justify text-[#12132D] font-extrabold text-lg">${latest.title}</h2>
            <p class="text-justify text-[#12132D99] text-base ">${latest.description}</p>
            <div class="flex items-center">
                <img class="w-8 h-8 bg-slate-500 rounded-full" src="${latest.profile_image} " alt="">
                <div class="">

                    <h5 class="ml-6 text-left text-[#12132D] font-semibold text-base">${latest?.author?.name}</h5>
                    <p class=" ml-6 text-left text-[#12132D99] text-sm">${latest?.author?.designation ? latest.author.designation :
                "Unknown"}</p>
                </div>
            </div>
        </div>
    </div>
        
        `

        latestPostContainer.appendChild(latestPosts);


    });


};


const searchCategory = async () => {

    toggleLoadingSpinner(true);



    const categorySearch = document.getElementById('category-search');
    const category = categorySearch.value;


    const resp = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);

    const data = await resp.json();



    // console.log(data);

    displayPost(data, true);


}


const toggleLoadingSpinner = async (isLoading) => {



    const loadingSpinner = document.getElementById('loading-spinner');

    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }

    else {

        loadingSpinner.classList.add('hidden');
    }

}

// searchCategory();

latestPosts();

loadPosts();