import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import './Dashboard.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MCA DEPT</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <img src="/assets/Entrance.jpg" alt="" />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>About Us</IonCardSubtitle>
            <IonCardTitle>Welcome to SPIT</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
