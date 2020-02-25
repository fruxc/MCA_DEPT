import {
  IonContent,
  IonHeader,
  IonPage,
  IonItem
} from "@ionic/react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./Dashboard.css";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <img src="/assets/Entrance.jpg" alt="" />
      <IonContent>
        <div className={classes.root}>
          <Typography
            color="textPrimary"
            variant="h5"
            style={{ textAlign: "center" }}
          >
            Welcome to SPIT
          </Typography>
          <ExpansionPanel square={false}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>About Us</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                The institute is located in 47 acres of green campus at Andheri
                (W), the fastest growing suburb of Mumbai. The campus also
                houses four Bhavan’s Institutions of great repute namely
                Bhavan’s College (the arts, commerce and science college),
                Sardar Patel College of Engineering – Government aided
                Engineering college, S.P. Jain Institute of Management and
                Research, a management institute and A.H. Wadia, higher
                secondary school.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square={false}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Institutional Value</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                1. Integrity.<br></br>
                2. Excellence <br></br>
                3. Social Sensitivity <br></br>
                4. Globalization<br></br>
                <hr></hr>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square={false}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Vision &amp; Mission</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                <b>Our vision</b>
                <br></br>
                <br></br>
                <IonItem>
                  Keeping in view the growing and changing needs of Industry and
                  society, we at S.P.I.T. are committed to creating an
                  environment which will raise the intellectual and moral
                  standards of our students. Our endeavor is to strive for the
                  overall development of students, thereby enabling them to
                  accept challenges. In tune with this our vision is<br></br>
                  <br></br>
                </IonItem>
                <IonItem>
                  <b>
                    To build a renowned institute which will produce graduate
                    engineers with global competency and social sensitivity.
                  </b>
                </IonItem>
                <br></br>
                <br></br>
                <b>Our Mission</b>
                <br></br>
                <br></br>
                <IonItem> 
                  Provide high quality education in engineering and technology
                  promoting the Indian Values and Ethos that will prepare the
                  participants to lead lives of personal integrity and civic
                  responsibility in a global society.<br></br>
                </IonItem>
                <IonItem>
                  Promote an Educational Environment that combines academic
                  study with the excitement of intellectual curiosity for
                  engineers of tomorrow.<br></br>
                </IonItem>
                <IonItem>
                  Enhance career opportunities for students through
                  Industry-Institute interaction, value-added courses and
                  projects in cutting edge technology.<br></br>
                </IonItem>
                <IonItem>
                  Inculcate Entrepreneurial mindset in students to make them job
                  creators.<br></br>
                </IonItem>
                <IonItem>
                  Focus on applied research to create next generation
                  technologies.<br></br>
                </IonItem>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square={false}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Founders Message</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body2">
                “Education would fail ignominiously in its objective if it
                manufactures only a robot and called him an economic man
                stressing the adjective economic and forgetting the substantive
                man. A university cannot afford to ignore the cultural aspects
                of education whatever studies it specilizes in. Science is a
                means, not an end. Whereas culture is an end in itself. Even
                though you may ultimately become a scientist, a doctor, or an
                engineer, you must while in college, absorb fundamental values
                which will make you a man of culture. An engineer has not merely
                to build bridges; he has to be a devoted husband, a kind father,
                a friendly neighbour, a dutiful citizen, and a man true to
                himself. He will have trials and tribulations; his heart will
                fail him at times; he will then need the strength which true
                culture alone can give.”
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
