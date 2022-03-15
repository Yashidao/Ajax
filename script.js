let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://thatsthespir.it/api', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("success");

            let quotes = JSON.parse(this.response);
            let author = quotes.author;
            let quote = quotes.quote;

            console.log(author);
            console.log(quote);
            
            document.getElementsByTagName("h2")[0].innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
        }
    }

    xhr.send();

document.getElementById("btn").addEventListener('click', () => {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://thatsthespir.it/api', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("success");

            let quotes = JSON.parse(this.response);
            let author = quotes.author;
            let quote = quotes.quote;

            console.log(author);
            console.log(quote);
            
            document.getElementsByTagName("h2")[0].innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
        }
    }

    xhr.send();

    
});

