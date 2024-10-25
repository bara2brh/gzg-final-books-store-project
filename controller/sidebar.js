var menuItems = document.querySelectorAll('.menu-item');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        // Remove active class from all items
        for (var j = 0; j < menuItems.length; j++) {
            menuItems[j].classList.remove('active');
        }
        // Add active class to the item
        this.classList.add('active');
    });
}
