function TheHandle(e) {
    e.preventDefault()

    //Get input from form input field
    var theurl = document.querySelectorAll('input[name=test-url]')

    //Verify that input is a valid url
    if(Client.validURL(JSON.parse(JSON.stringify(theurl[0].value))))
    {
        console.log("::: FORM INPUT VALID :::")
        
        console.log("Build REQUEST");
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: theurl[0].value})
        }).then(result => result.json()).then(function(result) {
            console.log(result); 
            document.querySelector('section.url-results #polarity').innerHTML = result.polarity
            document.querySelector('section.url-results #subjectivity').innerHTML = result.subjectivity
            document.querySelector('section.url-results #polarity_confidence').innerHTML = result.polarity_confidence
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = result.subjectivity_confidence
            document.querySelector('section.url-results #excerpt').innerHTML = result.text
        })

    }else{
        var err_sec = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" +JSON.stringify(theurl[0].value)+"] is not valide. Please enter a valid url"
        err_sec.style.display = "block";
        
    } 
}

export { TheHandle }
