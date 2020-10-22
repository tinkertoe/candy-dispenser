const $ = require('jquery');

export default (webSocket) => {
    $('#connect').on('click', () => {
        let addr = localStorage.getItem('addr'); // get websocket address from local storage
        if (addr) {
            if (webSocket) { webSocket.close(); } // close existing connection
            webSocket = new WebSocket(addr);
        } else {
            // display error when no address is provided
            alert('ERROR: You need to provide a valid websocket address!');
        } 
    });

    // update connection log
    setInterval(() => {
        if (webSocket) {
            switch (webSocket.readyState) {
                case 0:
                    $('#logs').text('connecting');
                    break;
    
                case 1:
                    $('#logs').text('open');
                    break;
            
                case 2:
                    $('#logs').text('closing');
                    break;
    
                case 3:
                    $('#logs').text('closed');
                    break;
    
                default:
                    $('#logs').text('');
                    break;
            }
        }
    }, 500);
};