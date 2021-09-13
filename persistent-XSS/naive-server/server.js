const express = require('express');
const { getUserPage } = require('./userpage.js');

// Create an app
const app = express();
app.get('/:userid', (req, res) => {
	const userid = req.params.userid;
	const userPage = getUserPage(userid);
	res.set('Content-Type', 'text/html');
	res.send(userPage);
});

const PORT = 8080;
app.listen(8080, () => console.log(`Server running on port ${PORT}`));

