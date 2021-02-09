import React, {useContext, useState, useEffect} from 'react';
import {io} from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({id, children}) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocketConnection = io('http://192.168.43.216:8000', {
      query: {id},
    });
    setSocket(newSocketConnection);

    return () => newSocketConnection.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
