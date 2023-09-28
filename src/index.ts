import WebApp from "./WebApp.js";

import HomeIndex from "./pages/home/Index.js";

import FileUpload from "./components/FileUpload/index.js";

customElements.define("web-app", WebApp);

customElements.define("home-index", HomeIndex);

customElements.define("file-upload", FileUpload);
