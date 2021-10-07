fetch("https://api.quotable.io/random")
    .then(data => data.json())
    .then(Object => {
        if(Object) {
            const quote = document.getElementById('quote');
            const cite = document.getElementById('cite');
            quote.innerHTML = Object.content;
            cite.innerHTML= '-'+ Object.author;
        }
        else{
            console.log(Object);
        }
    });