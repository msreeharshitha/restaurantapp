import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 1 select')}>
        <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 2 select')}>
        <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 3 select')}>
        <Text style={styles.text}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 4 select')}>
        <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 5 select')}>
        <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 6 select')}>
        <Text style={styles.text}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 7 select')}>
        <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 8 select')}>
        <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 9 select')}>
        <Text style={styles.text}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Table 0 select')}>
          <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap:30,
  },
  text:{
    fontSize:20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation:20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    
  },
});

export default App;
