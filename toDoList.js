var plusButton = document.querySelector('.addButton');
var inputField = document.querySelector('.inputField');
var listContainer = document.querySelector('.theList');
var error = document.querySelector('#error');
var checkedList = document.querySelector('.checkedList');

function addNewLine (){
    if (inputField.value.length < 1){
        error.classList.add('wrongEntry');
        return false;
    } else {
        error.classList.remove('wrongEntry');
        var newLine = document.createElement('p');
        var newText = document.createElement('li');
        newLine.classList.add('newLine')
        newText.innerText = inputField.value;
        listContainer.appendChild(newLine);
        newLine.appendChild(newText);
          
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');
        newLine.appendChild(buttonDiv);

        var minusButton = document.createElement('button');
        minusButton.classList.add('minusButton');
        minusButton.textContent = " - ";
        buttonDiv.appendChild(minusButton);

        minusButton.addEventListener('click', function(){
            listContainer.removeChild(newLine);
            checkedList.removeChild(newLine);
        });
        
        var checkButton = document.createElement('button');
        checkButton.classList.add('checkButton');
        checkButton.textContent = "Check";
        buttonDiv.appendChild(checkButton);
            
        checkButton.addEventListener('click', function (check){
            check.checked = check.checkedList;
                if (check.checkedList = true) {
                    checkButton.textContent = "Checked";
                    checkedList.appendChild(newLine);   
                }
            });
    };

    inputField.value = "";
    inputField.focus();
};

plusButton.addEventListener('click', addNewLine);

inputField.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        addNewLine();
    }
});