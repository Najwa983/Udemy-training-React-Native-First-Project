import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import PasswordInputScreen from "./src/screens/PasswordInputScreen";
import InputTextScreen from "./src/screens/InputTextScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Input: InputTextScreen,
    Password: PasswordInputScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
