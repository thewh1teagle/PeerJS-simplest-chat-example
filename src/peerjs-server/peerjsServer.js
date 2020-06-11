const { PeerServer } = require('peer');


port = 9000
path = "/myapp"

const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
const peerServer = PeerServer({
    port: port,
    path: path,
    generateClientId: customGenerationFunction
});
console.log(`Server started at localhost:${port}${path}`)