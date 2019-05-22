window.addEventListener("load", function() {
  class Card {
    constructor(img, p) {
      this.img = img;
      this.p = p;
    }
  }

  const cards = [
    (join = new Card(`imgs/assets/sign up.png`, `Quick sign up`)),
    (search = new Card(`imgs/assets/search.png`, `Easy search function`)),
    (video = new Card(`imgs/assets/video.png`, `Upload videos and photos`)),
    (vote = new Card(`imgs/assets/vote.png`, `Vote for the best content`))
  ];

  const mobileImg = document.querySelector(".cards .card img");
  const mobileP = document.querySelector(".cards .card p");
  const mobileNext = document.querySelector(".cards .mobile .next");
  const mobileBack = document.querySelector(".cards .mobile .back");

  let count = 0;

  mobileNext.onclick = function() {
    return (count = count + 1);
  };
  mobileBack.onclick = function() {
    return (count = count - 1);
  };

  if (count == cards.length) {
    count = 0;
  }

  mobileImg.src = `${cards[count].img}`;
  mobileP.textContent = `${cards[count].p}`;
});
