import { StyleSheet } from "react-native";

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
    
    borderRadius: 10,
    paddingBottom: 45,
  },
  boxText: {
    color: "white",
    fontSize: 20,
    fontFamily: "serif",
  },
  greenText: {
    color: "lightgreen",
    fontSize: 14,
    padding: 5,
    fontFamily: "serif",
  },
  tablesRow: {
    flex: 1,
    flexDirection: "row",
   marginTop:20,
    gap: 20,
  
  },
  tables: {
    backgroundColor: "#feb9eb",
    height: 80,
    width: 160,
    borderRadius: 10,
    paddingBottom: 20,
    elevation: 10,
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
    
  },
  menu: {
    backgroundColor: "whitesmoke",
    height: 70,
    width: 100,
    padding: 20,
    elevation: 10,
    borderRadius: 10,
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

export { styles };
