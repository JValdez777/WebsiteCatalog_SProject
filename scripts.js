/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


let gundam_kits = [
      {
        "name": "RX-78-2 Gundam (HG 1/144)",
        "grade": "High Grade",
        "release_year": 1980,
        "price_yen": 300,
        "series": "Mobile Suit Gundam",
        "price_usd": 2.01,
        "image_url": "https://m.media-amazon.com/images/I/71jb0jBaPGL.jpg"
      },
      {
        "name": "ZGMF-X10A Freedom Gundam (HG 1/144)",
        "grade": "High Grade",
        "release_year": 2004,
        "price_yen": 1200,
        "series": "Mobile Suit Gundam SEED",
        "price_usd": 8.04,
        "image_url": "https://i.ebayimg.com/images/g/JsgAAOSwYRpjndne/s-l1200.jpg"
      },
      {
        "name": "ASW-G-08 Gundam Barbatos (HG 1/144)",
        "grade": "High Grade",
        "release_year": 2015,
        "price_yen": 1000,
        "series": "Mobile Suit Gundam: Iron-Blooded Orphans",
        "price_usd": 6.7,
        "image_url": "https://m.media-amazon.com/images/I/71XivClnE2L._AC_UF894,1000_QL80_.jpg"
      },
      {
        "name": "RX-78-2 Gundam Ver. 3.0 (MG 1/100)",
        "grade": "Master Grade",
        "release_year": 2013,
        "price_yen": 4500,
        "series": "Mobile Suit Gundam",
        "price_usd": 30.15,
        "image_url": "https://i.ebayimg.com/images/g/ORsAAOSwU-hjBYwO/s-l1200.jpg"
      },
      {
        "name": "ZGMF-X20A Strike Freedom Gundam (MG 1/100)",
        "grade": "Master Grade",
        "release_year": 2006,
        "price_yen": 5000,
        "series": "Mobile Suit Gundam SEED Destiny",
        "price_usd": 33.5,
        "image_url": "https://cdn.shopify.com/s/files/1/2786/5582/products/mg-zgmf-x20a-strike-freedom-gundam-pa.jpg?v=1657133255"
      },
      {
        "name": "XXXG-00W0 Wing Gundam Zero EW Ver. (MG 1/100)",
        "grade": "Master Grade",
        "release_year": 2010,
        "price_yen": 3800,
        "series": "Mobile Suit Gundam Wing: Endless Waltz",
        "price_usd": 25.46,
        "image_url": "https://cdn.shopify.com/s/files/1/2786/5582/products/mg-xxxg-00w0-wing-gundam-zero-custom-pa.jpg?v=1631227344"
      },
      {
        "name": "RX-78-2 Gundam (PG 1/60)",
        "grade": "Perfect Grade",
        "release_year": 1998,
        "price_yen": 12000,
        "series": "Mobile Suit Gundam",
        "price_usd": 80.4,
        "image_url": "https://i.ebayimg.com/images/g/AqQAAOSwfQljm7Sl/s-l1200.png"
      },
      {
        "name": "ZGMF-X10A Freedom Gundam (PG 1/60)",
        "grade": "Perfect Grade",
        "release_year": 2004,
        "price_yen": 15000,
        "series": "Mobile Suit Gundam SEED",
        "price_usd": 100.5,
        "image_url": "https://static.wikia.nocookie.net/gunplabuilders/images/1/17/RG_Freedom_Gundam_boxart.jpg/revision/latest?cb=20170609043716"
      },
      {
        "name": "MBF-P02 Gundam Astray Red Frame (PG 1/60)",
        "grade": "Perfect Grade",
        "release_year": 2009,
        "price_yen": 18000,
        "series": "Mobile Suit Gundam SEED Astray",
        "price_usd": 120.6,
        "image_url": "https://lascalemodel.com/cdn/shop/products/PG-Gundam-Astray-Red-Frame-box-2.webp?v=1676517656"
      }
];

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
  "Hello",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < gundam_kits.length; i++) {
    let title = gundam_kits[i].name;

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    
    

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, gundam_kits[i].image_url); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
function sortSeries(){
  gundam_kits.sort((a,b) => {
    if (a.series < b.series) return -1;
    if (a.series > b.series) return 1;
    return 0;
  });
  console.log(gundam_kits)
  showCards();
}
function sortDates(){
      gundam_kits.sort((a,b) => {
        if (a.release_year < b.release_year) return -1;
        if (a.release_year > b.release_year) return 1;
        return 0;
      })
      console.log(gundam_kits)
      showCards();
};
///Implemented 
/// Function for filtering gundams by name, this will then be attached to a dropdown or button
///Param: passing a gundam name 
///manipulates the array then calls showCards function to display the manipulated array.
function filterGundamName(gundam_name){
  const lowerGundamName = gundam_name.toLowerCase();
  for (let i = gundam_kits.length - 1; i>= 0; i--){
    if (!gundam_kits[i].name.toLowerCase().includes(lowerGundamName)){
        gundam_kits.splice(i,1);
       
    }
    showCards();
  }
}
function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  gundam_kits.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
