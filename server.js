import express from 'express';
const PORT = 8080;
const app = express();
app.use('/', express.static('dist'));
app.listen(PORT, () => console.log('Server running on port:', PORT));
