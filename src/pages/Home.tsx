import React, { useRef, useState } from 'react'
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react'

interface State {
  isRefreshing: boolean
}

const Home = () => {
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null)
  const ionFabRef = useRef<HTMLIonFabElement>(null)
  const [state, setState] = useState<State>({
    isRefreshing: false
  })
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons>
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol sizeLg="4" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Stand Mixer - Shop A</IonCardTitle>
                  <IonCardSubtitle>10/03/2017</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Receipt #: 123123123D</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol sizeLg="4" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Headphones - Shop B</IonCardTitle>
                  <IonCardSubtitle>10/03/2017</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Receipt #: 874324234</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  )
}

export default Home
