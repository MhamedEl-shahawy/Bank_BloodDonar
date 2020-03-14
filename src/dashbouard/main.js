let target = document.querySelector('#addnew');
let availTabel  = document.querySelector('#availabel table tbody');
let newItems  = document.querySelector('#availabel .new-items');
let selectType  = document.querySelector('#availabel #type');
let quantity =  document.querySelector('#availabel .new-items_input');
let addNew =  document.querySelector('#availabel #addMain');



/* open tab */
function openTab(evt, cityName) {
  let i, tabcontent, tablinks,firstTab;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


/* add new item */
addNew.addEventListener("click",()=>{
  console.log("me");
    newItems.classList.toggle("show");

});
target.addEventListener("click",()=>{
  newItems.classList.toggle("show");


   let vals = [selectType.value,quantity.value];
   let tr =  document.createElement("tr");
   let iconsTd = `
      <td data-label="edit">
         <span><a><i class="fas fa-edit"></i></a></span>
         <span><a><i class="fas fa-trash-alt"></i></a></span>
       </td>
   `;
   vals.forEach((val)=>{
     let td = document.createElement("td");
     td.setAttribute("data-label","quantity");
     td.innerHTML = val; 
     tr.appendChild(td);   
   });

   tr.insertAdjacentHTML('beforeend',iconsTd);
   availTabel.appendChild(tr);
   addTrash();
});
/* add event remove to all trash icons */
function addTrash(){
document.querySelectorAll('.fa-trash-alt').forEach(item => {
  item.addEventListener('click', event => {
  item.offsetParent.parentNode.remove();
  })
});
}
addTrash();



