let itemsDiv = document.getElementById('items');
let items = [];
let input = document.getElementById('inputItem');

inputItem.style.marginRight = "10px"

function renderItem(){
  itemsDiv.innerHTML = null;

  for(const[idx, item] of Object.entries(items)){

    const container = document.createElement('div');
    container.style.marginBottom = '10px';

    const text = document.createElement('p');
    text.textContent = item;
    text.style.display = "inline";
    text.style.marginRight = "10px";

    const button = document.createElement('button');
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}



function loadItem(){

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
}

function saveItem(){

}


