import React from "react";
import {
  IonContent,
  IonHeader,
  IonCard,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from "@ionic/react";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonList>
          <IonItem routerLink="/profile/details">
            <IonLabel>
              <h2> Details </h2>
            </IonLabel>
          </IonItem>
        </IonList> */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="red">Basic Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <b>Name:</b> Hammad Ansari
                <hr></hr>
              </IonItem>
              <IonItem>
                <b>UID:</b> 2018450002
                <hr></hr>
              </IonItem>
              <IonItem>
                <b>Class:</b> SY MCA
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Account Details</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <b>Password:</b> ******** <IonIcon name="create"></IonIcon>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
