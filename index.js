

fetch('https://api.github.com/repos/jquery/jquery/commits', {
	headers: {
		Authorization: `token ${token}`
	}
})
	.then(res => res.json())
	.then(json => console.log(json));