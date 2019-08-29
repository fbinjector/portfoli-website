// navigation
(function () {
  const navbtn = document.querySelector('.bars');
  const bar1 = document.querySelector('.bar-1');
  const bar2 = document.querySelector('.bar-2');
  const bar3 = document.querySelector('.bar-3');
  const navlinks = document.querySelector('.nav-links');
  navbtn.addEventListener('click', () => {
    bar1.classList.toggle('change-1');
    bar2.classList.toggle('change-2');
    bar3.classList.toggle('change-3');
    navlinks.classList.toggle('show-nav');
    setTimeout(() => {
      navlinks.classList.remove('show-nav');
      bar1.classList.remove('change-1');
      bar2.classList.remove('change-2');
      bar3.classList.remove('change-3');
    }, 5000)
  });
})();

// scroller
function scrollIt() {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': window.innerHeight
  });
}
const scroller = document.querySelector('.scroll');
scroller.addEventListener('click', () => {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': window.innerHeight
  })
})

// gallery
const galleryOptions = { threshold: [0, 1] };
const galleryObserver = new IntersectionObserver(galleryCallback, galleryOptions);

function galleryCallback(entries, galleryObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      entry.target.classList.toggle('inbound', true);
    } else {
      entry.target.classList.toggle('inbound', false);
    }
  })
}

const galleryImgs = document.querySelectorAll('.gallery-img');
galleryImgs.forEach(galleryImg => {
  galleryObserver.observe(galleryImg);
})

// gallery 
const btns = document.querySelectorAll('.single-title');
const allImgs = document.querySelectorAll('.gallery-img');
let imgArr = Array.from(allImgs);
 
function toggleActiveClass(active){
    btns.forEach(btn => {
      btn.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<imgArr.length; i++){
            imgArr[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<imgArr.length; i++)
            imgArr[i].dataset.class === dataClass ? imgArr[i].style.display = 'block' : imgArr[i].style.display = 'none';
    }
}
 
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
      toggleActiveClass(btns[i]);
      toggleimages(btns[i].dataset.class);
    });
}