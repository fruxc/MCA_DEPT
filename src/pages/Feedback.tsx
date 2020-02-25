import React, { useState } from "react";
import {
  IonContent,
  IonCard,
  IonItem,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonTextarea,
  IonButton,
  IonToast
} from "@ionic/react";

const Feedback: React.FC = () => {
  const [toastIsShown, setToastIsShown] = useState(false);

  const showToast = () => {
    setToastIsShown(true);
  };
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonLabel>
            <b>Enter Feedback</b>
          </IonLabel>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Enter your Name "
              required
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="email" placeholder="Email Id" required></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" placeholder="UID" required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Select your Year </IonLabel>
            <IonSelect placeholder="Select One">
              <IonSelectOption value="f">FYMCA</IonSelectOption>
              <IonSelectOption value="s">SYMCA</IonSelectOption>
              <IonSelectOption value="t">TYMCA</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            Do you want sumbmission notification &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IonToggle color="primary"></IonToggle>
          </IonItem>
          <IonItem>
            <IonTextarea placeholder="Enter your feedback here..."></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Tick mark the features you have found in the app
            </IonLabel>
            <IonSelect multiple={true} cancelText="cancel" okText="Okay!">
              <IonSelectOption value="simplicity">Simplicity</IonSelectOption>
              <IonSelectOption value="transparency">
                Transparency
              </IonSelectOption>
              <IonSelectOption value="immersion">Immersion</IonSelectOption>
              <IonSelectOption value="clarity">clarity</IonSelectOption>
              <IonSelectOption value="reliable">Reliable</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Any Suggestions</IonLabel>
              <IonInput type="text" placeholder="Write" required></IonInput>
          </IonItem>
          <div>
            <IonButton onClick={() => showToast()} color="danger">
              Submit
            </IonButton>
            <IonToast
              isOpen={toastIsShown}
              onDidDismiss={() => setToastIsShown(false)}
              message="Feedback Submitted!"
              duration={3000}
            />
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default Feedback;
