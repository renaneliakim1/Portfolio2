const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email é obrigatório' });
    }

    // Configuração do transporter do Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com',
            pass: 'sua-senha'
        }
    });

    const mailOptions = {
        from: 'seu-email@gmail.com',
        to: 'renaneliakim1@gmail.com',
        subject: 'Contato Portfolio',
        text: `Você recebeu um novo email: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Erro ao enviar o email' });
        } else {
            return res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
