import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  IonSplitPane,
  IonPage
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { person, help, grid } from "ionicons/icons";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Details from "./pages/Details";

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
  <Router>
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
      <div id="menu">
      </div>
      <IonPage id="main">
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/profile/details" component={Details} exact={true} />
          <Route path="/about" component={About} exact={true} />
        </Switch>
      </IonPage>
    </IonSplitPane>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/profile/details" component={Details} exact={true} />
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
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={help} />
            <IonLabel>About us</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </Router>
);

export default App;
