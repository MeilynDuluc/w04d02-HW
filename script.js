let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitleEl = document.getElementById('main-title');
  mainTitleEl.innerHTML = "Dom's World";

  // Part 2
  this.body.style.backgroundColor = 'darkslategray';

  // Part 3
  function removeFromFavThingsList(){
  const favThingsListEl = document.getElementById("favorite-things");
  favThingsListEl.removeChild(favThingsListEl.childNodes[2]);
  }

  // Part 4
  const specialTitleEl = document.querySelectorAll('.special-title');
  for (let title of specialTitleEl){
    title.style.fontSize = '2rem';
  }

  // Part 5
  const racesEl = document.getElementById("past-races");
  racesEl.removeChild(racesEl.childNodes[2]);

  // Part 6
  const li = document.createElement('li')
  li.textContent = 'Laurelton'
  document.querySelector('#past-races').appendChild(li)

  // Part 7
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Laurelton'
  const pEl = document.createElement('p')
  pEl.textContent = 'My hometown in Queens, NY'
  
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)

  // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()

  // Part 9
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
    })
  })
  
  
  
});



});
