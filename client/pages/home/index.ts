// import './home.css'
import { Router } from "@vaadin/router";

export class Home extends HTMLElement{
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  conectedCallback(){
    this.render();
    const $style = document.createElement("style");
    $style.setAttribute("class", "style");
    $style.innerHTML = `
      body{
        background-color: beige;
      }
    `
    this.shadow.appendChild($style);
    this.addListeners();
  }

  render(){
    const $homePage = document.createElement("div");
    $homePage.setAttribute("class", "container");

    $homePage.innerHTML = `
    <div class="title-container">
      <h1 class="title">Test front - Home</h1>
    </div>
    
    <div class="btns-container">
      <button class="login-btn">Iniciar Sesión</button>
      <button class="signup-btn">Registrarse</button>
    </div>
  `;
  this.shadow.appendChild($homePage);

  }

  addListeners(){}
}

customElements.define("home-page", Home);
