import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import {
  IonMenu,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react'

const routes = [
  { title: 'Home', path: '/', icon: 'paper' },
  { title: 'Add new receipt', path: '/new', icon: 'add' }
]

type Props = RouteComponentProps<{}>

const Menu: React.SFC<Props> = ({ history }) => {
  return (
    <IonMenu contentId="main">
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
      <IonContent class="outer-content">
        {routes
          .filter(route => !!route.path)
          .map(page => (
            <IonMenuToggle key={page.title} auto-hide="false">
              <IonItem button onClick={() => history.push(page.path)}>
                <IonIcon slot="start" name={page.icon} />
                <IonLabel>{page.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Menu)
