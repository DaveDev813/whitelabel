import React, { Component } from "react";
import { graphql, Query } from "react-apollo";
import gql from "graphql-tag";

const QueryTest = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

class Person extends Component<{}> {
  render() {
    return (
      <Query query={QueryTest}>
        {({ data, loading, error }: any) => {
          if (loading) {
            return <h1>loading... </h1>;
          }
          if (error) {
            return <h1>{error.message}</h1>;
          }
          return <h1>{data.person.name}</h1>;
        }}
      </Query>
    );
  }
}

export default Person;
