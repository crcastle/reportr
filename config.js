module.exports =  {
	/* Debug mode */
	"debug": true,

	/* Server configuration */
	"web": {
		/* (string) Hostname for the application */
		"host": "track.crc.io",

		/* (boolean) Secure https mode */
		"secure": false,

		/* (int) TCP server port */
		"port": process.env.PORT || 5000
	},

	/* Database configuration */
	"database": {
		"url": process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/reportr'
	},
};
