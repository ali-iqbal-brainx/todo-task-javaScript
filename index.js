//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];




const deleteItem = function(itemNo){
    console.log("remove Index :",itemNo);
    todoItems.splice(itemNo,1);
    getList(todoItems);
}

const editItem = function(itemNo,item){
    console.log("Edit Index :",itemNo);
    console.log("Edit Index Name :",item);
    itemInput.value = item;
    todoItems.splice(itemNo,1);
    getList(todoItems);
}

const markItem = function(itemNo, strikeFlag){
    console.log("mark Index :",itemNo);
    console.log("mark index flag :",strikeFlag);
    if(strikeFlag==0){
        todoItems[itemNo][1]=1;
    }else{
        todoItems[itemNo][1]=0;
    }
    getList(todoItems);
}




const getList = function (todoItems) {
    itemList.innerHTML = '';

    let itemNo=0;
    for(let i=0; i<todoItems.length;i++){
        itemList.insertAdjacentHTML('beforeend', `
        <div class="item my-2 d-sm-flex justify-content-around">
          ${todoItems[i][1]==1 ? `<h5 class="item-name text-capitalize text-decoration-line-through">${todoItems[i][0]}<h5>` : `<h5 class="item-name text-capitalize">${todoItems[i][0]}</h5>`}
          <div class="item-icons">
            <a href="#" onclick="markItem(${itemNo}, ${todoItems[i][1]})" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
            <a href="#" onclick="editItem(${itemNo},'${todoItems[i][0]}')" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
            <a href="#" onclick="deleteItem(${itemNo})" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
          </div>
        </div>`);
        itemNo++;
        
    }
}



//add an item to the List
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const itemName = itemInput.value;
    

    if (itemName.length === 0) {

    } else {
        todoItems.push([itemName,0]);
        getList(todoItems);
        
    }
    

    itemInput.value = '';

});

//clear all items from the list
clearButton.addEventListener('click', function () {
    todoItems = [];
    getList(todoItems);
})




