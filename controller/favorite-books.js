const getFavoriteBooksFromStorage = () => {
    const books = getBooksFromStorage();
    // Only favorite books
    return books.filter(book => book.isFavorite); 
};

const displayFavoriteBooks = () => {
    const readedBookContainer = document.querySelector('.favorite-books');
    readedBookContainer.innerHTML = ''; 

    const favoriteBooks = getFavoriteBooksFromStorage();

    if (favoriteBooks.length === 0) {
        readedBookContainer.innerHTML = '<p>No favorite books added yet, Go and add some books !</p>';
        return;
    }

    favoriteBooks.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <button class="remove-favorite-button"><i class="fa-regular fa-heart-circle-minus"></i> Remove from Favorite</button>
        `;

       
        const removeFavoriteButton = bookDiv.querySelector('.remove-favorite-button');
        removeFavoriteButton.addEventListener('click', () => {
            toggleFavorite(book.id);
            displayFavoriteBooks();
        });

        readedBookContainer.appendChild(bookDiv);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initializeBooksInStorage(); 
    displayFavoriteBooks(); 
});
