import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



function App() {
  const handleCategoryPress = (category) => {
    // Handle category press logic here
    console.log(`Pressed on category: ${category}`);
  };

  const handleRightArrowPress = (category) => {
    // Handle right arrow press logic here
    console.log(`Pressed on right arrow for category: ${category}`);
  };

  const handleSearchPress = () => {
    // Handle search press logic here
    console.log('Pressed on search icon');
  };

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Text style={styles.categoriestext}>Categories-4</Text>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={handleSearchPress}
        >
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.row1}
        onPress={() => handleCategoryPress('Main Course')}
      >
        <View style={styles.maincourse}>
          <Text>Main Course</Text>
          <Text style={styles.Text}>15</Text>
        </View>
        
          <AntDesign name="right" size={18} color="black" />
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.row2}
        onPress={() => handleCategoryPress('Briyani')}
      >
        <View style={styles.briyani}>
          <Text>Briyani</Text>
          <Text style={styles.Text}>10</Text>
        </View>
        
          <AntDesign name="right" size={18} color="black" />
        </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.row3}
        onPress={() => handleCategoryPress('Starter')}
      >
        <View style={styles.starter}>
          <Text>Starter</Text>
          <Text style={styles.Text}>15</Text>
        </View>
        
        
          <AntDesign name="right" size={18} color="black" />
        </TouchableOpacity>
      

      <TouchableOpacity
        style={styles.row4}
        onPress={() => handleCategoryPress('Desserts')}
      >
        <View style={styles.desserts}>
          <Text>Desserts</Text>
          <Text style={styles.Text}>15</Text>
        </View>
        
          <AntDesign name="right" size={18} color="black" />
        </TouchableOpacity>

            <TouchableOpacity style={styles.additionalCategory}
                onPress={() => navigation.navigate("Additional")}>
          <Text style={styles.additionalCategoryText}> + Additional Category</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoriestext: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom:10
  },

  searchIcon: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    paddingBottom:10,
    elevation:10,
    justifyContent:'center',
    alignItems:'center'
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'lightblue',
    height: 100, // Adjust the height as needed
  },

  rightArrowButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightblue',
    height: 100, // Adjust the height as needed
  },

  maincourse: {
    flex: 1,
  },

  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'lightblue',
    height: 100, // Adjust the height as needed
  },

  briyani: {
    flex: 1,
  },

  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'lightblue',
    height: 100, // Adjust the height as needed
  },

  starter: {
    flex: 1,
  },

  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightblue',
    height: 100, // Adjust the height as needed
  },

  desserts: {
    flex: 1,
  },

  Text: {
    color: 'black',
    fontSize: 18,
  },
  additionalCategory: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    width:200,
    marginLeft:120
  },

  additionalCategoryText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
