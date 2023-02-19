import { Center, Stack, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Link as UILink } from '@chakra-ui/react';

import NewPropertyForm from './components/NewPropertyForm';
import Properties from './components/Properties';

function App() {
  return (
    <Router>
      <Center h="container.sm" data-testid="xe-webdev-challenge">
        <Stack spacing="0" position={'absolute'} top={0}>
          <Center>
            <Link to="/">
              <Heading as="h1" size="xl" noOfLines={1}>
                Xe.gr Web Dev Challenge
              </Heading>
            </Link>
          </Center>
          <Center display="flex" gap={4}>
            <Link to="/property">
              <UILink color="teal.500">Add new Property</UILink>
            </Link>
            <Link to="/properties">
              <UILink color="teal.500">View all Properties</UILink>
            </Link>
          </Center>
          <Switch>
            <Route exact path="/property" component={NewPropertyForm}></Route>
            <Route exact path="/properties" component={Properties}></Route>
            <Route exact path="/" component={() => <div></div>}></Route>
          </Switch>
        </Stack>
      </Center>
    </Router>
  );
}

export default App;
