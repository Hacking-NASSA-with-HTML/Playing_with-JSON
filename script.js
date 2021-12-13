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

/*clickedButton.addEventListener('click', function() {
    printedParagraph.innerHTML = extractedJson.name + ', ' + extractedJson.age + ', ' + extractedJson.city;
    clickedButton.innerHTML = 'click me again to cancel JSON adding';
})*/

clickedButton.onclick = function() {
    if (printedParagraph.innerHTML == 'There\'s no JSON right now') {
        printedParagraph.innerHTML = extractedJson.name + ', ' + extractedJson.age + ', ' + extractedJson.city;
        clickedButton.innerHTML = 'click me again to cancel JSON adding';
    } else {
        printedParagraph.innerHTML = 'There\'s no JSON right now';
        clickedButton.innerHTML = 'click me to add JSON data to paragraph';
    }
};


console.log(extractedJson);