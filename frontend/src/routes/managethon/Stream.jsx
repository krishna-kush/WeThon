import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Stream = () => {
  const [stream, setStream] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const userVideoRef = useRef();
  const peerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (peerRef.current) {
        peerRef.current.close();
      }
      socket.emit("stop-stream");
    };
  }, []);

  const startStreaming = async () => {
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(currentStream);
      userVideoRef.current.srcObject = currentStream;

      const peer = new RTCPeerConnection();
      peerRef.current = peer;

      currentStream.getTracks().forEach((track) => peer.addTrack(track, currentStream));

      peer.onicecandidate = (event) => {
        console.log('11')
        if (event.candidate) {
          console.log('l2')
          socket.emit("start-stream", { signal: event.candidate });
        }
      }; 

      peer.onnegotiationneeded = async () => {
        try {
          const offer = await peer.createOffer();
          await peer.setLocalDescription(offer);
          socket.emit("start-stream", { signal: peer.localDescription });
          socket.emit("admin-connected"); // Emit admin-connected event when streaming starts
        } catch (error) {
          console.error("Error creating offer:", error);
        }
      };

      setIsStreaming(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopStreaming = () => {
    setIsStreaming(false);
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    if (peerRef.current) {
      peerRef.current.close();
      peerRef.current = null;
    }
    socket.emit("stop-stream");
  };

  return (
    <div className="text-white border-red-500 border-2">
      <div className="w-[70%] h-[70vh] bg-contain mx-auto p-2">
        <video ref={userVideoRef} autoPlay muted className="border-2 border-red-500 w-full" />
      </div>
      <div className="flex w-2/3 items-center mx-auto border-2 border-white p-3">
        {isStreaming ? (
          <button
            onClick={stopStreaming}
            className="bg-red-500 p-3 rounded-md shadow-md shadow-red-200 hover:bg-red-400 text-xl font-semibold"
          >
            Stop Streaming
          </button>
        ) : (
          <button
            onClick={startStreaming}
            className="bg-green-500 p-3 rounded-md shadow-md shadow-green-200 hover:bg-green-400 text-xl font-semibold"
          >
            Start Streaming
          </button>
        )}
      </div>
    </div>
  );
};

export default Stream;
