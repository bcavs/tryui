require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `TryUI`,
		description: `Learn to build UI, piece-by-piece`,
		author: `@gatsbyjs`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-171795823-1",
			},
		},
		{
			resolve: `gatsby-plugin-google-adsense`,
			options: {
				publisherId: `ca-pub-9551657672592083`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo@2x.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `is3qjjtq787t`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: `${process.env.CONTENTFUL_DELIVERY_API}`,
			},
		},

		// {
		// 	resolve: `gatsby-source-strapi`,
		// 	options: {
		// 		apiURL: process.env.API_URL,
		// 		queryLimit: 1000, // Default to 100
		// 		contentTypes: [`projects`],
		// 		//If using single types place them in this array.
		// 		// singleTypes: [`home-page`, `contact`],
		// 		// Possibility to login with a strapi user, when content types are not publically available (optional).
		// 		loginData: {
		// 			identifier: "",
		// 			password: "",
		// 		},
		// 	},
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
