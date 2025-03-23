const app = require("../js/app");
const Log = require("../js/logger");

app.start().then((config) => {
	const port = process.env.PORT || config.port;
	const bindAddress = config.address || "0.0.0.0";

	config.port = port;
	config.address = bindAddress;

	const httpType = config.useHttps ? "https" : "http";

	Log.info(`\n>>>   Ready to go! Please point your browser to: ${httpType}://${bindAddress}:${port}   <<<`);
});
