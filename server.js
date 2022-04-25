const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('../views/home')
});

app.get('/pecas', (req, res) => {
    res.render('../views/pecas')
});

app.get('/pecas/placamae', (req, res) => {
    res.render('../views/pecas/placamae')
});

app.get('/pecas/placadevideo', (req, res) => {
    res.render('../views/pecas/placavideos')
});

app.get('/pecas/fonte', (req, res) => {
    res.render('../views/pecas/fonte')
});

app.get('/pecas/cooler', (req, res) => {
    res.render('../views/pecas/cooler')
});

app.get('/pecas/gabinete', (req, res) => {
    res.render('../views/pecas/gabinete')
});

app.get('/pecas/processador', (req, res) => {
    res.render('../views/pecas/processador')
})

app.get('/pecas/memoriaram', (req, res) => {
    res.render('../views/pecas/RAM')
});

app.get('/pecas/ssd', (req, res) => {
    res.render('../views/pecas/SSD')
})

app.get('/pecas/monitor', (req, res) => {
    res.render('../views/pecas/monitor')
})

app.get('/pecas/perifericos', (req, res) => {
    res.render('../views/pecas/perifericos')
})


app.get('/about', (req, res) => {
    res.render('../views/about')
});

app.listen('2000', () => console.log('Deu certo'));