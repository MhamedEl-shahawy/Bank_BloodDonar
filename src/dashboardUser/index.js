const link = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');

link.forEach(clickLink => {
  clickLink.addEventListener('click', () =>{
      const setdata = document.querySelector(clickLink.dataset.target)
      content.forEach(e => {
          e.classList.remove('active');
      })
      link.forEach(clickLink =>{
          clickLink.classList.remove('active');
      })
      clickLink.classList.add('active');
     setdata.classList.add('active');
  })
});

