var page = require('page')

var menu = `
	<nav>
		<ul>
			<li><a href="/lista">Lista</a></li>
			<li><a href="/login">Login</a></li>
		</ul>
	</nav>
`

var header = document.querySelector('header')
header.innerHTML = menu