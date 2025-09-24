const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

// Configuração do middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'sua-chave-secreta-aqui', // Substitua por uma chave secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // Cookie válido por 24 horas
}));

// Configuração do EJS como template engine
app.set('view engine', 'ejs');
app.set('views', './views');


// URL da API externa
const API_URL = 'http://localhost:8080';

// Middleware para verificar autenticação e definir seção
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated || false;
    res.locals.user = req.session.user || { username: 'Usuário', email: null };
    res.locals.section = req.query.section || 'profile'; // Define a seção com base no parâmetro de query
    next();
});

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await axios.post(`${API_URL}/api/login`, { email, password });
        if (response.data.success) {
            req.session.isAuthenticated = true;
            req.session.user = { username: email.split('@')[0], email, token: response.data.token };
            res.redirect('/dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error('Erro ao chamar API de login:', error.message);
        res.redirect('/login');
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const response = await axios.post(`${API_URL}/api/register`, { username, email, password });
        if (response.data.success) {
            req.session.isAuthenticated = true;
            req.session.user = { username, email, token: null };
            res.redirect('/dashboard');
        } else {
            res.redirect('/register');
        }
    } catch (error) {
        console.error('Erro ao chamar API de registro:', error.message);
        res.redirect('/register');
    }
});

app.get('/dashboard', (req, res) => {
    if (req.session.isAuthenticated) {
        res.render('dashboard');
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao encerrar sessão:', err);
        }
        res.redirect('/');
    });
});

// Rota para salvar alterações de perfil
app.post('/update-profile', (req, res) => {
    if (req.session.isAuthenticated) {
        req.session.user.username = req.body.username;
        req.session.user.email = req.body.email;
        res.redirect('/dashboard?section=profile');
    } else {
        res.redirect('/login');
    }
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/smartwallet', (req, res) => {
    res.render('smartwallet');
});

app.get('/smartnode', (req, res) => {
    res.render('smartnode');
});

app.get('/smartcontract', (req, res) => {
    res.render('smartcontract');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});