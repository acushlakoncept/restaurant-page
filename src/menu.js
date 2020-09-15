let content = document.getElementById('content');

let menu = `
<div class="container">
<div class="row mt-5">
    <h1 class="border-bottom">Menu Page</h1>
  <p class="lead">
    Hi there! Welcome to Exquisite Kitchen where I share my passion for
    cooking with the world. Cooking is meant to be fun and not boring, so,
    I would be sharing with you easy and healthy recipes you can try out.
    Hey! I’m not here to turn you to a perfect cook but to help you
    navigate the kitchen and make food everyone will love.
  </p>
  <p class="lead">
    For anyone who shares the same passion as me and would love to watch
    and learn more, do well to subscribe (so you will be the first to be
    notified when I upload a new video), share and give my videos a thumbs
    up. Checkout my <a href="https://www.youtube.com/channel/UCNRhWLhBFVZFrPiC5T2xCQA/videos" target="_blank">YouTube Channel</a> 
  </p>
</div>
</div>
`;

const renderMenu = () => {
    content.insertAdjacentHTML('beforeend', menu);
}

export default renderMenu