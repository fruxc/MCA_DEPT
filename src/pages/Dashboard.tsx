import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
import "./Dashboard.css";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: 100,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  margin2: {
    marginTop: 10,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 10
  },
  size: {
    fontSize: 12
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MCA DEPT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
        <IonRow className={classes.margin}>
            <IonCol>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.size}
                >Annoncement
                </Button>
              </ThemeProvider>
            </IonCol>
            <IonCol>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.size }
                >
                  Attendance
                </Button>
              </ThemeProvider>
            </IonCol>
          </IonRow>
          <IonRow className={classes.margin2}>
            <IonCol>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.size}
                >TimeTable
                </Button>
              </ThemeProvider>
            </IonCol>
            <IonCol>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.size }
                >
                  Exam
                </Button>
              </ThemeProvider>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
