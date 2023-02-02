import React, { useState, useEffect, useRef } from 'react';
import flvjs from 'flv.js';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function StreamPlayer({ streamPath }) {
    const streamKey = uuidv4();

    const [player, setPlayer] = useState(null);
    const videoRef = useRef(null); // here is the ref
    function publishStream(streamKey, streamPath) {
        axios.post('http://localhost:5500/publish', { streamKey, streamPath })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        if (!flvjs.isSupported()) {
            console.log("Your browser does not support flv.js");
            return;
        }

        // create the player
        const player = flvjs.createPlayer({
            type: 'flv',
            url: `rtmp://localhost:1935/${streamPath}`
        });
        player.attachMediaElement(videoRef.current);
        player.load();

        setPlayer(player);

        return () => {
            player.destroy();
        }
    }, [streamPath]);

    return (
        <div>
            {console.log(streamKey,'tttt')}
            <button onClick={() => publishStream(streamKey, streamPath)}>
  Publish
</button>
            <video ref={videoRef} controls={true} />
        </div>
    );
}

export default StreamPlayer;
