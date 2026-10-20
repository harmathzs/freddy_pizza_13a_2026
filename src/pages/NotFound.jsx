import { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <section className="center">
        <h1>404 – Page not found</h1>
        <p>This slice does not exist.</p>
        <Link to="/" className="btn">Go home</Link>
      </section>
    );
  }
}
