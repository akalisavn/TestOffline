import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

const store = configureStore();
const rnredux = () => {
    <Provider>
        <App />
    </Provider>
}

AppRegistry.registerComponent('TestOffline', () => rnredux);
