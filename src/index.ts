import { LitElement, html } from "lit";

class WebApp extends LitElement {
  render() {
    return html`<h1>Hello From Lit</h1>`;
  }
};

customElements.define("web-app", WebApp);
