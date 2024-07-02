// Functions
function Books(title, author, publicationDate, pages){
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = parseInt(pages);
}

Books.prototype.display = function() {
    console.log( this.title, this.author, this.publicationDate, this.pages);
}

function searchBook(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function addDetails(newLibrary) {
    return newLibrary.map(book => {
     return new Books ("Title: " + book.title, ", Author: " + book.author, ", Publication Date: " + book.publicationDate, ", Page Count:" + parseInt(book.pages));
        }
    )
};

function shortBooks (shortLibrary){
    return shortLibrary.filter (book => book.pages > 100);
}



//assinging to Books 
let theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", "1937", 311);
let animalFarm = new Books("Animal Farm", "George Orwell", "1945", 99);
let theArtofWar= new Books("The Art of War", "Sun Tzu", "2005", 270);

//Display Books
theHobbit.display();
animalFarm.display();
theArtofWar.display();

// Initiate array
let library = [];
let shortlibary = [];


// Push to Library array
library.push(theHobbit);
library.push(animalFarm);
library.push(theArtofWar);

//display library
console.log(library);

//display pages less than 100
console.log(shortBooks(library))

let updatedLibrary = addDetails(library);
updatedLibrary.forEach(book => book.display());

let updateshortlibrary = shortBooks(library);
updateshortlibrary.forEach(book => book.display())