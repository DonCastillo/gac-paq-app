import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FullWidthButton from './components/kids/FullWidthButton';
import PageWrapper from './base-pages/PageWrapper';


export default function App() {
  return (
    <View style={styles.container}>
      <PageWrapper />
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
