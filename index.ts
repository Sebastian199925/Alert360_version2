import { registerRootComponent } from 'expo';
import NavigationBar from './NavigationBar'; // Importa el componente NavigationBar

import App from './App';
import LoginPage from './Components/LoginPage';
import RegisterForm from './NavigationPage/RegisterPage'; 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);
//registerRootComponent(RegisterForm);
//registerRootComponent(NavigationBar);
//registerRootComponent(LoginPage);