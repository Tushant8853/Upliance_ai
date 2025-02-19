import React from "react";
import CounterComponent from "./Component/CounterComponent";
import RichTextEditors from "./Component/RichTextEditors";
import Details from "./Component/Detail";
import Footer from "./Extras/Footer";
import UserDataForm from "./Component/UserDataForm";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.counterComponent}>
          <CounterComponent />
        </div>
        <div style={styles.richTextEditors}>
          <RichTextEditors />
        </div>
      </div>
      <div style={styles.row2}>
        <div style={styles.details}>
          <Details />
        </div>
        <div style={styles.userDataForm}>
          <UserDataForm />
        </div>

      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    width: "100%",
    height: "300px",
  },
  row2: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    width: "100%",
    height: "400px",
  },
  counterComponent: {
    borderRadius: "10px",
    flex: 1,
    marginRight: "10px",
    border: "1px solid black",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  richTextEditors: {
    flex: 1,
    marginLeft: "10px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  userDataForm: {
    borderRadius: "10px",
    flex: 1,
    marginLeft: "10px",
    border: "1px solid black",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  details: {
    borderRadius: "10px",
    flex: 1,
    marginRight: "10px",
    border: "1px solid black",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    border: "1px solid black",
  },
};

export default Dashboard;
