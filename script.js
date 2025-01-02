let library = []

function Books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(title, author, pages) {
    const newBook = { title: title, author: author, pages: pages };
    library.push(newBook);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

function filterBooks(library, pages) {
    return library.filter(book => book.pages <= 100)
    }


addBook("Six of Crows", "Leigh Bardugo", 862);
addBook("Green Eggs and Ham", "Dr. Suess", 30);
addBook("The Lord of The Rings", "J.R.R. Tolkien", 1053)
const pagesLessThan = filterBooks(library)
console.log(pagesLessThan)
console.log(searchByTitle("lord"))
console.log(searchByAuthor("dr"))
console.log(library)