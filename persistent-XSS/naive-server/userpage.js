function loadUserVariables(userid) {

	const userVariables = {}

	if (userid.toLowerCase() == 'mallory') {
		userVariables.name = '</div><script>document.location="http://localhost:8081/"</script><div>';
	}
	else {
		userVariables.name = userid;
	}

	return userVariables
};

function getUserPage(userid) {
	userVariable = loadUserVariables(userid)
	return `
	<html>
		<head>
		</head>
		<body>
			<div>
		 	Page of the user: ${userVariable.name}
			</div>
		</body>
	</html>
	`
};

module.exports = { getUserPage };
