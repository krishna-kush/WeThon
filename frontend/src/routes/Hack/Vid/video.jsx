import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const VideoComponent = () => {
  const [stream, setStream] = useState(null);
  const [mySocketId, setMySocketId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const userVideoRef = useRef();
  const peerVideoRefs = useRef({});

  useEffect(() => {
    const socket = io("http://localhost:4000"); // Replace with your server URL

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        userVideoRef.current.srcObject = currentStream;
      });

    socket.on("me", (socketId) => {
      setMySocketId(socketId);
    });

    socket.on("admin", () => {
      setIsAdmin(true);
    });

    socket.on("userConnected", (user) => {
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    socket.on("userDisconnected", (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const callUser = (userId) => {
    const peer = new RTCPeerConnection();

    stream.getTracks().forEach((track) => peer.addTrack(track, stream));

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("callUser", {
          userToCall: userId,
          signalData: event.candidate,
          from: mySocketId,
        });
      }
    };

    peer.onnegotiationneeded = () => {
      peer.createOffer()
        .then((offer) => peer.setLocalDescription(offer))
        .then(() => {
          socket.emit("callUser", {
            userToCall: userId,
            signalData: peer.localDescription,
            from: mySocketId,
          });
        });
    };

    peer.ontrack = (event) => {
      if (!peerVideoRefs.current[userId]) {
        peerVideoRefs.current[userId] = React.createRef();
      }
      peerVideoRefs.current[userId].current.srcObject = event.streams[0];
    };

    return peer;
  };

  return (
    <div>
      {isAdmin && <video ref={userVideoRef} autoPlay muted className="border-2 border-red-500 w-full" />}
      {!isAdmin && (
        <>
          <video ref={userVideoRef} autoPlay className="border-2 border-red-500" />
          <p>My Socket ID: {mySocketId}</p>
        </>
      )}
      <div>
        <h3>Users in Stream:</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name || user.id}</li>
          ))}
        </ul>
      </div>
      {isAdmin && (
        <button onClick={() => callUser("userId")}>Call User</button>
      )}
    </div>
  );
};

export default VideoComponent;
