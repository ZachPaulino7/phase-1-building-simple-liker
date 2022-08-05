// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector("#modal");
errorMessage.classList.add("hidden");


//function likes(){
  const glypharray = document.querySelectorAll('.like-glyph')
 //console.log(glypharray)
  //glypharray.for((heart) => {
    //heart.addEventListener("click", heartChanger)
  //})
  for (const heart of glypharray) {
    heart.addEventListener("click", heartChanger);
  }

//} 
 
//function likes() {
  //const glyph = document.querySelectorAll('.like-glyph')
  //glyph.forEach((like) => {
    //like.addEventListener("click", heartChanger)
  //})
//}
   
function heartChanger(event) {
  console.log(event.target)
  const heart = event.target;
  mimicServerCall()
  .then(() => {
     if (heart.textContent === EMPTY_HEART) {
      heart.classList.add('activated-heart')
      heart.innerText = FULL_HEART
    }
    else { 
      heart.classList.remove("activated-heart")
      heart.innerText = EMPTY_HEART
    }
  })
  .catch(() => errorMessage.classList.remove("hidden"),
  setTimeout(() => errorMessage.classList.add("hidden"), 3000))
   }
   



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

