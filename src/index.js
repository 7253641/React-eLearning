import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import configureStore from './configureStore';

const theme = createMuiTheme();
const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
