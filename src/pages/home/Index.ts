import { LitElement, html } from "lit";

export default class HomeIndex extends LitElement {
  render() {
    return html`
      <h1>Home Index</h1>
      <file-upload></file-upload>
    `;
  }
};

