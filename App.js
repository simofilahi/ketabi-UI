import React from 'react';
import AppMain from './srcs/Navigator/Navigator';
import {Provider} from 'react-redux';
import store from './srcs/Redux/Store/Index';
import io from 'socket.io-client';

var sokcet = (sokcet = io('http://192.168.1.6:1337'));
const App = () => {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

export default App;
