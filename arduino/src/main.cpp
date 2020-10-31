#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <WebSocketsServer.h>
#include <CheapStepper.h>

CheapStepper stepper (5,4,14,2); 
WebSocketsServer webSocket = WebSocketsServer(81);

bool dispening = false;

const char* ssid = "candy-dispenser";
const char* password = "github78";

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  switch (type) {

    case WStype_DISCONNECTED: {
      Serial.printf("> [%u] disconnect\n", num);
    }
    break;
    
    case WStype_CONNECTED: {
      Serial.printf("> [%u] connect\n", num);
    }
    break;

    case WStype_TEXT: {
      String str = (char*)payload;

      Serial.println(str);
      if (str == "." && dispening == false)
      {
        dispening = true;
      }
    }
    break;

    default:
      break;
  }
}

void setupWebSocket() {
  Serial.println("> setting up websocket");

  WiFi.softAP(ssid, password);
  Serial.print("> access point ip: ");
  Serial.println(WiFi.softAPIP());
  
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
}

void setupStepper() {
  Serial.println("> setting up stepper motor");
  stepper.setRpm(12);
}

void setup() {
  Serial.begin(9600);
  Serial.setDebugOutput(true);

  Serial.println("> i'm alive");

  setupStepper();
  setupWebSocket();
}

void loop() {
  webSocket.loop();
  // stepper.moveDegrees(true, 90);
  // delay(1000);
  if (dispening)
  {
    dispening = false;
    Serial.printf("> dispense\n");
    stepper.moveDegrees(true, 90);

    delay(100);

    stepper.stop();

    delay(100);

    digitalWrite(5, LOW);
    digitalWrite(4, LOW);
    digitalWrite(14, LOW);
    digitalWrite(2, LOW);

    delay(500);
    
    digitalWrite(5, LOW);
    digitalWrite(4, LOW);
    digitalWrite(14, LOW);
    digitalWrite(2, LOW);
  }
  
}