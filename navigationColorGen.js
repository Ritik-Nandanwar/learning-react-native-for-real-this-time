import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./ComponentsColorGen/Home";

const screens = {
  Home: {
    screen: Home,
  },
};

const navStackColor = createStackNavigator(screens);
export default createAppContainer(navStackColor);
