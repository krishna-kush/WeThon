import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); 
const Stream = () => {
  const [stream, setStream] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const userVideoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        userVideoRef.current.srcObject = currentStream;
      });

    socket.on("disconnect", () => {
      socket.disconnect();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startStreaming =async () => {
    setIsStreaming(true);
    console.log(socket)
    const peer = new RTCPeerConnection();

    await stream.getTracks().forEach((track) => peer.addTrack(track, stream));

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("callUser", event.candidate);
      }
    };

    peer.onnegotiationneeded = () => {
      peer.createOffer()
        .then((offer) => peer.setLocalDescription(offer))
        .then(() => {
          socket.emit("callUser", peer.localDescription);
        });
    };
  };

  const stopStreaming = () => {
    setIsStreaming(false);
    // Add code to stop streaming here
  };

  return (
    <div>
      <video ref={userVideoRef} autoPlay muted className="border-2 border-red-500 w-full" />
      {isStreaming ? (
        <button onClick={stopStreaming}>Stop Streaming</button>
      ) : (
        <button onClick={startStreaming}>Start Streaming</button>
      )}
    </div>
  );
};

export default Stream;