import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import About from "./ComponentsPerson/About";
import Persons from "./ComponentsPerson/Persons";
import SinglePerson from "./ComponentsPerson/SinglePerson";
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
