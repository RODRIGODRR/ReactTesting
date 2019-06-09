import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// aqui 1234567890
// simulando merge;
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

export default App;
