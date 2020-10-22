const $ = require('jquery');

export default (webSocket) => {
    $('#disp').on('click', () => {
        if (webSocket && webSocket.readyState === 1) {
            webSocket.send('.');
        } else {
            alert('No websocket connection!')
        }
    })
};