(function () {
  const STASHURL = "http://10.0.0.93:9999";
  const ROOT = "/custom/darkonite/";
  const CSS = STASHURL + ROOT + "css/";
  const LIBURL = STASHURL + ROOT + "lib/";

  const LIBRARIES = [
  ];

  const FILES = [
    {
      category: "Change Order of Menu Bar",
      name: "Change the order of navigation bar buttons",
      href: null,
      shortname: "Style-Plugin-CSS-changeOrderOfNavButtons",
      instructions: "Drag and drop the buttons to change the order",
      activebydefault: "false",
    },
    {
      category: "Global",
      name: "Dont Disable (todo fix)",
      href: CSS + "global/" + "dontdisable.css",
      shortname: "Style-Plugin-CSS-dontdisable",
      activebydefault: "true",
    },
    {
      category: "Global",
      name: "Misc changes (todo togglify)",
      href: CSS + "global/" + "Dankonite.css",
      shortname: "Style-Plugin-CSS-theme",
      activebydefault: "true",
    },
    {
      category: "Global",
      name: "Colors",
      href: CSS + "global/" + "colors.css",
      shortname: "Style-Plugin-CSS-colors",
      activebydefault: "true",
    },
    {
      category: "Global",
      name: "Box Shadows",
      href: CSS + "global/" + "boxshadow.css",
      shortname: "Style-Plugin-CSS-boxshadows",
      activebydefault: "true",
    },
    {
      category: "Global",
      name: "Border Radius",
      href: CSS + "global/" + "borderradius.css",
      shortname: "Style-Plugin-CSS-borderradius",
      activebydefault: "true",
    },
    {
      category: "Global",
      name: "NSFW Blur",
      href: CSS + "global/" + "blurNSFWImages.css",
      shortname: "Style-Plugin-CSS-blurNSFWImages",
      activebydefault: "false",
    },
    {
      category: "Global",
      name: "Unblur on Mouseover",
      href: CSS + "global/" + "blurNSFWImagesUnblurMouseOver.css",
      shortname: "Style-Plugin-CSS-blurNSFWImagesUnblurMouseOver",
      activebydefault: "false",
    },
    {
      category: "Global",
      name: "Hide 0 count badges",
      href: CSS + "global/" + "hide0CountBadges.css",
      shortname: "Style-Plugin-CSS-hide0CountBadges",
      activebydefault: "false",
    },
    {
      category: "Global",
      name: "Hide Donate Button",
      href: CSS + "global/" + "hideDonateButton.css",
      shortname: "Style-Plugin-CSS-hideDonateButton",
      activebydefault: "false",
    },
    {
      category: "Scenes",
      name: "Hide scene specs (resolution, duration) from scene card",
      href: CSS + "scenes/" + "hideSpecs.css",
      shortname: "Style-Plugin-CSS-hideSpecs",
      activebydefault: "false",
    },
    {
      category: "Scenes",
      name: "Hide studio logo/text from scene card",
      href: CSS + "scenes/" + "hideStudioLogoOrText.css",
      shortname: "Style-Plugin-CSS-hideStudioLogoOrText",
      activebydefault: "true",
    },
    {
      category: "Scenes",
      name: "Hide truncated text",
      href: CSS + "scenes/" + "hideTruncatedText.css",
      shortname: "Style-Plugin-CSS-hideTruncatedText",
      activebydefault: "false",
    },
    {
      category: "Scene Card Overlays",
      name: "Studio on top, stats on bottom",
      href: CSS + "SceneCard/" + "studionameontop.css",
      shortname: "Style-Plugin-CSS-studionameontop",
      activebydefault: "false",
    },
    {
      category: "Scene Card Overlays",
      name: "Stats on top, studio on bottom (Has priority)",
      href: CSS + "SceneCard/" + "statsontop.css",
      shortname: "Style-Plugin-CSS-statsontop",
      activebydefault: "true",
    },
    {
      category: "Performers",
      name: "Round Flags",
      href: CSS + "performers/" + "roundflags.css",
      shortname: "Style-Plugin-CSS-roundflags",
      activebydefault: "true",
    },
    {
      category: "Performers",
      name: "Hide gender icons",
      href: CSS + "performers/" + "hideGenderIcons.css",
      shortname: "Style-Plugin-CSS-hideGenderIcons",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Alias",
      href: CSS + "performers/" + "hideAlias.css",
      shortname: "Style-Plugin-CSS-hideAlias",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Rating",
      href: CSS + "performers/" + "hideRating.css",
      shortname: "Style-Plugin-CSS-hideRating",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Gender",
      href: CSS + "performers/" + "hideGender.css",
      shortname: "Style-Plugin-CSS-hideGender",
      activebydefault: "false",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Age",
      href: CSS + "performers/" + "hideAge.css",
      shortname: "Style-Plugin-CSS-hideAge",
      activebydefault: "false",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Country",
      href: CSS + "performers/" + "hideCountry.css",
      shortname: "Style-Plugin-CSS-hideCountry",
      activebydefault: "false",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Ethnicity",
      href: CSS + "performers/" + "hideEthnicity.css",
      shortname: "Style-Plugin-CSS-hideEthnicity",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Hair Color",
      href: CSS + "performers/" + "hideHairColor.css",
      shortname: "Style-Plugin-CSS-hideHairColor",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Eye Color",
      href: CSS + "performers/" + "hideEyeColor.css",
      shortname: "Style-Plugin-CSS-hideEyeColor",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Height",
      href: CSS + "performers/" + "hideHeight.css",
      shortname: "Style-Plugin-CSS-hideHeight",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Measurements",
      href: CSS + "performers/" + "hideMeasurements.css",
      shortname: "Style-Plugin-CSS-hideMeasurements",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Fake Tits",
      href: CSS + "performers/" + "hideFakeTits.css",
      shortname: "Style-Plugin-CSS-hideFakeTits",
      activebydefault: "true",
    },
    {
      category: "Performer Details Collapsed",
      name: "Hide Edit/Tag/Submit/Delete Buttons",
      href: CSS + "performers/" + "hideEditButtonsCollapsed.css",
      shortname: "Style-Plugin-CSS-hideEditButtonsCollapsed",
      activebydefault: "true",
    },
  ];

  var CATEGORYORDER = [
    "Global",
    "Change Order of Menu Bar",
    "Scene Card Overlays",
    "Performers",
    "Performer Details Collapsed",
    "Scenes",
  ];

  var svg_main_button =
    '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 123" width="20" height="20"><title>paint-icon-svg</title><style>  .s0 { fill: #fafafa }   .s1 { fill: #efaa3a }   .s2 { fill: #25a700 }   .s3 { fill: #e22952 }   .s4 { fill: #42a3cc } </style><path id="Layer" class="s0" d="m42.6 114.5q3 0.4 6.1 0.4 3 0 6-0.4 3-0.4 6-1.2 2.9-0.8 5.7-1.9 1.1-0.5 2.2-1 1.1-0.5 2.1-1 1.1-0.6 2.1-1.2 1-0.6 2-1.2l0.7 6.9q-0.8 0.5-1.6 0.9-0.9 0.4-1.7 0.8-0.8 0.5-1.7 0.8-0.9 0.4-1.7 0.8-3.2 1.3-6.5 2.2-3.4 0.9-6.8 1.3-3.4 0.5-6.9 0.5-3.4-0.1-6.8-0.5-3.7-0.5-7.2-1.7-3.6-1.1-6.9-2.8-3.3-1.6-6.3-3.8-3-2.2-5.6-4.9-2.8-2.8-5.1-6-2.3-3.1-4.2-6.6-1.8-3.4-3.2-7.1-1.3-3.7-2.1-7.6-1-4.7-1.2-9.5-0.1-4.8 0.6-9.5 0.8-4.7 2.3-9.3 1.6-4.5 4-8.7 2.3-4.2 5.4-7.9 3.1-3.8 6.8-6.9 3.7-3.1 7.9-5.6 4.1-2.4 8.7-4 1.5-0.6 3-1 1.5-0.4 3.1-0.7 1.6-0.2 3.2-0.2 1.5-0.1 3.1 0.1 1.4 0.2 2.7 0.6 1.3 0.4 2.6 1.1 1.2 0.7 2.2 1.6 1 1 1.9 2.1 0 0 0.1 0.1 0 0.1 0 0.2 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2c2.9 6.6-0.6 10.8-4 14.8-2 2.3-3.8 4.5-2.7 6.6 0.4 0.9 1.6 1.5 3.2 2q1 0.2 2 0.3 1 0.1 2 0.1 1 0 2 0 1-0.1 2-0.3c2.5-0.4 5.2-1 7.8-1.5 1.5-0.4 3-0.7 4.5-1l-2 6.8-1.3 0.3c-2.5 0.5-5.1 1.1-8.1 1.6q-1.3 0.2-2.6 0.3-1.3 0.1-2.6 0.1-1.3 0-2.7-0.2-1.3-0.2-2.6-0.5c-3.3-0.8-5.9-2.6-7.2-5.1-3-5.9 0.1-9.6 3.5-13.6 2-2.4 4.2-5 3.2-7.9q-0.5-0.6-1-1-0.6-0.5-1.2-0.8-0.7-0.3-1.4-0.5-0.6-0.2-1.4-0.3-1.2-0.1-2.4-0.1-1.2 0.1-2.4 0.2-1.2 0.2-2.3 0.5-1.2 0.3-2.3 0.8-4 1.5-7.7 3.6-3.7 2.2-7 4.9-3.2 2.8-6 6.1-2.7 3.3-4.8 7-2 3.7-3.4 7.7-1.4 4-2 8.2-0.7 4.2-0.6 8.4 0.2 4.3 1 8.4 0.7 3.4 1.9 6.7 1.2 3.3 2.9 6.3 1.6 3.1 3.6 5.9 2.1 2.8 4.5 5.3 2.3 2.3 4.9 4.2 2.5 1.9 5.4 3.4 2.8 1.4 5.9 2.4 3 0.9 6.2 1.4z"/><path id="Layer" fill-rule="evenodd" class="s1" d="m22.1 55.7c1.3 3.4 4.6 5.6 8.2 5.7 3.6 0.1 6.9-2 8.4-5.3 1.5-3.4 0.8-7.2-1.7-9.9-2.5-2.6-6.3-3.5-9.7-2.2-1.1 0.4-2.2 1.1-3 1.9-0.9 0.8-1.6 1.8-2.1 2.9-0.4 1.1-0.7 2.2-0.7 3.4 0 1.2 0.2 2.4 0.6 3.5z"/><path id="Layer" fill-rule="evenodd" class="s2" d="m16.8 82.5c1.3 3.4 4.5 5.7 8.2 5.8 3.7 0.1 7.1-2 8.6-5.3 1.5-3.4 0.8-7.3-1.7-10-2.6-2.7-6.5-3.6-9.9-2.3-1.1 0.5-2.1 1.1-3 1.9-0.9 0.9-1.6 1.9-2 2.9-0.5 1.1-0.8 2.3-0.8 3.5-0.1 1.2 0.2 2.4 0.6 3.5z"/><path id="Layer" fill-rule="evenodd" class="s3" d="m62.1 81.7q0.6 1.6 1.7 2.9 1.1 1.3 2.6 2.2 1.4 0.9 3.1 1.3 1.7 0.3 3.4 0.2l-2.1-20.7q-0.4 0-0.7 0.1-0.4 0-0.7 0.1-0.4 0.1-0.7 0.2-0.3 0.1-0.7 0.2c-1.2 0.5-2.4 1.2-3.4 2.2-1 0.9-1.8 2-2.4 3.3-0.5 1.2-0.8 2.6-0.8 4-0.1 1.3 0.1 2.7 0.6 4z"/><path id="Layer" fill-rule="evenodd" class="s0" d="m100.3 17.7c2.4 7.9 1.5 18.1-6.8 21.8q-0.8 0.4-1.6 0.6-0.9 0.2-1.7 0.2-0.8 0.1-1.7 0-0.8-0.1-1.6-0.4-1.4-0.4-2.7-1.1-1.3-0.8-2.4-1.8-1-0.9-1.9-2.1-0.9-1.2-1.5-2.5c-5.6-12.7 10.4-20.2 11.1-32.4 3.6 4.2 8.5 10.5 10.8 17.7zm-0.1 45.2l-4 54.6q0 0.5-0.1 1-0.1 0.5-0.3 1-0.2 0.5-0.4 1-0.3 0.5-0.6 0.9c-0.7 0.6-1.4 1-2.3 1.3-0.8 0.2-1.7 0.2-2.6 0-0.8-0.2-1.6-0.6-2.3-1.2-0.6-0.6-1.1-1.3-1.4-2.1q-0.1-0.4-0.2-0.9-0.1-0.4-0.2-0.8 0-0.4-0.1-0.8 0-0.5 0-0.9l-5.4-52.9q2.4 0.5 4.9 0.7 2.5 0.3 5 0.3 2.5 0 5-0.3 2.5-0.3 5-0.9zm-5.5-17.8c2.5 7.5 2.8 8.2 6 14.5-6.5 1.8-13.4 1.5-20.4 0l4.3-14.5c3.2 1.6 7.7 1 10.2 0z"/><path id="Layer" fill-rule="evenodd" class="s4" d="m40.8 101.6c1.3 3.4 4.5 5.7 8.2 5.8 3.7 0.1 7.1-2 8.6-5.4 1.5-3.3 0.8-7.3-1.7-9.9-2.6-2.7-6.5-3.6-9.9-2.3-1.1 0.5-2.1 1.1-3 1.9-0.9 0.9-1.6 1.8-2 2.9-0.5 1.1-0.8 2.3-0.8 3.5-0.1 1.2 0.2 2.4 0.6 3.5z"/></svg>';
  var svg_chevron_down =
    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-icon collapse-icon fa-fw" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>';
  var svg_chevron_right =
    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-icon collapse-icon fa-fw" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>';

  function menuOrderListReset(element) {
    const defaultOrder = [
      "Scenes",
      "Images",
      "Movies",
      "Markers",
      "Galleries",
      "Performers",
      "Studios",
      "Tags",
    ];
    const ul = element.querySelector("ul");
    const lis = Array.from(ul.querySelectorAll("li"));

    // Sort the li elements based on their text content
    lis.sort((a, b) => {
      const aIndex = defaultOrder.indexOf(a.textContent);
      const bIndex = defaultOrder.indexOf(b.textContent);
      return aIndex - bIndex;
    });

    // Append the sorted li elements to the ul in their new order
    lis.forEach((li) => ul.appendChild(li));
  }

  function menuOrderResetButton(elementToAppend) {
    if (!document.getElementById("plugin_theme-menuOrderReset")) {
      const resetButton = document.createElement("button");
      resetButton.id = "plugin_theme-menuOrderReset";
      resetButton.className = "btn btn-primary";
      resetButton.innerHTML = "Reset Menu Order";
      resetButton.addEventListener("click", function () {
        localStorage.removeItem("Style-Plugin-CSS-changeOrderOfNavButtons");
        document
          .getElementById("Style-Plugin-CSS-changeOrderOfNavButtons")
          .remove();
        menuOrderListReset(elementToAppend);
        resetButton.remove();
      });
      elementToAppend.appendChild(resetButton);
    }
  }

  function buildDraggableCSS(themename, category, shortname) {
    const container = document.querySelector(".draggable-ul-container");
    const list = container.querySelectorAll("li");
    let css = "";

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const key = item.getAttribute("data-rb-event-key");
      console.log("key: " + key);
      const order = i - list.length;
      css += `div.nav-link[data-rb-event-key="${key}"] { order: ${order}; }`;
    }

    const style = document.createElement("style");
    style.type = "text/css";
    style.id = shortname;
    style.innerHTML = `nav .navbar-nav:first-child {
      display: flex;
      flex-direction: row;
    }
    ${css}`;

    const existing = document.getElementById(shortname);
    if (existing) {
      existing.remove();
    }

    document.getElementsByTagName("head")[0].appendChild(style);

    const data = {
      name: themename,
      category: category,
      css: css,
      shortname: shortname,
      id: shortname,
      applied: "true",
    };
    localStorage.setItem(shortname, JSON.stringify(data));
    menuOrderResetButton(container.parentElement);
  }

  function buildCSSMain(themename, category, CSSHREF, shortname, applied) {
    if (shortname === "Style-Plugin-Theme-Default") {
      const data = {
        name: themename,
        category: category,
        css: null,
        href: null,
        id: shortname,
        shortname: shortname,
        applied: applied,
      };
      localStorage.setItem(shortname, JSON.stringify(data));
    } else if (shortname != "Style-Plugin-Theme-Default") {
      return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let css;
            css = this.responseText;
            const data = {
              name: themename,
              category: category,
              css: css,
              href: CSSHREF,
              id: shortname,
              shortname: shortname,
              applied: applied,
            };

            localStorage.setItem(shortname, JSON.stringify(data));
            resolve();
          }
        };
        xhr.open("GET", CSSHREF, true);
        xhr.send();
      });
    }
  }

  function checkAppliedCSS(shortname) {
    let selectedCSS = JSON.parse(localStorage.getItem(shortname));
    if (selectedCSS) {
      if (selectedCSS.applied === true || selectedCSS.applied === "true") {
        return true;
      } else if (
        selectedCSS.applied === false ||
        selectedCSS.applied === "false"
      ) {
        return false;
      } else {
        return false;
      }
    } else {
      return false;
      };
    }
  

  function applyCSSMain(name, category, shortname, CSSHREF, applyStyle) {
    if (category === "Themes") {
      // Turn Off old Theme
      let regex = /(Style-Plugin-Theme-.*)/;
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let match = key.match(regex);
        if (match) {
          let selectedCSS = JSON.parse(localStorage.getItem(key));
          selectedCSS.applied = "false";
          let element = document.getElementById(key);
          if (element) {
            element.remove();
          }
          localStorage.setItem(key, JSON.stringify(selectedCSS));
        }
      }

      const theme = JSON.parse(localStorage.getItem(shortname));
      if (!theme && shortname != "Style-Plugin-Theme-Default") {
        buildCSSMain(name, category, CSSHREF, shortname, "true").then(() => {
          const themeSelect = JSON.parse(localStorage.getItem(shortname));
          const style = document.createElement("style");
          style.type = "text/css";
          style.id = shortname;
          style.innerHTML = themeSelect.css;
          document.getElementsByTagName("head")[0].appendChild(style);
          return;
        });
      } else if (!theme && shortname === "Style-Plugin-Theme-Default") {
        buildCSSMain(shortname, category, null, shortname, "true");
      } else if (theme && theme.shortname === "Style-Plugin-Theme-Default") {
        theme.applied = "true";
        localStorage.setItem(shortname, JSON.stringify(theme));
      } else if (theme && theme.shortname !== "Style-Plugin-Theme-Default") {
        theme.applied = "true";
        localStorage.setItem(shortname, JSON.stringify(theme));
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = shortname;
        style.innerHTML = theme.css;
        document.getElementsByTagName("head")[0].appendChild(style);
      }
    } else {
      const css = JSON.parse(localStorage.getItem(shortname));
      if (css) {
        if (
          applyStyle === "false" ||
          applyStyle === false ||
          applyStyle === undefined
        ) {
          if (css.applied === true || css.applied === "true") {
            css.applied = "false";
            localStorage.setItem(shortname, JSON.stringify(css));
            document.getElementById(shortname).remove();
          } else {
            css.applied = "true";
            localStorage.setItem(shortname, JSON.stringify(css));
            const style = document.createElement("style");
            style.type = "text/css";
            style.id = shortname;
            style.innerHTML = css.css;
            document.getElementsByTagName("head")[0].appendChild(style);
          }
        } else {
          css.applied = "true";
          localStorage.setItem(shortname, JSON.stringify(css));
          const style = document.createElement("style");
          style.type = "text/css";
          style.id = shortname;
          style.innerHTML = css.css;
          document.getElementsByTagName("head")[0].appendChild(style);
        }
      } else {
        buildCSSMain(shortname, category, CSSHREF, shortname, "true").then(
          () => {
            const themeSelect = JSON.parse(localStorage.getItem(shortname));
            const style = document.createElement("style");
            style.type = "text/css";
            style.id = shortname;
            style.innerHTML = themeSelect.css;
            document.getElementsByTagName("head")[0].appendChild(style);
            return;
          }
        );
      }
    }
  }

  function themeSwitch_createbutton() {
    if (!document.getElementById("plugin_theme")) {
      const plugin_div = document.createElement("div");
      plugin_div.className = "mr-2 dropdown";
      plugin_div.innerHTML =
        '<button id="plugin_theme" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown-toggle minimal d-flex align-items-center h-100 btn btn-primary" title="Theme Switcher">' +
        svg_main_button +
        "</button>";

      const themes_div = document.createElement("div");
      themes_div.className = "dropdown-menu";
      themes_div.style =
        "position: absolute; top: 0px; left: 0px; margin: 0px; opacity: 0; pointer-events: none;";

      document.addEventListener("click", function (event) {
        const isClickInside =
          plugin_div.contains(event.target) ||
          themes_div.contains(event.target);
        const isClickInsideThemesDiv = themes_div.contains(event.target);
        const plugin_theme = document.getElementById("plugin_theme");
        const expanded = plugin_theme.getAttribute("aria-expanded") === "true";

        if (expanded && !isClickInsideThemesDiv) {
          plugin_theme.setAttribute("aria-expanded", "false");
          themes_div.classList.remove("show");
          themes_div.style =
            "position: absolute; top: 0px; left: 0px; margin: 0px; opacity: 0; pointer-events: none;";
        } else if (!expanded && isClickInside) {
          plugin_theme.setAttribute("aria-expanded", "true");
          themes_div.classList.add("show");
          themes_div.style =
            "position: absolute; top: 133%; left: 0px; margin: 0px; opacity: 1; pointer-events: auto; width: max-content; min-width: 20rem; left: -575%;";
        } else if (!isClickInside && !isClickInsideThemesDiv) {
          plugin_theme.setAttribute("aria-expanded", "false");
          themes_div.classList.remove("show");
          themes_div.style =
            "position: absolute; top: 0px; left: 0px; margin: 0px; opacity: 0; pointer-events: none;";
        }
      });

      function expandCollapse(index, name, span, collapse) {
        let categorySpanClick = document.getElementById(span);
        let categoryCollapseClick = document.getElementById(collapse);
        let expanded =
          categoryCollapseClick.getAttribute("aria-expanded") === "true";

        if (expanded) {
          categoryCollapseClick.setAttribute("aria-expanded", "false");
          categoryCollapseClick.classList.add("expanding");
          setTimeout(function () {
            categoryCollapseClick.classList.remove("show");
            categoryCollapseClick.classList.remove("expanding");
            categorySpanClick.innerHTML =
              svg_chevron_right + CATEGORYORDER[index];
          }, 300);
        } else {
          categoryCollapseClick.setAttribute("aria-expanded", "true");
          categoryCollapseClick.classList.add("expanding");
          setTimeout(function () {
            categoryCollapseClick.classList.add("show");
            categoryCollapseClick.classList.remove("expanding");
            categorySpanClick.innerHTML =
              svg_chevron_down + CATEGORYORDER[index];
          }, 300);
        }
      }

      const accordion = document.createElement("div");
      accordion.className = "criterion-list accordion";
      accordion.style = "max-width: 20rem !important;";
      const header = document.createElement("div");
      header.innerHTML = "Darkonite by Dankonite";
      header.className = "modal-header";
      accordion.append(header);

      for (var i = 0; i < CATEGORYORDER.length; i++) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "card";
        categoryDiv.setAttribute("data-type", CATEGORYORDER[i]);
        categoryDiv.setAttribute("id", "themeplugin-card-" + CATEGORYORDER[i]);
        categoryDiv.style = "padding: 2px !important;";
        const categoryHeader = document.createElement("div");
        categoryHeader.className = "card-header";
        categoryHeader.style = "padding: 0.375rem 0.625rem !important;";
        const categorySpan = document.createElement("span");
        categorySpan.innerHTML = svg_chevron_right + CATEGORYORDER[i];
        categorySpan.setAttribute("id", "themeplugin-span-" + CATEGORYORDER[i]);
        const collapseDiv = document.createElement("div");
        collapseDiv.className = "collapse";
        collapseDiv.setAttribute("aria-expanded", "false");
        collapseDiv.setAttribute(
          "id",
          "themeplugin-collapse-" + CATEGORYORDER[i]
        );
        categoryDiv.addEventListener(
          "click",
          (function (index) {
            return function (event) {
              if (!event.target.closest(".collapse")) {
                expandCollapse(
                  index,
                  "themeplugin-card-" + CATEGORYORDER[index],
                  "themeplugin-span-" + CATEGORYORDER[index],
                  "themeplugin-collapse-" + CATEGORYORDER[index]
                );
              }
            };
          })(i),
          { capture: true }
        );

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        var editorDiv = document.createElement("div");
        editorDiv.className = "criterion-editor";
        var blankDiv = document.createElement("div");
        var optionListFilter = document.createElement("div");
        optionListFilter.className = "option-list-filter";
        blankDiv.append(optionListFilter);
        editorDiv.append(blankDiv);
        cardBody.append(editorDiv);
        collapseDiv.append(cardBody);
        categoryHeader.append(categorySpan, collapseDiv);
        const fieldset = document.createElement("fieldset");
        fieldset.className = "checkbox-switch";
        for (var j = 0; j < FILES.length; j++) {
          let name = FILES[j].name;
          let category = FILES[j].category;
          let href = FILES[j].href;
          let shortname = FILES[j].shortname;
          let themeData = {
            name: name,
            category: category,
            href: href,
            shortname: shortname,
          };
          if (
            localStorage.getItem(shortname)
            ) {
            } else {
              if (
              FILES[j].activebydefault === "true"
              ) {
              console.log(shortname + " not found, making");
              setdefaultcss(shortname, category, href)
              }
              
            }
          if (
            CATEGORYORDER[i] === FILES[j].category &&
            FILES[j].category === "Change Order of Menu Bar"
          ) {
            // Check if the "CSS-changeOrderOfNavButtons" CSS is in localStorage
            const draggableStylesheetContent = localStorage.getItem(
              "Style-Plugin-CSS-changeOrderOfNavButtons"
            );
            if (draggableStylesheetContent) {
              // Read the stylesheet content and create an array called "elements"
              var reset = true;
              var navMenuItems = [];
              const css = JSON.parse(draggableStylesheetContent).css;
              const regex = /data-rb-event-key="\/([^"]+)"/g;
              let match;
              while ((match = regex.exec(css))) {
                const key = match[1];
                if (match[1] === "scenes/markers") {
                  const name = "Markers";
                  navMenuItems.push({ name, key });
                } else {
                  const name =
                    match[1].charAt(0).toUpperCase() + match[1].slice(1);
                  navMenuItems.push({ name, key });
                }
              }
              navMenuItems.sort((a, b) => a.order - b.order);
            } else {
              var navMenuItems = [
                { name: "Scenes", key: "scenes" },
                { name: "Images", key: "images" },
                { name: "Movies", key: "movies" },
                { name: "Markers", key: "scenes/markers" },
                { name: "Galleries", key: "galleries" },
                { name: "Performers", key: "performers" },
                { name: "Studios", key: "studios" },
                { name: "Tags", key: "tags" },
              ];
            }
            var label = document.createElement("label");
            label.setAttribute("for", CATEGORYORDER[i] + "-" + FILES[j].name);
            label.innerHTML = " " + FILES[j].instructions;
            optionListFilter.appendChild(label);
            const formCheck = document.createElement("ul");
            formCheck.className = "draggable-ul-container";
            for (let i = 0; i < navMenuItems.length; i++) {
              const li = document.createElement("li");
              li.className = "draggable-li";
              li.setAttribute("data-rb-event-key", "/" + navMenuItems[i].key);
              li.setAttribute("draggable", true);
              const newSpan = document.createElement("span");
              newSpan.className = "grippy";
              li.appendChild(newSpan);
              const textNode = document.createTextNode(navMenuItems[i].name);
              li.appendChild(textNode);
              formCheck.appendChild(li);
            }

            optionListFilter.appendChild(formCheck);

            if (reset) {
              menuOrderResetButton(optionListFilter);
            }
          } else if (
            CATEGORYORDER[i] === FILES[j].category &&
            FILES[j].category != "Change Order of Menu Bar"
          ) {
            const forRow = document.createElement("div");
            forRow.className = "checkbox-switch-form-row";
            var legend = document.createElement("legend");
            legend.innerHTML = FILES[j].name;
            legend.className = "legend-right";
            const input = document.createElement("input");

            if (CATEGORYORDER[i] === "Themes") {
              input.type = "radio";
              input.name = "themeGroup";
              const applied = checkAppliedCSS(shortname, "Themes");
              input.checked = applied;
            } else {
              input.type = "checkbox";
              const applied = checkAppliedCSS(shortname, "CSS");
              input.checked = applied;
            }

            input.setAttribute("id", CATEGORYORDER[i] + "-" + FILES[j].name);
            input.addEventListener(
              "click",
              (function (themeData) {
                return function () {
                  applyCSSMain(
                    themeData.name,
                    themeData.category,
                    themeData.shortname,
                    themeData.href
                  );
                };
              })(themeData),
              false
            );

            var label = document.createElement("label");
            label.setAttribute("for", CATEGORYORDER[i] + "-" + FILES[j].name);
            label.title = "Turn " + FILES[j].name + " on/off";
            label.className = "checkbox-right";

            // Append the legend, input, and label elements to the fieldset element
            forRow.appendChild(legend);
            forRow.appendChild(input);
            forRow.appendChild(label);
            fieldset.appendChild(forRow);
            optionListFilter.appendChild(fieldset);
          }
          categoryDiv.append(categoryHeader);
          accordion.append(categoryDiv);
        }
      }
      themes_div.append(accordion);
      plugin_div.append(themes_div);

      waitForElementClass("navbar-buttons", function () {
        const main_Div = document.getElementsByClassName("navbar-buttons")[0];
        const secondLastChild =
          main_Div.childNodes[main_Div.childNodes.length - 4];
        main_Div.insertBefore(plugin_div, secondLastChild);
      });
    }
  }

  function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {
      enableDragList(list);
    });
  }
  
  function setdefaultcss(shortname, category, href) {
    return new Promise((resolve) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let css;
          css = this.responseText;
          let data = {
            name: shortname,
            category: category,
            css: css,
            href: href,
            id: shortname,
            shortname: shortname,
            applied: "true",
          }; 
          localStorage.setItem(shortname, JSON.stringify(data));
          resolve();
        }
      };
      xhr.open("GET", href, true);
      xhr.send();
    });
    
  }

  function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {
      enableDragItem(item);
    });
  }

  function enableDragItem(item) {
    item.setAttribute("draggable", true);
    item.addEventListener("touchstart", handleTouchStart, { passive: true });
    item.addEventListener("touchmove", handleTouchMove, { passive: true });
    item.addEventListener("touchend", handleTouchEnd, { passive: true });
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  }

  let touchEndY = null;

  function handleTouchStart(event) {
    event.preventDefault();
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    event.preventDefault();
    touchEndY = event.changedTouches[0].clientY;
    const selectedItem = event.target,
      list = selectedItem.parentNode;
    selectedItem.classList.add("drag-sort-active");
    let swapItem =
      document.elementFromPoint(
        selectedItem.getBoundingClientRect().x,
        touchEndY
      ) === null
        ? selectedItem
        : document.elementFromPoint(
            selectedItem.getBoundingClientRect().x,
            touchEndY
          );

    if (list === swapItem.parentNode) {
      swapItem =
        swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }

  function handleTouchEnd(event) {
    event.preventDefault();
    touchEndY = event.changedTouches[0].clientY;
    handleDragTouch(event.target);
  }

  function handleDragTouch(item) {
    const selectedItem = item,
      list = selectedItem.parentNode;
    selectedItem.classList.remove("drag-sort-active");
    let swapItem =
      document.elementFromPoint(
        selectedItem.getBoundingClientRect().x,
        touchEndY
      ) === null
        ? selectedItem
        : document.elementFromPoint(
            selectedItem.getBoundingClientRect().x,
            touchEndY
          );

    if (list === swapItem.parentNode) {
      swapItem =
        swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
    setTimeout(() => {
      buildDraggableCSS(
        "Change the order of navigation bar buttons",
        "Change Order of Menu Bar",
        "Style-Plugin-CSS-changeOrderOfNavButtons"
      );
    }, 100);
  }

  function handleDrag(item) {
    const selectedItem = item.target,
      list = selectedItem.parentNode,
      x = event.clientX,
      y = event.clientY;

    selectedItem.classList.add("drag-sort-active");
    let swapItem =
      document.elementFromPoint(x, y) === null
        ? selectedItem
        : document.elementFromPoint(x, y);

    if (list === swapItem.parentNode) {
      swapItem =
        swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }

  function handleDrop(item) {
    item.target.classList.remove("drag-sort-active");
    setTimeout(() => {
      buildDraggableCSS(
        "Change the order of navigation bar buttons",
        "Change Order of Menu Bar",
        "Style-Plugin-CSS-changeOrderOfNavButtons"
      );
    }, 100);
  }

  (() => {
    enableDragSort("drag-sort-enable");
  })();

  waitForElementClass("draggable-ul-container", function () {
    enableDragSort("draggable-ul-container");
  });

  window.addEventListener("load", function () {
    // Apply Defualt Plugin CSS
    function loadDefaultCSS(i) {
      const defaultCSS = JSON.parse(
        localStorage.getItem(LIBRARIES[i].shortname)
      );
      if (defaultCSS) {
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = defaultCSS.shortname;
        style.innerHTML = defaultCSS.css;
        document.getElementsByTagName("head")[0].appendChild(style);
      } else {
        buildCSSMain(
          LIBRARIES[i].name,
          LIBRARIES[i].category,
          LIBRARIES[i].href,
          LIBRARIES[i].shortname,
          "false"
        );
        setTimeout(() => {
          loadDefaultCSS(i);
        }, 1000);
      }
    }

    for (var i = 0; i < LIBRARIES.length; i++) {
      loadDefaultCSS(i);
    }

    // Apply active Themes and stylesheets
    let selectedTheme;
    let regex = /(Style-Plugin(?!-Theme-Default).*)/;
    let defaultRegex = /(Style-Plugin-Theme-Default)/;
    let defaultFound = false;
    let AppliedThemeOtherThanDefault = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let match = key.match(regex);
      let defaultMatch = key.match(defaultRegex);
      if (defaultMatch) {
        defaultFound = true;
      }
      if (match) {
        selectedTheme = JSON.parse(localStorage.getItem(key));
        if (selectedTheme.active === true || selectedTheme.applied === "true") {
          AppliedThemeOtherThanDefault.push("True");
          applyCSSMain(
            selectedTheme.name,
            selectedTheme.category,
            selectedTheme.shortname,
            selectedTheme.href,
            true
          );
        }
      }
    }

    if (!defaultFound) {
      let setDefaultActive;
      if (AppliedThemeOtherThanDefault.length > 0) {
        setDefaultActive = "false";
      } else {
        setDefaultActive = "true";
      }
      buildCSSMain(
        "Style-Plugin-Theme-Default",
        "Themes",
        null,
        "Style-Plugin-Theme-Default",
        setDefaultActive
      );
    }
  });

  function waitForElementClass(elementId, callBack, time) {
    time = typeof time !== "undefined" ? time : 100;
    window.setTimeout(function () {
      var element = document.getElementsByClassName(elementId);
      if (element.length > 0) {
        callBack(elementId, element);
      } else {
        waitForElementClass(elementId, callBack);
      }
    }, time);
  }

  themeSwitch_createbutton();
})();
