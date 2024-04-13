import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const UserPage = () => {
  const [isAdminStreaming, setIsAdminStreaming] = useState(false);
  const peerVideoRef = useRef();

  useEffect(() => {
    const socket = io("http://localhost:4000"); // Replace with your server URL

    socket.on("admin-stream", (data) => {
      setIsAdminStreaming(true);
      handleIncomingCall(data.signal);
    });

    socket.on("admin-disconnected", () => {
      setIsAdminStreaming(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleIncomingCall = (signalData) => {
    const peer = new RTCPeerConnection();

    peer.onaddstream = (event) => {
      peerVideoRef.current.srcObject = event.stream;
    };

    peer.setRemoteDescription(new RTCSessionDescription(signalData));

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("answer", event.candidate);
      }
    };

    peer.createAnswer()
      .then((answer) => peer.setLocalDescription(answer))
      .then(() => {
        socket.emit("answer", peer.localDescription);
      });
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