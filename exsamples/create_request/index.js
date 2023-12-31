const {ZayClient} = require("zaysclient")

const client = new ZayClient({
    enableAllLogs: true,
    DataUploading: false,
    leaveProcessOpen: false
});  
client.create(id,token);
