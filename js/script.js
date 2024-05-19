document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email enviado com sucesso!');
        } else {
            alert('Erro ao enviar o email.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o email.');
    });
});
