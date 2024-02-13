import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import styles from './DrawerContent.styles'

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{}}
      {...props}
    >
      {/* Contenido personalizado del Drawer */}
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Weather App</Text>
      </View>

      <DrawerItemList  {...props} />

      {/* Elemento personalizado en el Drawer */}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
