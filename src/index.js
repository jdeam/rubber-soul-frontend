import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD

ReactDOM.render(<App />, document.getElementById('root'));
=======
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
>>>>>>> header-footer
