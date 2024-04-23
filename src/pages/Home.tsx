import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {logInOutline, personCircleOutline} from 'ionicons/icons';

const Home: React.FC = () => {
  const doLogin = (event:any) => {
    event.preventDefault();
    console.log('doLogin');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Demo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput
              fill='outline'
              labelPlacement='floating'
              label='email' type='email'
              placeholder='example@email.com'>
              </IonInput>
              <IonInput
              className='ion-margin-top'
              fill='outline'
              labelPlacement='floating'
              label='password'
              type='password'
              placeholder='password'>
              </IonInput>
              <IonButton type='submit' expand='block' className='ion-margin-top'>
                Login
                <IonIcon icon={logInOutline} slot='end'/>
                </IonButton>
              <IonButton routerLink='/register' color='secondary' type='button' expand='block' className='ion-margin-top'>
                Create Account 
                <IonIcon icon={personCircleOutline} slot='end'/>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>
   
          </IonToolbar>
        </IonHeader>

      </IonContent>
    </IonPage>
  );
};

export default Home;
