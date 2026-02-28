import { View, Text, StyleSheet } from 'react-native';

export default function Buscar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Buscar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#059669',
  },
});