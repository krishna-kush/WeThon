import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const UserPage = () => {
  const [isAdminStreaming, setIsAdminStreaming] = useState(false);
  const peerVideoRef = useRef();
  const userVideoRef = useRef();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:4000"); // Replace with your server URL

    socket.current.on("admin-stream", (data) => {
      setIsAdminStreaming(true);
      handleIncomingCall(data.signal, data.adminSocketId);
    });

    socket.current.on("admin-disconnected", () => {
      setIsAdminStreaming(false);
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        userVideoRef.current.srcObject = currentStream;
      });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleIncomingCall = (signalData, adminSocketId) => {
    const peer = new RTCPeerConnection();

    peer.onaddstream = (event) => {
      peerVideoRef.current.srcObject = event.stream;
    };

    peer.setRemoteDescription(new RTCSessionDescription(signalData));

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current.emit("answer", {
          signal: event.candidate,
          to: adminSocketId,
        });
      }
    };

    peer.createAnswer()
      .then((answer) => peer.setLocalDescription(answer))
      .then(() => {
        socket.current.emit("answer", {
          signal: peer.localDescription,
          to: adminSocketId,
        });
      });
  };

  const startStream = () => {
    socket.current.emit("start-stream");
  };

  return (
    <div>
      {isAdminStreaming ? (
        <video ref={peerVideoRef} autoPlay className="border-2 border-red-500" />
      ) : (
        <p>Stream not started</p>
      )}
      <video ref={userVideoRef} autoPlay muted className="border-2 border-red-500" />
      <button onClick={startStream}>Start Stream</button>
    </div>
  );
};

export default UserPage;