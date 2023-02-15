const dictionary = [];
function addToDictionary() {
    let word = document.getElementById("wordInput").value;
    dictionary.push(word);
    console.log(dictionary);
    document.getElementById("wordInput").value =" ";
}

function searchWord() {
    let word = document.getElementById("searchWord").value;
     const exist = dictionary.includes(word) ? "The word is in the dictionary!": "The word is not in the dictionary!";
     document.getElementById("demo").textContent = exist;   
}
