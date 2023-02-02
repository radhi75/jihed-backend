const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
const cors = require('cors');
// const NodeMediaServer = require('node-media-server');
// const RtspServer = require('node-rtsp-rtmp-server');
//webSocket configuration
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: app }); 


const {PosteRouter}=require("./Router/PosteRouter");


const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};


app.use(cors({
  origin:'http://localhost:3000', 
  credentials:false,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}));



wss.on('connection', (ws) => {
    ws.send('Hello, client!');
});



app.use('/',PosteRouter)



module.exports = app