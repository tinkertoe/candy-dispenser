import Persistence from './Persistence';
import ConnectionPanel from './Panel/ConnectionPanel'
import SpeechPanel from './Panel/SpeechPanel'
import DispensePanel from './Panel/DispensePanel'

let w = <any>window;

w.persistence = new Persistence();
w.connectionPanel = new ConnectionPanel();
w.speechPanel = new SpeechPanel();
w.dispensePanel = new DispensePanel();