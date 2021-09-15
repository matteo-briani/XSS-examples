const express = require('express');

// Create an app
const app = express();
app.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.send('This text comes from a malicious server. It could ask and steal credentials.');
});

const PORT = 8081;
app.listen(8081, () => console.log(`Server running on port ${PORT}`));

