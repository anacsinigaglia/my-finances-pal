import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
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
