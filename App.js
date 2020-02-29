import React from 'react';
import AppMain from './srcs/Navigator/Navigator';
import {Provider} from 'react-redux';
import store from './srcs/Redux/Store/Index';

const App = () => {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

export default App;
