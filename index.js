const token = '2680525110f80b68ca5b09113dc3e5fbcf2575cb'

fetch('https://api.github.com/repos/jquery/jquery/commits', {
	headers: {
		Authorization: `token ${token}`
	}
})
	.then(res => res.json())
	.then(json => console.log(json));