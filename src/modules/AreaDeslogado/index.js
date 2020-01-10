import {LoginScreen} from './index';
import {createStackNavigator} from 'react-navigation';

export const AreaDeslogado = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
});
