import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonLabel,
  IonTabButton,
  IonIcon,
  IonTabBar,
  IonRouterOutlet,
} from '@ionic/react';
import Profile from './Profile';
import About from './About';
import Details from './Details';
import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MCA DEPT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    <IonTabs>
        <IonRouterOutlet>
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/profile/details" component={Details} />
          <Route path="/about" component={About} exact={true}/>
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="Dashboard">
          <IonIcon name="calendar" />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Dashboard/Details">
          <IonIcon name="contacts" />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Profile">
          <IonIcon name="map" />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="About">
          <IonIcon name="information-circle" />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
