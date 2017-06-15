import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Demo1 from './reactDemo/demo1'
import Demo2 from './reactDemo/demo2'
import Demo3 from './reactDemo/demo3'

ReactDOM.render( < App / > , document.getElementById('root'));
ReactDOM.render( < Demo1 / > , document.getElementById('demo1'));
ReactDOM.render( < Demo2 / > , document.getElementById('demo2'));
ReactDOM.render( < Demo3 / > , document.getElementById('demo3'));
registerServiceWorker();