import { createSignal, Show } from "solid-js";


function App() {
  const [furl, setfurl] = createSignal("/v2/start/index.html");
  const [menshow, setMenshow] = createSignal(false);
  const [bookshow, setBookshow] = createSignal(false);
  const [bibleshow, setBibleshow] = createSignal(false);
  const [disclaimer, setDisclaimer] = createSignal(false);
  const [license, setLicense] = createSignal(false);
  // V2 variables
  const [v2, setV2] = createSignal(false);

  //Getting Started Variables
  const [v2start, setV2start] = createSignal(false);
  const [v2startfrontend, setV2startfrontend] = createSignal(false);
  //Concept Variables
  const [v2concept, setV2concept] = createSignal(false);
  const [v2conceptmigrate, setV2conceptmigrate] = createSignal(false);

  const [v2security, setV2security] = createSignal(false);
  const [v2develop, setV2develop] = createSignal(false);
  const [v2distribute, setV2distribute] = createSignal(false);
  const [v2learn, setV2learn] = createSignal(false);
  const [v2plugins, setV2plugins] = createSignal(false);
  const [v2about, setV2about] = createSignal(false);
  // V1 Variables
  const [v1, setV1] = createSignal(false);
  // If not we need to request it
  async function togglemenu() {
    setMenshow((menshow) => !menshow);
    collapse();
    () => setBibleshow(false);
    () => setBookshow(false);
    () => setDisclaimer(false);
    () => setLicense(false);
  }
  async function collapse() {
    collapseV2();
  }
  async function collapseV2() {
    setV2(false);
    setV2start(false);
    setV2concept(false);
    setV2security(false);
    setV2develop(false);
    setV2distribute(false);
    setV2learn(false);
    setV2plugins(false);
    setV2about(false);
    collapseV2sub();
  }
  async function collapseV2sub() {
    setV2startfrontend(false);
  }
  return (
    <div className="container">
    <header>
    <button class="menu" onClick={() => {setBibleshow(false); setBookshow(false); setDisclaimer(false); setLicense(false); togglemenu()}}>
    <h2 id="met">Menu</h2>
    </button>

    </header>


    <ul>
    <Show when={menshow()}>
      <div id="topper"></div>
      <li><button class="menu" onClick={() => {setBibleshow(false); setDisclaimer(false); setLicense(false); setBookshow((bookshow) => !bookshow)}}><h3>Tauri V1 (Coming Soon)</h3></button></li>
      <li><button class="menu" onClick={() => {setBookshow(false); setDisclaimer(false); setLicense(false); setBibleshow((bibleshow) => !bibleshow); setV2((v2) => !v2); collapseV2sub()}}><h3>Tauri V2</h3></button></li>
    </Show>
    </ul>

    <ul>
    <Show when={v2()}>
    <h2 class="mentop">Tauri V2</h2>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(true);
      setV2concept(false);
      setV2security(false);
      setV2develop(true);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(false);
      setV2about(false);
    }}>
    <h3>Get Started</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(false);
      setV2concept(true);
      setV2security(false);
      setV2develop(false);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(false);
      setV2about(false);
    }}>
    <h3>Concepts</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(false);
      setV2concept(false);
      setV2security(true);
      setV2develop(false);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(false);
      setV2about(false);
    }}>
    <h3>Security</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(false);
      setV2concept(false);
      setV2security(false);
      setV2develop(true);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(false);
      setV2about(false);
    }}>
    <h3>Develop</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(false);
      setV2concept(false);
      setV2security(false);
      setV2develop(false);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(true);
      setV2about(false);
    }}>
    <h3>Plugins</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      setV2(false);
      setV2start(false);
      setV2concept(false);
      setV2security(false);
      setV2develop(false);
      setV2distribute(false);
      setV2learn(false);
      setV2plugins(false);
      setV2about(true);
    }}>
    <h3>About</h3>
    </button>
    </li>
    </Show>
    </ul>
    <ul>




    <Show when={v2start()}>
    <h2 class="mentop">Getting Started</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      setMenshow(false);
      setfurl("/v2/start/index.html");
    }}>
    <h3>What is Tauri</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      setMenshow(false);
      setfurl("/v2/start/prerequisites/index.html");
    }}>
    <h3>Prerequisites</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/start/create-project/index.html");
    }}>
    <h3>Create A Project</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      setV2startfrontend(true);
    }}>
    <h3>Frontend Configuration</h3>
    </button>
    </li>
    </Show>
    <Show when={v2startfrontend()}>
    <h2 class="mentop">Frontend Configuration</h2>
    <li>
    <button class="menu" onClick={() => {
      collapseV2();
      setMenshow(false);
      setfurl("/v2/start/frontend/index.html")
    }}>
    <h3>Overview</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapseV2();
      setMenshow(false);
      setfurl("/v2/start/frontend/nextjs/index.html")
    }}>
    <h3>Next.js</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapseV2();
      setMenshow(false);
      setfurl("/v2/start/frontend/nuxt/index.html")
    }}>
    <h3>Nuxt</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapseV2();
      setMenshow(false);
      setfurl("/v2/start/frontend/trunk/index.html")
    }}>
    <h3>Trunk</h3>
    </button>
    </li>
    </Show>
    </ul>
    <ul>
    <Show when={v2concept()}>
    <h2 class="mentop">Core Concepts</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/concept/index.html");
    }}>
    <h3>Overview</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/concept/architecture/index.html");
    }}>
    <h3>Tauri Architecture</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/concept/process-model/index.html");
    }}>
    <h3>Process Model</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/concept/size/index.html");
    }}>
    <h3>App Size</h3>
    </button>
    </li>
    </Show>
    </ul>
    <ul>
    <Show when={v2security()}>
    <h2 class="mentop">Security</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/index.html");
    }}>
    <h3>Overview</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/best-practices/index.html");
    }}>
    <h3>Best Practices</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/capabilities/index.html");
    }}>
    <h3>Capabilities</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/csp/index.html");
    }}>
    <h3>Content Security Policy</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/development/index.html");
    }}>
    <h3>Development</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/ecosystem/index.html");
    }}>
    <h3>Tauri Ecosystem Security</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/future/index.html");
    }}>
    <h3>Future Work</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/permissions/index.html");
    }}>
    <h3>Permissions</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/runtime-authority/index.html");
    }}>
    <h3>Runtime Authority</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/security/scope/index.html");
    }}>
    <h3>Command Scope</h3>
    </button>
    </li>
    </Show>

    <Show when={v2develop()}>
    <h2 class="mentop">Development</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/develop/index.html");
    }}>
    <h3>Overview</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/develop/calling-rust/index.html");
    }}>
    <h3>Calling Rust From The Frontend</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/develop/configuration-files/index.html");
    }}>
    <h3>Configuration Files</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/develop/development-cycle/index.html");
    }}>
    <h3>Development Cycle</h3>
    </button>
    </li>
    </Show>

    <Show when={v2plugins()}>
    <h2 class="mentop">Plugins</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/index.html");
    }}>
    <h3>Overview</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/autostart/index.html");
    }}>
    <h3>Autostart</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/barcode-scanner/index.html");
    }}>
    <h3>Barcode Scanner</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/clipboard/index.html");
    }}>
    <h3>Clipboard</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/deep-linking/index.html");
    }}>
    <h3>Deep Linking</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/dialog/index.html");
    }}>
    <h3>Dialog</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/file-system/index.html");
    }}>
    <h3>File System</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/global-shortcut/index.html");
    }}>
    <h3>Global Shortcut</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/http-client/index.html");
    }}>
    <h3>HTTP client</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/localhost/index.html");
    }}>
    <h3>Localhost</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/logging/index.html");
    }}>
    <h3>Logging</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/notification/index.html");
    }}>
    <h3>Notifications</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/os-info/index.html");
    }}>
    <h3>OS Info</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/persisted-scope/index.html");
    }}>
    <h3>Persisted Scope</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/positioner/index.html");
    }}>
    <h3>Positioner</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/process/index.html");
    }}>
    <h3>Process</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/shell/index.html");
    }}>
    <h3>Shell</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/single-instance/index.html");
    }}>
    <h3>Single Instance</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/sql/index.html");
    }}>
    <h3>SQL</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/store/index.html");
    }}>
    <h3>Store</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/stronghold/index.html");
    }}>
    <h3>Stronghold</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/upload/index.html");
    }}>
    <h3>Upload</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/websocket/index.html");
    }}>
    <h3>Websocket</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/window-customization/index.html");
    }}>
    <h3>Window-Customization</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/plugin/window-state/index.html");
    }}>
    <h3>Window State</h3>
    </button>
    </li>
    </Show>

    <Show when={v2about()}>
    <h2 class="mentop">About</h2>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/about/index.html");
    }}>
    <h3>About Tauri</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/about/book/index.html");
    }}>
    <h3>Tauri Book</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/about/governance/index.html");
    }}>
    <h3>Governance</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/about/philosophy/index.html");
    }}>
    <h3>Philosophy</h3>
    </button>
    </li>
    <li>
    <button class="menu" onClick={() => {
      collapse();
      togglemenu();
      setfurl("/v2/about/trademark/index.html");
    }}>
    <h3>Trademark</h3>
    </button>
    </li>

    </Show>
    </ul>
    {!menshow() && <iframe id="viewarea" src={furl()} loading="eager" />}
    </div>
  );
}

export default App;
