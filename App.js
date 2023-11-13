import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const FirestoreExample = () => {
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
        <View style={styles.tables}>
          <Text style={styles.tablesTitle}>Available tables</Text>
          {documentData ? (
            <Text style={styles.tablesText}>
              {documentData.availableTables}
            </Text>
          ) : (
            <></>
          )}
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    alignSelf: "flex-end",
    fontSize: 30,
    margin: 25,
    fontWeight: "bold",
    fontFamily: "serif",
    textAlign: "center",
  },
  box: {
    backgroundColor: "#000",
    height: 130,
    padding: 15,
    elevation: 10,
    margin: 15,
    borderRadius: 10,
    paddingBottom: 45,
  },
  boxText: {
    color: "white",
    fontSize: 20,
    fontFamily: "serif",
  },
  greenText: {
    color: "green",
    fontSize: 14,
    padding: 5,
    fontFamily: "serif",
  },
  tablesRow: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
    gap: 20,
  },
  tables: {
    backgroundColor: "#feb9eb",
    height: 80,
    width: 160,
    borderRadius: 10,
    paddingBottom: 20,
    elevation: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tablesTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  detailsRow: {
    flex: 4,
    flexDirection: "row",
    gap: 20,
    padding: 15,
  },
  menu: {
    backgroundColor: "whitesmoke",
    height: 70,
    width: 100,
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  miniBox: {
    backgroundColor: "#feb9eb",
    height: 70,
    width: 100,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  styledText: {
    fontWeight: "bold",
    fontFamily: "serif",
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "serif",
  },
  tablesText: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 10,
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default FirestoreExample;
