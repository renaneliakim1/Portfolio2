document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1pyyK7hzSKM7ey2omYfNJglU3pESlZjgE';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
