const getReadedBooksFromStorage = () => {
  const books = getBooksFromStorage();
  // Only favorite books
  return books.filter((book) => book.isRead);
};

const displayReadedBooks = () => {
  const readedBooksContainer = document.querySelector(".readed-books");
  readedBooksContainer.innerHTML = "";

  const readedbooks = getReadedBooksFromStorage();

  if (readedbooks.length === 0) {
    readedBooksContainer.innerHTML =
      "<p>No Readed books added yet, Go and add some books !</p>";
    return;
  }

  readedbooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
          <img src="${book.img}" alt="${book.name}">
          <h3>${book.name}</h3>
          <p>${book.author}</p>
          <button class="remove-readed-button"><i class="fa-regular fa-heart-circle-minus"></i> Remove from Readed</button>
      `;

    const removeReadedButton = bookDiv.querySelector(".remove-readed-button");
    removeReadedButton.addEventListener("click", () => {
      toggleRead(book.id);
      displayReadedBooks();
    });

    readedBooksContainer.appendChild(bookDiv);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initializeBooksInStorage();
  displayReadedBooks();
});
