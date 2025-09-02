const prompt = require("prompt-sync")();

function printInfo(){
    console.log("Contact Management System");
    console.log("-------------------------");
    console.log("1. Add a Contact");
    console.log("2. Delete a Contact");
    console.log("3. View Contacts");
    console.log("4. Search Contacts");
    console.log("5. Exit");
}
 
const contacts = []

function addContact(){
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact);
    console.log();
    console.log("\"Added!\"");
}

function deleteContact(){
    console.log("Contact IDs")
    for(let i =0; i<contacts.length; i++){
        const contact = contacts[i];
        console.log((i+1).toString() + ":", contact.name)
    }
    const number = parseInt(prompt("Enter an ID: "));
    if (isNaN(number) || number > contacts.length || number < 1){ 
        console.log("Invalid ID!");
        return;
    }
    else{
        contacts.splice(number-1, 1)
        console.log("Removed.")
    }  
}   

function listContacts(contactS){
    if(contactS.length === 0) console.log("No contact available!")
        
    for(let elements of contactS){
        console.log("#############")
        console.log("Name: " + elements.name);
        console.log("Email: "+ elements.email);  
    }
}

function searchContact(){
    const searchString = prompt("Search: ").toLowerCase();
    const results = [];

    for (let elements of contacts){
        if(elements.name.toLowerCase().includes(searchString)){
            results.push(elements);
        }
    }
    listContacts(results);
}

printInfo();

let valid = true;
while(valid){
    console.log();
    const number = prompt("Enter an option (1-5): ")
    switch(number){
    case "1": 
        addContact();
        break;
    case "2":
        deleteContact();
        break;
    case "3":
        listContacts(contacts);
        break;
    case "4":
        searchContact();
        break;
    case "5":
        valid = false;
        break;
    default:
        console.log("Unknown");
        break;
    }
}

