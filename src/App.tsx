import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import HomePage from './Pages/HomePage';
import {store} from './store/index';


const App: React.FC = () => (
  <React.StrictMode>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </React.StrictMode>
);
export default App;
