let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} written by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);


let getTemperatures = function(farenheit) {
    return {
        farenheit: farenheit,
        celsius: (farenheit - 32) * 5 / 9,
        kelvin: (farenheit - 32) * 5 / 9 + 273.15
    }
}


let temperature = getTemperatures(68);
console.log(`Temp in F: ${temperature.farenheit}; Temp in C: ${temperature.celsius}; Temp in K: ${temperature.kelvin}`);
