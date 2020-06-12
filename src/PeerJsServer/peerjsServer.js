const { PeerServer } = require('peer'); // npm install peer


port = 9000 // Our server port
path = "/myapp" // Our server path for the api



// This function will generate random id for each client
const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);

// Here we starting the server
const peerServer = PeerServer({ 
    port: port,
    path: path,
    generateClientId: customGenerationFunction
});
console.log(`Server started at localhost:${port}${path}`)