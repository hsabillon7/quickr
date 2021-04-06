import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { Context as AuthContext } from "../../providers/AuthContext";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import CreateNote from "../screens/CreateNote";
import ModifyNote from "../screens/ModifyNote";

const Stack = createStackNavigator();

const Navigation = () => {
  const { state, persistLogin } = useContext(AuthContext);

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

  // Prevenir que se oculte la pantalla de splash
  SplashScreen.preventAutoHideAsync();

  // Ocultar la pantalla de splash al verificar que existe un token de inicio
  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CreateNote" component={CreateNote} />
              <Stack.Screen name="ModifyNote" component={ModifyNote} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
