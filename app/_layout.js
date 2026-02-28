import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Slot, useRouter, usePathname } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route) => {
    if (route === '/') return pathname === '/';
    return pathname.startsWith(route);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Navbar />
      </View>

      <View style={styles.contentContainer}>
        <Slot />
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace('/')}
        >
          <Ionicons
            name="home"
            size={24}
            color={isActive('/') ? '#4f46e5' : '#999'}
          />
          <Text style={[styles.tabText, { color: isActive('/') ? '#4f46e5' : '#999' }]}>
            Inicio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace('/buscar')}
        >
          <Ionicons
            name="search"
            size={24}
            color={isActive('/buscar') ? '#4f46e5' : '#999'}
          />
          <Text style={[styles.tabText, { color: isActive('/buscar') ? '#4f46e5' : '#999' }]}>
            Buscar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.replace('/perfil')}
        >
          <Ionicons
            name="person"
            size={24}
            color={isActive('/perfil') ? '#4f46e5' : '#999'}
          />
          <Text style={[styles.tabText, { color: isActive('/perfil') ? '#4f46e5' : '#999' }]}>
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    paddingTop: 40,
    backgroundColor: '#C599FF',
  },
  contentContainer: {
    flex: 1,
  },
  bottomBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  tabText: {
    fontSize: 10,
    marginTop: 2,
  },
});