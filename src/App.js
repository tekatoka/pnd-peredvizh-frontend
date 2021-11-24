import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.scss';
import LayoutComponent from './components/Layout/Layout';


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
