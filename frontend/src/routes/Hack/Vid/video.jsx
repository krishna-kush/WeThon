import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const UserPage = () => {
  const [isAdminStreaming, setIsAdminStreaming] = useState(false);
  const [peerConnection, setPeerConnection] = useState(null);
  const peerVideoRef = useRef();
  const userVideoRef = useRef();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:4000");

    socket.current.on("admin-stream", (data)=>handleAdminStream(data));
    socket.current.on("stream-start", (data)=>handleStreamAnswer(data)); // Listen for stream-answer event

    return cleanupResources;
  }, []);

  const handleAdminStream = (data) => {
    console.log("in admin");
    setIsAdminStreaming(true);
    if (!peerConnection) {
      console.log("creating connection");
      createPeerConnection();
    }
    console.log("signal set");
    setRemoteDescription(data); // Pass signal directly, no need to extract signal
  };

  const handleStreamAnswer = async (data) => {
    console.log("Received stream answer from admin");
    try {
      console.log(data.signal)
      await peerConnection.setRemoteDescription(new RTCSessionDescription(data.signal));
    } catch (error) {
      console.error("Error setting remote description:", error);
    }
  };

  
  const handleTrackEvent = (event) => {
    peerVideoRef.current.srcObject = event.streams[0];
    };

  const createPeerConnection = () => {
    const newPeerConnection = new RTCPeerConnection();
    console.log("created connection");
    newPeerConnection.ontrack = handleTrackEvent;
    setPeerConnection(newPeerConnection);
  };
  
  const setRemoteDescription = (signalData) => {
    try {
      if (peerConnection) {
        console.log("Setting remote description...");
        peerConnection.setRemoteDescription(new RTCSessionDescription(signalData));
        createAnswer();
      } else {
        console.error("Peer connection is null. Cannot set remote description.");
      }
    } catch (error) {
      console.error("Error setting remote description:", error);
    }
    };

  const createAnswer = async () => {
    try {
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.current.emit("stream-answer", { signal: answer }); // Send answer to admin
    } catch (error) {
      console.error("Error creating answer:", error);
    }
  };

  const cleanupResources = () => {
    if (peerConnection) {
      peerConnection.ontrack = null;
      peerConnection.close();
      setPeerConnection(null);
    }
  };

  return (
    <div>
      {isAdminStreaming ? (
        <video ref={peerVideoRef} autoPlay className="border-2 border-red-500" />
      ) : (
        <p>Stream not started</p>
      )}
    </div>
  );
};

export default UserPage;