import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashStackScreenProps } from 'navigators'

export function SplashScreen({navigation}: SplashStackScreenProps) {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('authenticateStack')
    }, 2000)
  }, [])
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true}/>
    </View>
  )
}

const styles = StyleSheet.create({})