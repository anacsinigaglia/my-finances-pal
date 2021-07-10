import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api'; //api = word that miragejs will respond to
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date(),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
