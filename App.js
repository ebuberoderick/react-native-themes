import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';

export default function App() {
  const {colorScheme , toggleColorScheme} = useColorScheme();
  const statusBarTheme = colorScheme === 'dark' ? 'light' : 'auto';
  return (
    <View className="flex-1 items-center justify-center dark:bg-gray-950">
      <Switch value={colorScheme === 'dark'} onChange={()=> toggleColorScheme()} />
      <Text className="dark:text-white">Open up App.js to start working on your app!</Text>
      <StatusBar style={statusBarTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
