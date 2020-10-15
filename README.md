# candy-dispenser
Resources for 3D printed candy dispenser

## Overview

#### cad
- Contains files for 3d printing of dispenser parts
- Yes, I use blender as CAD software SmileW

#### arduino
- Contains [PlatformIO](https://platformio.org/) project
- Hosts websocket server
- Responsible for driving stepper motor

#### trigger
- Websocket client
- Sends data to trigger dispenser mechanism
- Uses [ml5.js](https://ml5js.org/) and [Teachable Machine](https://teachablemachine.withgoogle.com/)
