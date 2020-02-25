import React from "react";
import { Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenuButton,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonHeader,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonSplitPane
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { person, help, grid, create } from "ionicons/icons";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton auto-hide="false"></IonMenuButton>
        </IonButtons>
        <IonTitle>MCA Dept</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonSplitPane contentId="main">
    <IonMenu side="start" menuId="first" contentId="main">
      <IonContent>
        <IonList>
          <IonItem></IonItem>
          <IonItem></IonItem>
          <IonItem routerLink="/dashboard"> Dashboard </IonItem>
          <IonItem routerLink="/profile"> Profile </IonItem>
          <IonItem routerLink="/feedback"> Feedback </IonItem>
          <IonItem routerLink="/about"> About us </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    </IonSplitPane>
    <IonContent id="main">
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/feedback" component={Feedback} exact={true} />
            <Route path="/about" component={About} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={grid} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="feedback" href="/feedback">
              <IonIcon icon={create} />
              <IonLabel>Feedback</IonLabel>
            </IonTabButton>
            <IonTabButton tab="about" href="/about">
              <IonIcon icon={help} />
              <IonLabel>About us</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
