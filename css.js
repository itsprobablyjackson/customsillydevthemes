// ==UserScript==
// @name         Sillydev CSS Customiser
// @namespace    http://tampermonkey.net/
// @version      2025-04-18
// @description  Customise Sillydev's CSS
// @author       itsprobablyjackson
// @match        https://panel.sillydev.co.uk/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sillydev.co.uk
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const config = {
    local: false, // If you are using local CSS straight in the file; Otherwise the CSS comes from another source e.g github
    source: `https://itsprobablyjackson.github.io/customsillydevthemes/themes/thin.min.css`, // If local is set, paste your CSS here, otherwise use a link for the CSS
  };

  async function fetchCSS() {
    if (config.local) { return config.source; } else {
    const res = await fetch(config.source);
    const data = await res.text();
    return data;
    }
  }

  async function loadCSS() {
    const css = await fetchCSS();

    console.log(css)

    const style = document.createElement("style");

    style.innerHTML = css;

    document.querySelector("body").appendChild(style);
  }

  document.addEventListener("DOMContentLoaded", loadCSS);
})();
