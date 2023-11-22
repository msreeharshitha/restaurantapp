import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.categories}>Categories Name</Text>
      </View>
      <View style={styles.row1}>
        <DropDownPicker
          items={[
            { label: 'Category 1', value: 'category1' },
            { label: 'Category 2', value: 'category2' },
            // Add more categories as needed
          ]}
          defaultValue={selectedCategory}
          isVisible={isDropdownOpen}
          onOpen={() => setIsDropdownOpen(true)}
          onClose={() => setIsDropdownOpen(false)}
          containerStyle={{ width: '100%' }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => {
            setSelectedCategory(item.value);
            setIsDropdownOpen(false);
          }}
        />
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

  categories: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  row1: {
    width: 300,
    
alignItems: 'center',
    justifyContent: 'center',
  },

  row2: {
    flexDirection: 'row',
    width: 300,
    marginTop: 20,
  },

  add: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    padding: 10,
    flex: 1,
  },
});

export default App;
