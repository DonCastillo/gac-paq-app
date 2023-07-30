import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import FullWidthButton from './components/kids/FullWidthButton';
import PageWrapper from './base-pages/PageWrapper';
import AppWrapper from './base-pages/AppWrapper';

import React, { useCallback, useEffect, useState } from 'react';

import useFonts from './hooks/useFonts';
import Splash from './base-pages/Splash';

export default function App() {
 

  return (
    <View style={styles.container}>
      <AppWrapper />
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
