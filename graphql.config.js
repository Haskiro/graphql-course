// {
// 	"name": "GraphQL Schema",
// 	"schemaPath": "schema.json",
// 	"extensions": {
// 		"endpoints": {
// 			"Default GraphQL Endpoint": {
// 				"url": "https://funded-pet-library.moonhighway.com",
// 				"headers": {
// 					"user-agent": "JS GraphQL"
// 				},
// 				"introspect": true
// 			}
// 		}
// 	}
// }

module.exports = {
	projects: {
		app: {
			schema: ["schema.json"],
			documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
			extensions: {
				endpoints: {
					default: {
						url: "https://funded-pet-library.moonhighway.com",
						headers: {
							"user-agent": "JS GraphQL",
						},
						introspect: true,
					},
				},
			},
		},
	},
};
