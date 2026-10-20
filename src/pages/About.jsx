import { Component } from "react";
import { crew } from "../data/crew.js";

export default class About extends Component {
  render() {
    return (
      <>
        <h1>About Freddy's Pizza</h1>
        <p className="lead">
          Freddy opened his tiny shop on Dough Street in 2009 with one wood-fired oven and one rule:
          use ingredients you would serve your own family. Our dough rests for 48 hours, our tomatoes
          are crushed by hand, and every pizza is baked to order.
        </p>
        <h2>Meet the crew</h2>
        <div className="grid">
          {crew.map((m) => (
            <article key={m.id} className="card center">
              <div className="card-emoji">{m.emoji}</div>
              <h3>{m.name}</h3>
              <p className="muted">{m.role}</p>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
        <h2>Opening hours</h2>
        <p>Mon–Thu 11:00–22:00 · Fri–Sat 11:00–24:00 · Sun 12:00–21:00</p>
      </>
    );
  }
}
