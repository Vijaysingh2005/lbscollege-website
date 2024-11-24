// Get search input and sections
const searchInput = document.querySelector('.search-bar input');
const sections = document.querySelectorAll('.opportunities');

// Add event listener to search input
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();

  sections.forEach(section => {
    const schemes = section.querySelectorAll('.schemes li');
    const categories = section.querySelectorAll('.category li');

    schemes.forEach(scheme => {
      const schemeName = scheme.textContent.toLowerCase();
      if (schemeName.includes(searchTerm)) {
        scheme.style.display = 'block';
      } else {
        scheme.style.display = 'none';
      }
    });

    categories.forEach(category => {
      const categoryName = category.textContent.toLowerCase();
      if (categoryName.includes(searchTerm)) {
        category.style.display = 'block';
      } else {
        category.style.display = 'none';
      }
    });
  });
});

  
  
function showPdf(pdfUrl) {
  // Fetch the PDF file
  fetch(pdfUrl)
  .then(response => response.blob())
  .then(blob => {
      // Create a blob URL for the PDF
      const url = URL.createObjectURL(blob);
      
      // Display the PDF in the container
      const pdfContainer = document.getElementById('pdfContainer');
      // pdfContainer.innerHTML = `<embed src="${url}" type="application/pdf" width="100%" height="600px" />`;
      window.open(pdfUrl, '_blank');
  })
  .catch(error => {
      console.error('Error fetching PDF: ', error);
  });
}
