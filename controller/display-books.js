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
        displayBookDetails(book); 
    };

    addFavoriteButton.onclick = () => {
        toggleFavorite(book.id);
        displayBookDetails(book); 
    };
};



document.addEventListener('DOMContentLoaded', () => {
    if (books.length > 0) {
        displayBookDetails(books[0]); 
    }
});