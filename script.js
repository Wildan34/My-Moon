const container = document.querySelector('.container');
const content = document.querySelector('.dropdown-content');
// const p = content.querySelectorAll('p');
const gambar = container.firstElementChild;
let i = 0;

container.addEventListener('click', (e) => {
  if(e.target.className == 'dropdown-header') {
    // document.body.style.backgroundColor = 'white';
    setTimeout(() => {
      content.classList.toggle('show');
//       p.forEach( i => {
//         i.classList.toggle('show');
//       })
    },200);
    
    e.target.firstElementChild.classList.toggle('balik');
  }
  
  if(e.target.tagName.toLowerCase() === 'p') {
    const src = e.target.textContent.trim();
    gambar.setAttribute('src', 'gambar/' + src + '.png');
  }
});

// p.addEventListener('click', o => {
//   const src = ['gambar/144p.png', 'gambar/240p.png', 'gambar/360p.png', 'gambar/480p.png', 'gambar/720p.png'];
//   o.forEach(i => {
//     gambar.setAttribute('click', src[])
//   })
// });

// p[0].addEventListener('click', o => {
//   gambar.setAttribute('src', 'gambar/144p.png');
// })
// p[1].addEventListener('click', o => {
//   gambar.setAttribute('src', 'gambar/240p.png');
// })
// p[2].addEventListener('click', o => {
//   gambar.setAttribute('src', 'gambar/360p.png');
// })
// p[3].addEventListener('click', o => {
//   gambar.setAttribute('src', 'gambar/480p.png');
// })
// p[4].addEventListener('click', o => {
//   gambar.setAttribute('src', 'gambar/720p.png');
// })












