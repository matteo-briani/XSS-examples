const express = require('express');

function getResultPage(terms) {
	return `
	<html>
	<head></head>
	<body>
		<h1>
		Result page
		</h1>
		<div>
		You where looking for: ${terms}
		</div>
	</body>
	</html>
	`
}

// Create an app
const app = express();
app.get('/search', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.send(getResultPage(req.query.terms));
});

app.get('/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.send(`
		<html>
		<head></head>
		<body>
			<form action="/search/" method="get">
				<label for="terms">Enter query: </label>
				<input id="terms" type="text" name="terms" value="something">
				<input type="submit" value="OK">
			</form>
		</body>
		</html>
		`);
});

const PORT = 8080;
app.listen(8080, () => console.log(`Server running on port ${PORT}`));

