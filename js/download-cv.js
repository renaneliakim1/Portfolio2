document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); 
      const pdfUrl = 'https://drive.google.com/uc?export=download&id=1g7BZXV0d6oLUtJ--7V5lGa6OXelhvn8Y';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo.pdf';
        document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
  });
  