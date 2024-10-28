const getRandomBooks = (count) => {
    const shuffledBooks = books.sort(() => 0.5 - Math.random());
    return shuffledBooks.slice(0, count);
};

const displayRecommendedBooks = () => {
    const recommendedBooksContainer = document.querySelector('.recommended-books');
    recommendedBooksContainer.innerHTML = ''; // Clear existing content

    const randomBooks = getRandomBooks(5);

    randomBooks.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
        `;

        recommendedBooksContainer.appendChild(bookDiv);
    });
};

document.addEventListener('DOMContentLoaded', displayRecommendedBooks);
