import $ from 'jquery';
import Panel from './Panel'

class ConnectionPanel extends Panel {
    connectButton: HTMLElement;
    webSocket: WebSocket;
    webSocketAddress: string;
    constructor () {
        super('connectionPanel', 'connectionTrigger');

        this.connectButton = document.getElementById('webSocketConnect');
        $(this.connectButton).on('click', () => this.connect());

        $(this.webSocket).on('open', () => {
            $('#webSocketState').text('connected');
        });
        $(this.webSocket).on('close', () => {
            $('#webSocketState').text('disconnected');
        });
    }
    connect() {
        // close connection if already connected
        if (this.webSocket) { this.webSocket.close() }

        // load setting from storage
        this.webSocketAddress = localStorage.getItem('webSocketAddress');
        if (this.webSocketAddress) {
            // connect
            this.webSocket = new WebSocket(this.webSocketAddress);
        } else { alert('ERROR: no address provided'); return; }
    }
}

export default ConnectionPanel