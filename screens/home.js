import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

const firebaseConfig = {
  apiKey: "AIzaSyAltLPQpfpqASjP44KIc0-uy43h9geAFjs",
  authDomain: "react-food-app-test.firebaseapp.com",
  databaseURL: "https://react-food-app-test-default-rtdb.firebaseio.com",
  projectId: "react-food-app-test",
  storageBucket: "react-food-app-test.appspot.com",
  messagingSenderId: "917792936106",
  appId: "1:917792936106:web:305454d4f351eeedd840d3",
  measurementId: "G-9320K6BHRK",
};

firebase.initializeApp(firebaseConfig);

const Home = () => {
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const docRef = db.collection("collection").doc("document");

      try {
        const doc = await docRef.get();
        if (doc.exists) {
          setDocumentData(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Restaurant</Text>

      <View style={styles.box}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.boxText}>Complete orders</Text>
          <Text style={styles.greenText}> +20 since yesterday</Text>
        </View>
        {documentData ? (
          <Text style={styles.boxText}>
            {documentData.ordersCompleted} Today
          </Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>

      <View style={styles.tablesRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Available")}>
          <View style={styles.tables}>
            <Text style={styles.tablesTitle}>Available Tables</Text>
            {documentData ? (
              <Text style={styles.tablesText}>
                {documentData.availableTables}
              </Text>
            ) : (
              <></>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.tables}>
          <Text style={styles.tablesTitle}>Occupied tables</Text>
          {documentData ? (
            <Text style={styles.tablesText}>{documentData.occupiedTables}</Text>
          ) : (
            <></>
          )}
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.menu}>
          <Text style={styles.styledText}>Menu</Text>
          <Entypo name="bowl" size={20} color="black" />
        </View>
        <View style={styles.miniBox}>
          <Text style={styles.styledText}>Employees</Text>
          <Text style={styles.bigText}>9</Text>
        </View>
        <View style={styles.miniBox}>
          <Text style={styles.styledText}>Offers</Text>
          <MaterialCommunityIcons
            name="brightness-percent"
            size={24}
            color="black"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
