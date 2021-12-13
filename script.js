let printedParagraph = document.getElementById('jsonIsShownHere');
let clickedButton = document.getElementById('clickMe');



console.log('Hi, Vyacheslav Victorovich');

let userJSONdata = `{
    "name": "Mike G",
    "age": 29,
    "city": "Los Angeles"
}`;

/*   JSON Data to Javascript Object  with method  JSON.parse();  */

let extractedJson = JSON.parse(userJSONdata);

clickedButton.addEventListener('click', function() {
    printedParagraph.innerHTML = extractedJson.name + ', ' + extractedJson.age + ', ' + extractedJson.city;
})


console.log(extractedJson);