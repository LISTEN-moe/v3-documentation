docute.init({
	url: '.',
	debug: true,
	nav: {
		default: [
			{
				title: 'Home',
				path: '/'
			},
			{
				title: 'API',
				type: 'dropdown',
				items: [
					{
						title: 'Auth',
						path: '/api/auth'
					},
					{
						title: 'Favorites',
						path: '/api/favorites'
					},
					{
						title: 'Requests',
						path: '/api/requests'
					},
					{
						title: 'Users',
						path: '/api/users'
					},
					{
						title: 'Websocket',
						path: '/api/websocket'
					}
				]
			}
		]
	}
});
