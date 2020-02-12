import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      <Typography variant="overline">Welcome to SPIT</Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >About Us</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body2">
          The institute is located in 47 acres of green campus at Andheri (W), the fastest growing suburb of Mumbai. The campus also houses four Bhavan’s Institutions of great repute namely Bhavan’s College (the arts, commerce and science college), Sardar Patel College of Engineering – Government aided Engineering college, S.P. Jain Institute of Management and Research, a management institute and A.H. Wadia, higher secondary school.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </IonContent>
    </IonPage>
  );
};

export default About;
