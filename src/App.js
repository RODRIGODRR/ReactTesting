import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// novos testes merge
class App extends Component {
  render() {
    return (
      <div>        
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
// novos testes merge

export default App;
