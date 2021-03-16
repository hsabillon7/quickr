import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import theme from "./src/theme";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import LongTimers from "./src/utils/LongTimers";

export default function App() {
  LongTimers();

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
