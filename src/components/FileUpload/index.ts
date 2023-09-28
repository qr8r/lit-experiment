import { LitElement, html } from "lit";
import * as FilePond from "filepond";

export default class HomeIndex extends LitElement {
  render() {
    return FilePond.create(this.renderRoot).element;
  }
};

