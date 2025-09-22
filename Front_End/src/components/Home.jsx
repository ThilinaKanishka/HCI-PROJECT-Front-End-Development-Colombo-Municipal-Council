import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <h1>Welcome to the Home Page</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
