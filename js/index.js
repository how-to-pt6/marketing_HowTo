class Card {
  constructor(img, p) {
    this.img = img;
    this.p = p;
  }
}

const cards = [
  ((join = new Card(`"imgs\assets\sign up.png"`, `Quick sign up`)),
  (search = new Card(`"imgs\assets\search.png"`, `Easy search function`)),
  (video = new Card(`"imgs\assets\video.png"`, `Upload videos and photos`)),
  (vote = new Card(`"imgs\assets\vote.png"`, `Vote for the best content`)))
];

const mobileImg = document.querySelector(".cards .mobile .card");
const mobileP = document.querySelector(".cards .mobile p");
const mobileNext = document.querySelector(".cards .mobile .next");
const mobileBack = document.querySelector(".cards .mobile .back");

const current = 0;
if ((current = cards.length)) {
  current = 0;
}
next = () => {
  current += 1;
};
back = () => {
  current -= 1;
};

mobileImg.setAttribute(src, `${cards[current].img}`);
mobileP.innerHTML = `${cards[current].p}`;

mobileNext.addEventListener("click", next());
mobileBack.addEventListener("click", back());
