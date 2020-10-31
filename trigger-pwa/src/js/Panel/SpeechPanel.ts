import $ from 'jquery';
import Panel from './Panel'

class SpeechPanel extends Panel {
    API: any;
    recognition: any;
    listening: boolean;
    listenButton: HTMLElement;
    resultElement: HTMLElement;
    constructor() {
        super('speechPanel', 'speechTrigger')

        this.resultElement = document.getElementById('speechResult');

        this.listenButton = document.getElementById('speechListen');
        this.listening = false;
        $(this.listenButton).on('click', () => this.listen())

        this.API = window.SpeechRecognition || (window as any).webkitSpeechRecognition
        this.recognition = new this.API()
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        $(this.recognition).on('result', (e) => {
            var x: any = <any>e;
            var result: string = x.originalEvent.results['0']['0'].transcript;
            var phrase: string = window.localStorage.getItem('speechPhrase');
            if (result == phrase) {
                let w = <any>window;
                if (w.connectionPanel.webSocket) {
                    w.connectionPanel.webSocket.send('.');
                } else {
                    alert('ERROR: Websocket not connected!');
                }
            }
            $(this.resultElement).text(result)

        });
        $(this.recognition).on('end', () => this.recognition.start());
    }
    listen () {
        if (!this.listening) {
            this.listening = true;

            let lang = window.localStorage.getItem('speechLanguage');
            if (lang)   { this.recognition.lang = lang } 
            else        { this.recognition.lang = 'de-DE' };

            this.recognition.start();

            $(this.listenButton).text('stop');
        } else {
            window.location.reload();
        }
        
    }
}

export default SpeechPanel