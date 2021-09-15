const express = require('express');


// Create an app
const app = express();
app.get('/search/', (req, res) => {
	res.set('Content-Type', 'text/html');
	res.send(`
		<html>
		<head></head>
		<body>
			<script>
				const url = new URL(window.location.href);
				const terms = url.searchParams.get('terms');
				document.write('You searched for ' + terms);
			</script>
		</body>
		</html>
		`);
});

const PORT = 8080;
app.listen(8080, () => console.log(`Server running on port ${PORT}`));

