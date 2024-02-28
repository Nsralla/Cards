const currentCard = {};
const listOfCards = JSON.parse(localStorage.getItem("cards"))||[];


const newCardBtn = document.getElementById('newCardBtn');

const yourCards = document.getElementById('youCardsBtn');

const container = document.querySelector(".container");


const new_task_body = document.querySelector(".new_task_body");






new_task_body.innerHTML = '';
body_to_add_new_task();





newCardBtn.addEventListener('click', body_to_add_new_task);

yourCards.addEventListener("click", body_to_display_all_cards);


function body_to_add_new_task(){
    new_task_body.innerHTML = ''; // Clear any 
    // Remove class body2 from body
    if (new_task_body.classList.contains("body2")) {
      new_task_body.classList.remove("body2");
    }


    // CREATE first div
    const group1_div = document.createElement("div");
    group1_div.classList.add("input-group1");
    // create label
    const title_label = document.createElement("label");
    title_label.textContent = 'Title'; // Use textContent
    title_label.id = "title-label";
    title_label.htmlFor = "title";
    title_label.classList.add("title-label");
    // title_label.classList.add("input-label");
    // create input field
    const input_field = document.createElement("input");
    input_field.type = "text";
    input_field.name = "title";
    input_field.id = "title";
    input_field.classList.add("title");

    group1_div.appendChild(title_label);
    group1_div.appendChild(input_field);

    // CREATE second div
    const group2_div = document.createElement("div");
    group2_div.classList.add("input-group2");
    const description_label = document.createElement("label");
    description_label.textContent = 'Description'; // Use textContent
    description_label.id = "description-label";
    description_label.htmlFor = "description";
    description_label.classList.add("description-label");

    // create text area
    const textarea = document.createElement("textarea");
    textarea.id = "description";
    textarea.name = "description";
    textarea.rows = "5";
    textarea.cols = "33";
    textarea.placeholder = "Enter your description here...";
    textarea.maxLength = "500";
    textarea.classList.add("description");

    group2_div.appendChild(description_label);
    group2_div.appendChild(textarea);

    // create buttons div
    const buttons_div = document.createElement("div");
    buttons_div.classList.add("button-group");
    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.className = "saveBtn";
    saveBtn.classList.add("saveBtn");
    buttons_div.appendChild(saveBtn);

    saveBtn.addEventListener('click',add_new_task);
        

    textarea.addEventListener('keydown',(event) =>{
        if(event.key === 'Enter'){
            add_new_task();
        }
    });

 
    new_task_body.appendChild(group1_div);
    new_task_body.appendChild(group2_div);
    new_task_body.appendChild(buttons_div);
    new_task_body.classList.add("new_task_body");

}


function add_new_task(){
    const userInput = document.getElementById('title');
    const userDescription = document.getElementById('description');

    const title = userInput.value;
    const description = userDescription.value;
    if(title.trim() !== ''){
        currentCard.title = title;
        currentCard.description = description;
        userInput.value = '';
        userDescription.value = '';
        listOfCards.push({title, description});
        localStorage.setItem('cards', JSON.stringify(listOfCards));
    }
    else{
        alert("title can't be empty");
    }
 
}


function body_to_display_all_cards(){
    new_task_body.innerHTML = '';
    new_task_body.classList.add("body2");
    new_task_body.classList.remove("new_task_body");
        
    listOfCards.forEach((task)=>{
        const task_div = document.createElement('div');
        task_div.classList.add("card-div");

        const header = document.createElement('h2');
        header.classList.add("headline");
        header.textContent = task.title;

        const bodyP = document.createElement('p');
        bodyP.textContent = task.description;
        bodyP.classList.add("card-p");

        // Append the elements properly
        task_div.appendChild(header);
        task_div.appendChild(document.createElement('hr')); // Add the horizontal line
        task_div.appendChild(bodyP);

        new_task_body.appendChild(task_div);
    });
}
