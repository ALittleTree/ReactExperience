import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Demo1 from './reactDemo/demo1'
import Demo2 from './reactDemo/demo2'
import Demo3 from './reactDemo/demo3'
import Demo4 from './reactDemo/demo4'
import Demo5 from './reactDemo/demo5'
import Demo6 from './reactDemo/demo6'
import Demo7 from './reactDemo/demo7'
import Demo10 from './reactDemo/demo10'
import Demo8 from './reactDemo/demo8'
import Demo9 from './reactDemo/demo9'
ReactDOM.render(< App />, document.getElementById('root'));
ReactDOM.render(< Demo1 />, document.getElementById('demo1'));
ReactDOM.render(< Demo2 />, document.getElementById('demo2'));
ReactDOM.render(< Demo3 />, document.getElementById('demo3'));
ReactDOM.render(< Demo4 name='hcliu' />, document.getElementById('demo4'));
ReactDOM.render(<Demo5><span>hello</span><span>world</span></Demo5>, document.getElementById('demo5'));
ReactDOM.render(< Demo6 />, document.getElementById('demo6'));//don't know why?
ReactDOM.render(< Demo7 />, document.getElementById('demo7'));
ReactDOM.render(< Demo10 />, document.getElementById('demo10'));
ReactDOM.render(< Demo8 />, document.getElementById('demo8'));
ReactDOM.render(< Demo9 />, document.getElementById('demo9'));
registerServiceWorker();