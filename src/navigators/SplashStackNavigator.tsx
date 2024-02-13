import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { SplashScreen } from "screens"
import { AuthenticateStackNavigator } from "./AuthenticateStackNavigator"

type SplashStackParam = {
  splash: undefined
  authenticateStack: undefined
}

const SplashStack = createNativeStackNavigator<SplashStackParam>()

export type SplashStackScreenProps = NativeStackScreenProps<SplashStackParam>

export function RootStackNavigator() {
  return (
    <SplashStack.Navigator>
      <SplashStack.Group screenOptions={{headerShown: false}}>
        <SplashStack.Screen name='splash' component={SplashScreen}/>
        <SplashStack.Screen name='authenticateStack' component={AuthenticateStackNavigator}/>
      </SplashStack.Group>
    </SplashStack.Navigator>
  )
}
