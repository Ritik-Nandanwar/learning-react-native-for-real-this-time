import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import About from "./Components/About";
import Persons from "./Components/Persons";
import SinglePerson from "./Components/SinglePerson";
const screens = {
  About: {
    screen: About,
  },
  Home: {
    screen: Persons,
  },
  SinglePerson: {
    screen: SinglePerson,
  },
};

const navStack = createStackNavigator(screens);
export default createAppContainer(navStack);
