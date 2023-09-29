import { LitElement, html } from "lit";
import styles from "./stylesheet.css";

export default class HomeIndex extends LitElement {
  static styles = styles;

  render() {
    return html `<h1>Form Uploader</h1>`;
  }
};

