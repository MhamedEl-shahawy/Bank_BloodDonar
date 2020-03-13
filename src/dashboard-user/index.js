const link = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

link.forEach(clickLink => {
  clickLink.addEventListener('click', () =>{
      const setdata = document.querySelector(clickLink.dataset.target)
      link.forEach(clickLink =>{
          clickLink.classList.remove('active');
      })
      content.forEach(e => {
          e.classList.remove('active');
      })
      clickLink.classList.add('active');
     setdata.classList.add('active');
  })
});


const date = document.querySelector('.basic__date span');
let d = new Date();
 let da = ` ${d.getDate()} /${d.getMonth() + 1} / ${d.getFullYear()}` ;
 date.innerHTML = da;