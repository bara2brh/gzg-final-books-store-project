
const initializeBooksInStorage = () => {
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(books));
    }
};

const getBooksFromStorage = () => JSON.parse(localStorage.getItem('books'));

const updateBookInStorage = (updatedBook) => {
    const allBooks = getBooksFromStorage();
    const bookIndex = allBooks.findIndex(book => book.id === updatedBook.id);
    if (bookIndex !== -1) {
        allBooks[bookIndex] = updatedBook;
        localStorage.setItem('books', JSON.stringify(allBooks));
    }
};

// Toggle read status
const toggleRead = (bookId) => {
    const books = getBooksFromStorage();
    const book = books.find(book => book.id === bookId);
    if (book) {
        book.isRead = !book.isRead;
        updateBookInStorage(book);
    }
};

// Toggle favorite status
const toggleFavorite = (bookId) => {
    const books = getBooksFromStorage();
    const book = books.find(book => book.id === bookId);
    if (book) {
        book.isFavorite = !book.isFavorite;
        updateBookInStorage(book);
    }
};

// Display book details
const displayBookDetails = (book) => {
    const bookImg = document.querySelector('.book-img img');
    const bookTitle = document.getElementById('book-title');
    const bookDescription = document.querySelector('.book-description');
    const publisherName = document.getElementById('publisher-name').querySelector('span');
    const publishingDate = document.getElementById('publishing-date').querySelector('span');
    const isbn = document.getElementById('isbn').querySelector('span');
    const language = document.getElementById('laguage').querySelector('span');
    const addReadButton = document.getElementById('add-read');
    const addFavoriteButton = document.getElementById('add-favorite');

   
    bookImg.src = book.img;
    bookImg.alt = book.name;
    bookTitle.textContent = book.name;
    bookDescription.textContent = book.description;
    publisherName.textContent = book.author;
    publishingDate.textContent = book.publishDate;
    isbn.textContent = book.isbn;
    language.textContent = book.language;

    addReadButton.innerHTML = `<i class="fa-duotone fa-solid fa-books"></i><span>${book.isRead ? 'Mark as Unread' : 'Add to Read'}</span>`;
    addFavoriteButton.innerHTML = `<i class="${book.isFavorite ? 'fa-regular fa-heart-circle-minus' : 'fa-regular fa-heart-circle-plus'}"></i><span>${book.isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}</span>`;

    addReadButton.onclick = () => {
        toggleRead(book.id);
        displayBookDetails(getBooksFromStorage().find(b => b.id === book.id)); 
    };

    addFavoriteButton.onclick = () => {
        toggleFavorite(book.id);
        displayBookDetails(getBooksFromStorage().find(b => b.id === book.id)); 
    };
};

// Initialize books and display the first book on load
document.addEventListener('DOMContentLoaded', () => {
    initializeBooksInStorage();
    const booksFromStorage = getBooksFromStorage();
    if (booksFromStorage.length > 0) {
        displayBookDetails(booksFromStorage[0]); // Display the first book
    }
});


