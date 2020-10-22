import panels from './panels';
import persistence from './persistence';
import connection from './connection';
import dispense from './dispense';
const log = console.log;
var webSocket;

panels();
persistence();
connection(webSocket);
dispense(webSocket);