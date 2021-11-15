import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';

class App extends React.PureComponent {
  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={LayoutComponent}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>

    );
  }
}

export default App;
