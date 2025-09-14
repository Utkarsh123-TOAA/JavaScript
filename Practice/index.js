const jsonnames = `[
    "Spongebob", 
    "Patrick", 
    "Squidward", 
    "Sandy"
]`;

const jsonperson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": [
        "Jellyfishing", 
        "Karate", 
        "Cooking"
    ]
}`;

const jsonpeople = `[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": "34",
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": "50",
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": "27",
    "isEmployed": false
}]`;

const jsonParse = JSON.parse(jsonpeople);
console.log(jsonParse);

fetch("questions.json")
    .then(response => response.json())
    .then(values => console.log(value))

