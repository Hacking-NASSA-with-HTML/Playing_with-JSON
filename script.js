let printedParagraph = document.getElementById('jsonIsShownHere');
let clickedButton = document.getElementById('clickMe');



console.log('Hi, Vyacheslav Victorovich');

let userJSONdata = `{
    "name": "Mike Goldberg",
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
    if (printedParagraph.innerHTML == 'There\'s no JSON data right now') {
        printedParagraph.innerHTML = extractedJson.name + ', ' + extractedJson.age + ', ' + extractedJson.city;
        clickedButton.innerHTML = 'click me again to cancel JSON adding';
        printedParagraph.style.color = '#0d941f';
    } else {
        printedParagraph.innerHTML = 'There\'s no JSON data right now';
        clickedButton.innerHTML = 'click me to add JSON data to paragraph';
        printedParagraph.style.color = '#ff6347';
    }
};


console.log(extractedJson);