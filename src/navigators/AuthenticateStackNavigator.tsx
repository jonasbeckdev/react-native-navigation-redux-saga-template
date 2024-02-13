
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import { IRootState } from "reduxsaga/reducers"
import { LoginStackNavigator } from "./LoginStackNavigator"
import { HomeStackNavigator } from "./HomeStackNavigator"

type AuthenticateStackParam = {
  loginStack: undefined
  homeStack: undefined
  emailConfirm: undefined
}

const AuthenticateStack = createNativeStackNavigator<AuthenticateStackParam>()

export function AuthenticateStackNavigator() {
  const user = useSelector((state: IRootState)=>state.userReducer.user)
  return (
    <AuthenticateStack.Navigator screenOptions={{headerShown: false}}>
    {
      !user
      ?
      <AuthenticateStack.Screen name='loginStack' component={LoginStackNavigator}/>
      :
      <AuthenticateStack.Screen name='homeStack' component={HomeStackNavigator}/>
    }
    </AuthenticateStack.Navigator>
  )
}
