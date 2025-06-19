import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { Menu, Container, Header, Icon, Segment } from 'semantic-ui-react';

import Demohistory from './components/Demohistory';
import Demostate from './components/Demostate';
import Page404 from './components/Page404';
import Demostatemultiples from './components/Demostatemultiples';
import DemoUseEffect from './components/DemoUseEffect';
import DemoUseEffect2 from './components/DemouseEffect2';
import DemoUseEffect3 from './components/DemouseEffect3';
import DemouseRef from './components/DemouseRef';
import DemoHooksPerso from './components/DemoHooksPerso';

function App() {
  const [activeItem, setActiveItem] = useState('accueil');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuItems = [
    { name: 'accueil', to: '/', exact: true, icon: 'home', text: 'Accueil' },
    { name: 'demohistory', to: '/demohistory', icon: 'history', text: 'Demo History' },
    { name: 'demostate', to: '/demostate', icon: 'database', text: 'Demo State' },
    { name: 'demostatemultiples', to: '/demostatemultiples', icon: 'list', text: 'States Multiples' },
    { name: 'demoUseEffect', to: '/demoUseEffect', icon: 'lightning', text: 'UseEffect' },
    { name: 'demoUseEffect2', to: '/demoUseEffect2', icon: 'sync', text: 'UseEffect 2' },
    { name: 'demoUseEffect3', to: '/demoUseEffect3', icon: 'recycle', text: 'UseEffect 3' },
    { name: 'demoUseRef', to: '/demoUseRef', icon: 'crosshairs', text: 'UseRef' },
    { name: 'perso', to: '/perso', icon: 'code', text: 'Hooks Personnalisés' }
  ];

  return (
    <React.Fragment>
      <BrowserRouter>
        <Segment inverted style={{ margin: 0, borderRadius: 0 }}>
          <Container>
            <Header as="h1" inverted textAlign="center" style={{ padding: '20px 0' }}>
              <Icon name="react" className="react-icon" />
              React Hooks Démo
              <Header.Subheader style={{ color: '#b5b5b5', marginTop: '10px' }}>
                Explorez les Hooks React avec des exemples interactifs
              </Header.Subheader>
            </Header>
          </Container>
        </Segment>
        
        <Menu inverted attached="top" stackable>
          <Container>
            {menuItems.map((item) => (
              <Menu.Item
                key={item.name}
                as={NavLink}
                name={item.name}
                to={item.to}
                exact={item.exact}
                active={activeItem === item.name}
                onClick={handleItemClick}
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  margin: '2px'
                }}
              >
                <Icon name={item.icon} />
                {item.text}
              </Menu.Item>
            ))}
          </Container>
        </Menu>
        <Container className="main-content">
          <Switch>
            <Route path="/" component={Demohistory} exact={true} />
            <Route path="/demohistory" component={Demohistory} exact={true} />
            <Route path="/demostate" component={Demostate} />
            <Route path="/demostatemultiples" component={Demostatemultiples} />
            <Route path="/demoUseEffect" component={DemoUseEffect} />
            <Route path="/demoUseEffect2" component={DemoUseEffect2} />
            <Route path="/demoUseEffect3" component={DemoUseEffect3} />
            <Route path="/demoUseRef" component={DemouseRef} />
            <Route path="/perso" component={DemoHooksPerso} />
            <Route path="*" component={Page404} />
          </Switch>
        </Container>

        <Segment inverted vertical style={{ margin: '5rem 0 0', padding: '3rem 0' }}>
          <Container textAlign="center">
            <Header as="h4" inverted>
              <Icon name="react" />
              React Hooks Demo App
            </Header>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
              Application de démonstration des Hooks React
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
              Créé avec React {React.version} et Semantic UI React
            </p>
          </Container>
        </Segment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

