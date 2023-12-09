import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes';

 function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Routes/>
    </SafeAreaView>

  );
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgb(0,0,0)",
    
  },
});

export default App;
