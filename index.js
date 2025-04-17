let itemsDiv = document.getElementById('items');
let items = [];
let input = document.getElementById('inputItem');
const storageKey = "items";

inputItem.style.marginRight = "10px"

function renderItem(){
  itemsDiv.innerHTML = null;

  for(const[idx, item] of Object.entries(items)){

    const container = document.createElement('div');
    container.style.marginBottom = '10px';

    const text = document.createElement('p');
    text.textContent = item;
    text.style.display = "inline";
    text.style.marginLeft = "10px";

    const button = document.createElement('button');
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(button);
    container.appendChild(text);
    

    itemsDiv.appendChild(container);
  }
}

function saveItem(){

const stringItems = JSON.stringify(items);
localStorage.setItem(storageKey, stringItems);


}

function loadItem(){
  
  const oldItems = localStorage.getItem(storageKey);
  if(oldItems) {items =  JSON.parse(oldItems);}
  renderItem();
}
 
function addItem(){
  const value = input.value;
  if(!value){
    alert("You cannot add an empty string!!");
    return;
  }
  items.push(value);
  renderItem();
  input.value = "";  
  saveItem();
}

input.addEventListener('keydown', function(event){
  if(event.key == 'Enter'){
    addItem();
    renderItem();
  }
})

function removeItem(idx){
  items.splice(idx,1);
  renderItem();
  saveItem();
}

document.addEventListener("DOMContentLoaded", loadItem);


