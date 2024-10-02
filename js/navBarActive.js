

// Active scrolling var
let section = document.querySelectorAll('section')
let lists = document.querySelectorAll('.list');
function activeLink(){
    lists.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
lists.forEach((item) =>
item.addEventListener('click',activeLink));

window.onscroll = () =>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      lists.forEach(sec =>{
        activeLink;
      })
    }
  })
};
