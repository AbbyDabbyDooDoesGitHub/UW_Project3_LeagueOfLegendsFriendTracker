import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import pages
import AddFriend from './pages/AddFriend';
import friendlistHome from './pages/FriendlistHome';
import Home from './pages/Home';
import MeetDevs from './pages/MeetDevs';

// import components
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import NewAccountModal from './components/NewAccountModal';
import PlatformDropdown from './components/PlatformDropdown';
import SignInModal from './components/SignInModal';

// import mutations
import { ADD_ACCOUNT } from './utils/mutations';
import FriendlistHome from './pages/FriendlistHome';


// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import SingleAccount from './pages/SingleAccount';
// import Profile from './pages/Profile';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import FriendList from './components/FriendList';
// import FriendForm from './components/FriendForm';
// import { ADD_ACCOUNT } from './utils/mutations';
// import AccountList from './components/AccountList';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (

    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <Header />

          <Banner /> 

          <SignInModal />

          <NewAccountModal />

          <div className="container">
            
            <Routes>
              <Route 
                path="/AddFriend"
                element={<AddFriend />}
              />
              <Route 
                path="/FriendlistHome" 
                element={<FriendlistHome />}
              />
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/MeetDevs" 
                element={<MeetDevs />}
              />
          
            </Routes>
            
          </div>

        </div>

      </Router>

    </ApolloProvider>

  );

}

export default App;
