
///Data Set 
///An array of objects that contains the name of object followed with several details
/// such as release date price and an image url for its thumbnail.
/// Note: Remove details from its name and make thme into bullet points
let gundam_kits = [
      {
        "name": "RX-78-2 Gundam(HG | Series: Mobile Suit Gundam | Release: 1980)",
        "size": "1/144",
        "grade": "High Grade",
        "release_year": 1980,
        "price_yen": 300,
        "series": "Mobile Suit Gundam",
        "price_usd": 2.01,
        "image_url": "https://m.media-amazon.com/images/I/71jb0jBaPGL.jpg"
      },
      {
        "name": "ZGMF-X10A Freedom Gundam (HG | Series: Gundam SEED | Release: 2004)",
        "size": "1/144",
        "grade": "High Grade",
        "release_year": 2004,
        "price_yen": 1200,
        "series": "Mobile Suit Gundam SEED",
        "price_usd": 8.04,
        "image_url": "https://i.ebayimg.com/images/g/JsgAAOSwYRpjndne/s-l1200.jpg"
      },
      {
        "name": "ASW-G-08 Gundam Barbatos (HG | Series: Gundam: Iron-Blooded Orphans | Release: 2015)",
        "size": "1/144",
        "grade": "High Grade",
        "release_year": 2015,
        "price_yen": 1000,
        "series": "Mobile Suit Gundam: Iron-Blooded Orphans",
        "price_usd": 6.7,
        "image_url": "https://m.media-amazon.com/images/I/71XivClnE2L._AC_UF894,1000_QL80_.jpg"
      },
      {
        "name": "RX-78-2 Gundam Ver. 3.0 (MG | Series: Mobile Suit Gundam | Release: 2013)",
        "size": "1/100",
        "grade": "Master Grade",
        "release_year": 2013,
        "price_yen": 4500,
        "series": "Mobile Suit Gundam",
        "price_usd": 30.15,
        "image_url": "https://i.ebayimg.com/images/g/ORsAAOSwU-hjBYwO/s-l1200.jpg"
      },
      {
        "name": "ZGMF-X20A Strike Freedom Gundam (MG | Series: Gundam SEED | Release: 2006)",
        "size": "1/100",
        "grade": "Master Grade",
        "release_year": 2006,
        "price_yen": 5000,
        "series": "Mobile Suit Gundam SEED Destiny",
        "price_usd": 33.5,
        "image_url": "https://cdn.shopify.com/s/files/1/2786/5582/products/mg-zgmf-x20a-strike-freedom-gundam-pa.jpg?v=1657133255"
      },
      {
        "name": "XXXG-00W0 Wing Gundam Zero EW Ver. (MG | Series: Gundam Wing| Release: 2010)",
        "size": "1/100",
        "grade": "Master Grade",
        "release_year": 2010,
        "price_yen": 3800,
        "series": "Mobile Suit Gundam Wing: Endless Waltz",
        "price_usd": 25.46,
        "image_url": "https://cdn.shopify.com/s/files/1/2786/5582/products/mg-xxxg-00w0-wing-gundam-zero-custom-pa.jpg?v=1631227344"
      },
      {
        "name": "RX-78-2 Gundam (PG | Series: Mobile Suit Gundam | Release: 1998)",
        "size": "1/60",
        "grade": "Perfect Grade",
        "release_year": 1998,
        "price_yen": 12000,
        "series": "Mobile Suit Gundam",
        "price_usd": 80.4,
        "image_url": "https://i.ebayimg.com/images/g/AqQAAOSwfQljm7Sl/s-l1200.png"
      },
      {
        "name": "ZGMF-X10A Freedom Gundam (PG | Series: Gundam Seed | Release: 2004))",
        "size": "1/60",
        "grade": "Perfect Grade",
        "release_year": 2004,
        "price_yen": 15000,
        "series": "Mobile Suit Gundam SEED",
        "price_usd": 100.5,
        "image_url": "https://lascalemodel.com/cdn/shop/products/s-l1600_7207a81a-c42f-43f6-a71c-17bccc85f0d0.jpg?v=1672170613"
      },
      {
        "name": "MBF-P02 Gundam Astray Red Frame (PG | Series: Gundam Seed | Release: 2009))",
        "size": "1/60",
        "grade": "Perfect Grade",
        "release_year": 2009,
        "price_yen": 18000,
        "series": "Mobile Suit Gundam SEED Astray",
        "price_usd": 120.6,
        "image_url": "https://lascalemodel.com/cdn/shop/products/PG-Gundam-Astray-Red-Frame-box-2.webp?v=1676517656"
      }
];

// This function adds cards the page to display the data in the array
// param: takes in an array of objects that will be used to display the cards
// will default to gundam_kits when not being sorted or first loaded
function showCards(gundamArr = gundam_kits) {
  console.log("showCards called with:", gundamArr);
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  

  for (let i = 0; i < gundamArr.length; i++) {
    let title = gundamArr[i].name;
    let imageURL = "";
    
    
    
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, gundamArr[i].image_url); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

//function for sorting the gundam kits by the series they are from
//sorts the existing array of objects "gundam_kits and passes it to showCards"
// Works by comparing two and returning whether one should go before the other by series name.
// if both are equal it doesnt swap or changes them but instead moves onto comparing b to c (new a and b)
function sortSeries(){
  gundam_kits.sort((a,b) => {
    if (a.series < b.series) return -1;
    if (a.series > b.series) return 1;
    return 0;
  });
  console.log(gundam_kits)
  showCards(gundam_kits);
}

//function for sorting gundam kits by date released
// sorts the existing array of obj "gundam_kits" and passes it to showCards
function sortDates(){
      gundam_kits.sort((a,b) => {
        if (a.release_year < b.release_year) return -1;
        if (a.release_year > b.release_year) return 1;
        return 0;
      })
      console.log(gundam_kits)
      showCards(gundam_kits);
}

///Implemented 
// Function for filtering gundams by name, this will then be attached to a dropdown or button
// Param: passing a gundam name 
// manipulates the array then calls showCards function to display the manipulated array.
function filterGundamName(gundam_name){
  /// uses filter to create a new array newGundamArr, that contains only objects that has names that are passed through the parameter.
  /// .filter is a callback function that iterates through an array and returns true if the object within the array fits the filter.
  /// within the () the arrow function means do this for each item, or for each "gundam" do what is after this arrow.
  /// gundam.name.slice tells the arrow to look at this specifc attribute.
  /// the slice grabs the whole name and then checks if it starts with gundam_name
  /// THIS IS OLD WAY OF FILTERING : const newGundamArr = gundam_kits.filter(gundam => gundam.name.slice(0,gundam_name.length) === gundam_name);

  /// same thing uses filter and a placeholder object that now checks for each name of each object within the array of objects gundam_kits,
  /// and lowercases it and checks if it includes the passed gundam name also lowercased to make it more scalabale.
  const newGundamArr = gundam_kits.filter(gundam => gundam.name.toLowerCase().includes(gundam_name.toLowerCase()));
  
    console.log(newGundamArr)
    console.log("TESTING DONE")
    console.log(gundam_kits)
    showCards(newGundamArr);
  }

///Function for editing card content 
function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";
  ;

  // You can use console.log to help you debug!
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
// "() => " lets the page load first then scrolls to the top and then displays cards.
document.addEventListener("DOMContentLoaded", () => { window.scrollTo(0,0); showCards()});



function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

// Function to remove cards
// Note: Work to remove from a copy so that original array can be shown without refreshing.
function removeLastCard() {
  let copyArray = gundam_kits;
  copyArray.pop(); // Remove last item in titles array
  showCards(copyArray); // Call showCards again to refresh
}

