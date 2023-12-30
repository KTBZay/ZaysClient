const {wizard} = require("zaysclient")

wizard.settings.enableAllLogs = true;

const client = new wizard.ZaysClient();

client.get(url);