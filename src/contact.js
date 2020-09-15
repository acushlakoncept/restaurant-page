let content = document.getElementById('content');

let contact = `
<div class="container">
<div class="row mt-5">
    <h1 class="border-bottom">Contact Page</h1>
  <p class="lead">
    For anyone who shares the same passion as me and would love to watch
    and learn more, do well to subscribe (so you will be the first to be
    notified when I upload a new video), share and give my videos a thumbs
    up. Checkout my <a href="https://www.youtube.com/channel/UCNRhWLhBFVZFrPiC5T2xCQA/videos" target="_blank">YouTube Channel</a> 
  </p>
</div>
</div>
`;

const renderContact = () => {
    content.insertAdjacentHTML('beforeend', contact);
}

export default renderContact