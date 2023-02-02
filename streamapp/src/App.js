import './App.css';
import React, { useState, useEffect  } from 'react';
import Hls from 'react-hls';
import StreamPlayer from './stramplayer';
import axios from 'axios';
function App() {
  const [streams, setStreams] = useState([]);
  const [currentStreamUrl, setCurrentStreamUrl] = useState('');

  useEffect(() => {
      axios.get('http://localhost:5500/streams')
          .then(res => res.json())
          .then(data => setStreams(data))
          .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {console.log(currentStreamUrl)}
      <div>
          {streams.map(stream => (
              <div key={stream.id}>
                  <h2>{stream.StreamPath}</h2>
                  <button onClick={() => setCurrentStreamUrl(`rtmp://localhost:1935/${stream.StreamPath}`)}>
                      Play
                  </button>
              </div>
          ))}
          <Hls
              url={currentStreamUrl}
              autoplay={true}
          />
      </div>
      <StreamPlayer streamPath={currentStreamUrl} />

      </div>
  );
}

export default App;
