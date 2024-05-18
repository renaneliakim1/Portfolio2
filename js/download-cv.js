document.getElementById('downloadButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que o link seja seguido de forma padrão
  
    // URL do arquivo PDF no Google Drive para download direto
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1g7BZXV0d6oLUtJ--7V5lGa6OXelhvn8Y';
    
    // Cria um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo.pdf'; // Nome do arquivo que será baixado
    
    // Adiciona o link ao DOM
    document.body.appendChild(link);
    
    // Simula o clique no link
    link.click();
    
    // Remove o link do DOM
    document.body.removeChild(link);
  });
  