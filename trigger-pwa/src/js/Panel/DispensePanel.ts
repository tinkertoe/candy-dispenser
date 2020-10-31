import $ from 'jquery';
import Panel from './Panel'

class DispensePanel extends Panel {
    dispenseButton: HTMLElement;
    constructor() {
        super('dispensePanel', 'dispenseTrigger');

        this.dispenseButton = document.getElementById('dispenseButton');
        $(this.dispenseButton).on('click', () => {
            let w = <any>window;
            if (w.connectionPanel.webSocket) {
                w.connectionPanel.webSocket.send('.');
            } else {
                alert('ERROR: Websocket not connected!');
            }
        })

    }
}

export default DispensePanel