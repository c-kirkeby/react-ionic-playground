import React from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp, IonPage, IonSplitPane } from '@ionic/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, AppStack } from './pages'
import { Menu } from './components'

const App = () => {
  return (
    <Router>
      <div id="app">
        <IonApp>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <Switch>
                {/* <Route path="/home" component={Home} /> */}
                <Route path="/" component={AppStack} />
              </Switch>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </div>
    </Router>
  )
}

export default App
