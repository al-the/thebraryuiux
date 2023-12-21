// Function to parse CSV data and create book catalog
function parseCSV(csv) {
    const lines = csv.split('\n');
    const catalog = [];

    for (let i = 1; i < lines.length; i++) {
        const [title, author, image] = lines[i].split(',');

        if (title && author && image) {
            catalog.push({ title, author, image });
        }
    }

    return catalog;
}

// Function to display book catalog
function displayCatalog(catalog) {
    const catalogContainer = document.getElementById('book-catalog');

    catalog.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const image = document.createElement('img');
        image.src = book.image;

        const title = document.createElement('p');
        title.classList.add('book-title');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('book-author');
        author.textContent = book.author;

        bookDiv.appendChild(image);
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);

        catalogContainer.appendChild(bookDiv);
    });
}

// Sample CSV data (replace with your actual CSV data)
const csvData = `Title,Author,Image
Book 1,Author 1,book1.jpg
Book 2,Author 2,book2.jpg
Book 3,Author 3,book3.jpg
`;

// Parse CSV data and display the catalog
const catalog = parseCSV(csvData);
displayCatalog(catalog);
