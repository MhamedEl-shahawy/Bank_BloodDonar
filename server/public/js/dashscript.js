let targets = document.querySelectorAll('.addnew');
let availTables  = document.querySelectorAll('table tbody');
let newItems  = document.querySelectorAll('.new-items');
let selectType  = document.querySelectorAll('.type');
let quantity =  document.querySelectorAll('.new-items_input');
let addNew =  document.querySelectorAll('.addMain');



/* add new item */
addNew.forEach((val)=>{
  val.addEventListener("click",()=>{
   newItems.forEach((newItem)=>{
    newItem.classList.toggle("show");
   })
   });
      
});

targets.forEach((target)=>{
  target.addEventListener("click",()=>{
   newItems.forEach((newItem)=>{
    newItem.classList.toggle("show");
   })
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
   availTables.forEach((availTable)=>{
   availTable.appendChild(tr);
   });
   addTrash();
});
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