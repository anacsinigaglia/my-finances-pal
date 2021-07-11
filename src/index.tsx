import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-07-10 23:12:55'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-07-05 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api'; //api = word that miragejs will respond to in the routes
    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody);
      return schema.create('transaction', data); //(model name, dados)
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
