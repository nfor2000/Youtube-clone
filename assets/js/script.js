import {setTime} from "./date.js";

const fetchYoutubeContent = async () => {
     const response = await fetch('assets/data/data.json');
     const {contents} = await response.json();
     
     console.log(contents);
     return contents;
     
}



const contentContainer = document.querySelector('.grid-container');
const subscriptionContainer = document.querySelector('.subscription')

fetchYoutubeContent()
.then (contents => {
     let html = '';
     let subscriptions = '<h3>Subscriptions</h3>';
     contents.forEach( content => {
          const {title, thumbnail, youtuber, youtuberImg: imgUrl, views, duration} = content;
          html += `  <div class="card">
                         <div class="card_thumbnail">
                              <div class="video-options">
                                   <div class="option">
                                        <span class="material-symbols-outlined">
                                             schedule
                                        </span>
                                        <button class="nav-link">Watch later</button>
                                   </div>
                                   <div class="option">
                                        <span class="material-symbols-outlined">
                                             playlist_add
                                        </span>
                                        <button class="nav-link">Add to queue</button>
                                   </div>
                              </div>
                              <img src="${thumbnail}" alt="" class="thumbnail">
                              <span class="duration">${duration}<span>
                         </div>
                         <div class="info-box">
                              <div class = "info">
                                   <img src="${imgUrl}" alt="" class="avatar">
                                   <div>
                                        <h3 class="title">${title}</h3>
                                        <h4 class="name">${youtuber}.</h4>
                                        <h4 class="name">${
                                             views < 1000? views + 'views' :
                                             views < 1000000? views/1000 + 'K views':
                                             views/1000000 + 'M views'
                                        }. ${setTime()}</h4>
                                   </div>
                              </div>
                              <div class="dots">
                                   <div class="dot"></div>
                                   <div class="dot"></div>
                                   <div class="dot"></div>
                              </div>
                         </div>
                    </div>`
          subscriptions += `   <li class="nav-item">
                                   <img src="${imgUrl}" alt="" class="youtuber-img">
                                   <p class="name">${youtuber.length > 10? youtuber.slice(0, 10) + '..': youtuber }</p>
                              </li>`
                    
     });

     contentContainer.innerHTML = html;
     subscriptionContainer.innerHTML = subscriptions;
});


const sideBarToggler = document.getElementById('side-bar-toggler');
const closeSideBar = document.getElementById('close-side-bar');
const body =  document.body;
sideBarToggler.addEventListener('click', () => {
     body.classList.toggle('toggle-side-nav');
})

closeSideBar.addEventListener('click', () => {
     if(body.classList.contains('toggle-side-nav'))
     {
          body.classList.remove('toggle-side-nav');
     }
})