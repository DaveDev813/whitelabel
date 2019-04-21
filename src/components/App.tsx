import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { RestLink } from "apollo-link-rest";
import Person from "./Person";

const restLink = new RestLink({
  uri: "https://swapi.co/api/"
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Anyong Aseo</h1>
        <Person />
      </div>
    );
  }
}

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
