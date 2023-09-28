import { LitElement, html } from "lit";

import HomIndex from "./pages/home/Index.js"

export default class WebApp extends LitElement {
  render() {
    return html`
      <h1>Hello From Lit Component</h1>
      <home-index></home-index>
    `;
  }
};
