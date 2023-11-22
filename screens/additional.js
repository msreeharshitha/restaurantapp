import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.categories}>Categories Name</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.select}>Select a Categories</Text>
        <View style={styles.icons}>
          <AntDesign name="down" size={18} color="black" />
        </View>
      </View>
      <View style={styles.row2}>
        <Text style={styles.add}>ADD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 25,
  },

  

  ad: {
    marginLeft: 10,
    fontSize: 24,
  },

  categories: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  row1: {
    flexDirection: 'row',
    width: 300,
    borderRadius: 5,
    borderWidth: 1, // Use 'borderWidth' instead of 'border'
    borderColor: 'black',
    alignItems:'center', 
    justifyContent: 'center', 
  },

  select: {
    fontWeight: 'bold',
    padding: 15, // Adjust the padding as needed
    height: 50,
    
    flex: 1, // Allow the text to take the remaining space
  },

  icons: {
    justifyContent: 'center', // Center the icon vertically
    paddingHorizontal: 10, // Adjust the padding as needed
  },

  row2: {
    flexDirection: 'row',
    width: 300,
  },

  add: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    padding: 10, // Adjust the padding as needed
    flex: 1, // Allow the text to take the remaining space
  },
});

export default App;
