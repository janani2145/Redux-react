
import './App.css';
import { ComponentAdd } from './ComponentAdd';
import { CustomerView } from './CustomerView';
import {Provider} from 'react-redux';
import {store} from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <h1>Redux Todo list</h1>
  <ComponentAdd/>
  <CustomerView/>
    </div>
    </Provider>
  );
}

export default App;
