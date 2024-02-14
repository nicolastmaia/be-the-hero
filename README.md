# Be The Hero

This is a project developed as an exercise during **Rocketseat's 11th OmniStack Week** using NodeJS, React Native and ReactJS.  
Its purpose is to allow institutions to broadcast jobs that need to be done and for people to take on these jobs if they want.

<img height=350 src="https://github.com/nicolastmaia/be-the-hero/assets/45211638/c0879dc5-bc59-4fb0-a798-98217f982781"/>
<img height=350 src="https://github.com/nicolastmaia/be-the-hero/assets/45211638/6fffa14e-2400-4323-a106-74435661aab6"/>

&nbsp;

It consists of three folders: **backend**, **web**, and **mobile**.

- The backend part of the project is a NodeJS API server that receives and forwards requests to a MongoDB instance installed on the server machine and then creates responses for client apps (web or mobile);
- The web part is written in reactJS and is where the institutions register themselves;
- The mobile part shows the institutions in your area as pins on a map and allows you to select one to view more information and then open a card with some of its contact information.

## Requirements
- NodeJS version 12.22.12;
- If using an android emulator, use Android 8.1 (API 27);

## Running the project
1. Go to /mobile/services/api.js and change the 'baseUrl' constant to the IP address of the machine running the backend service;
2. Go to /backend, run `npm i` to install the dependencies and then run the server with the command `npm start`;
3. Go to /web, run `npm i` to install the dependencies and then run `npm start`;
4. Go to /mobile and run `npm i` to install the dependencies. Make sure you have an android device connected or an android emulator running,  run `npm start`, and then press 'a' to run it on the android device.
