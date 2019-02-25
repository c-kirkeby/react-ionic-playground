import React from 'react'
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonIcon,
  IonTabBar,
  IonTabButton
} from '@ionic/react'
import { Route, Redirect } from 'react-router'
import { Home } from '.'

const AppStack: React.SFC = () => (
  <IonPage>
    <Route exact path="/" render={() => <Redirect to="/home" />} />
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(home)" component={Home} exact={true} />
      </IonRouterOutlet>
      <IonTabBar>
        <IonTabButton slot="bottom">
          <IonIcon name="house" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
)

export default AppStack
