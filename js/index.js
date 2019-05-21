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

