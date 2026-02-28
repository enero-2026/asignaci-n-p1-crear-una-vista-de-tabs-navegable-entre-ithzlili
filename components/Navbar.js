import { View, Text, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.logoText}>Proyecto Web</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C599FF',
    borderBottomWidth: 1,
    borderBottomColor: '#7A31D6',
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});