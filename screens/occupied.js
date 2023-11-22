
  
  // App.js
  import React from 'react';
  import { View, StyleSheet, Text,TouchableOpacity ,Alert} from 'react-native';
  import { AntDesign } from '@expo/vector-icons';
  import { Entypo } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
  
  
  function App() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, flexDirection: 'row', gap: 20, marginTop: 40 }}>
          <View style={styles.tableBox}>
            <Text style={styles.tabletext}>Table Number</Text>
            <Text style={styles.frstorangeText}>12</Text>
          </View>
          <TouchableOpacity style={styles.buttonBox} onPress={() => Alert.alert('accept')}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
          <View style={styles.tableBox}>
          <Text style={styles.tabletext}>Table Number</Text>

              <Text style={styles.icons}>
                <Ionicons name="newspaper-outline" size={18} color="black" />
              </Text>
            
            <Text style={styles.orangeText}>
              12 </Text>
              <Text style={styles.takeorder}> Take order</Text>
            
          </View>
          <TouchableOpacity style={styles.buttonBoxverify} onPress={() => Alert.alert('verify')}>
          <Text style={styles.buttonTextverify}>verify</Text>
        </TouchableOpacity>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.preparingandOrderBox}>
          <Text style={styles.tabletext}>Table Number</Text>

              <Text style={styles.iconss}>
                <AntDesign name="hourglass" size={18} color="black" />
              </Text>
            
            <Text style={styles.orangeText}>
              12</Text>
              <Text style={styles.orderinkit}> Order in kitchen</Text>
            
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 90 }}>
          <View style={styles.preparingandOrderBox}>
          <Text style={styles.tabletext}>Table Number</Text>

              <Text style={styles.iconss}>
                <Entypo name="bowl" size={18} color="black" />
              </Text>
            
            <Text style={styles.orangeText}>
              12 </Text>
              <Text style={styles.preparingorder}> Preparing order</Text>
            
          </View>
        </View>
      </View>
    );
  };
  // styles.js

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  tabletext:{
    marginLeft:10,
  },
  OccupiedText: {
    fontSize: 18,
  },
  frstorangeText:{
    color: 'orange',
    fontSize: 22,
    marginLeft:10,

  },
  orangeText: {
    color: 'orange',
    fontSize: 22,
    marginLeft:10,
    marginTop:-15
  },
  takeorder: {
    backgroundColor: 'lavender',
    fontSize:10,
    color: 'black',
    borderRadius:10,
    width:100,
    height:20,
    marginLeft:100,
    marginTop:-20
   },
  orderinkit: {
    backgroundColor: 'pink',
    color:'black',
    fontSize:10,
    borderRadius:10,
    width:100,
    height:20,
    marginLeft:140,
    marginTop:-20
  },
  preparingorder: {
    backgroundColor: 'orange',
    fontSize:10,
    borderRadius:10,
    width:100,
    height:20,
    fontSize: 10,
    color: 'black',
    marginLeft:140,
    marginTop:-20
  },
  icons:{
    marginLeft:180,
  },
  iconss:{
    marginLeft:220,
  },
  
  tableBox: {
    width: 210,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,  // Add this line for the outline border
    borderColor: 'grey',  // Add this line for the outline border
    padding: '1rem',
    
  },
  buttonBox: {
    width: 75,
    height: 80,
    backgroundColor: 'pink',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  buttonBoxverify: {
    width: 75,
    height: 80,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextverify: {
    fontSize: 16,
    color: 'black',
  },
  
  preparingandOrderBox: {
    width: 250,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,  // Add this line for the outline border
    borderColor: 'grey',  // Add this line for the outline border
    padding: '1rem',
  },
});
export default App;

