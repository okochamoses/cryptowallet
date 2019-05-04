import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Auth from "../screens/Auth/Auth";

const RootNavigation = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(RootNavigation);
