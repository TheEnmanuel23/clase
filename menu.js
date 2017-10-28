var page = require('page')

var menu = `
	<nav>
		<ul>
			<li><a href="/lista">Lista</a></li>
		</ul>
	</nav>
`

var header = document.querySelector('header')
header.innerHTML = menu