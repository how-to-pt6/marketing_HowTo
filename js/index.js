window.addEventListener("load", function() {
  class Card {
    constructor(img, p) {
      this.img = img;
      this.p = p;
    }
  }

  const cards = [
    ((join = new Card(`imgs/assets/sign up.png`, `Quick sign up`)),
    (search = new Card(`imgs/assets/search.png`, `Easy search function`)),
    (video = new Card(`imgs/assets/video.png`, `Upload videos and photos`)),
    (vote = new Card(`imgs/assets/vote.png`, `Vote for the best content`)))
  ];

  const mobileImg = document.querySelector(".cards .card img");
  console.log(mobileImg);
  const mobileP = document.querySelector(".cards .card p");
  const mobileNext = document.querySelector(".cards .mobile .next");
  const mobileBack = document.querySelector(".cards .mobile .back");

  let current = 0;
  if (current == cards.length) {
    current = 0;
  }

  mobileImg.src = `${cards[current].img}`;
  mobileP.textContent = `${cards[current].p}`;

  mobileNext.addEventListener("click", () => {
    current += 1});
  mobileBack.addEventListener("click", () => {
    current -= 1;
  });
});
