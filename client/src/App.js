// import files
import * as React from 'react'
// import pages
import About from './pages/About.js'
import Shop from './pages/Shop.js'
import Services from './pages/Services.js'
import HigoDesigns from './pages/HigoDesigns.js'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import chakraProvider component
import { ChakraProvider } from '@chakra-ui/react';
// import components
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// import statement @apollo/client
import { setContext } from '@apollo/client/link/context';


// app function
const httpLink = createHttpLink({
  uri: "/graphql",
});

// setContext: create a middleware function that will retrieve the token, combine it with httpLink
// authLink: setContext() to retrieve the token from localStorage, set the HTTP req headers of evry req to include the token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      // ... spread operator
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // combine authlink and httplink
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// app function
function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={HigoDesigns} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              {/* <Route exact path="/singlecomment" component={SingleComment} /> */}
              {/* <Route exact path="/comment/:id" component={CommentList} /> */}
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Route exact path="/services" component={Services} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

// export app
export default App