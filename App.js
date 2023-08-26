import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Job from "./src/screens/Job";

export default function App() {
  const Stack = createNativeStackNavigator();
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Job"
          component={Job}
          options={{ headerShown: false }}
        ></Screen>
        <Screen name="Page1" component={Screen1} />
        <Screen name="Page2" component={Screen2} />
        <Screen name="Page3" component={Screen3} />
      </Navigator>
    </NavigationContainer>
  );
}

const NoHeaderScreen = ({ ...rest }) => {
  return <Screen {...rest} options={{ headerShown: false, ...rest.options }} />;
};
