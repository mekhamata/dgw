window.interdeal = {
  sitekey: "28d8bd8e2e18e25596ac0655040d2c12",
  Position: "Left",
  Menulang: "HE",
  domains: {
    js: "https://cdn.equalweb.com/",
    acc: "https://access.equalweb.com/",
  },
  btnStyle: {
    vPosition: ["80%", null],
    scale: ["0.6", "0.6"],
    color: {
      main: "#1876c9",
      second: "",
    },
    icon: {
      type: 7,
      shape: "semicircle",
      outline: false,
    },
  },
};
(function (doc, head, body) {
  var coreCall = doc.createElement("script");
  coreCall.src = interdeal.domains.js + "core/4.5.2/accessibility.js";
  coreCall.defer = true;
  coreCall.integrity =
    "sha512-GVvo5c2SV7jwI6rUxQrAjIT6u0WHdJ+pbzRZyzfhOUGMaiKekbDs26ipItwEjD9jCvaV1qWbWurNBQGF5eY9aw==";
  coreCall.crossOrigin = "anonymous";
  coreCall.setAttribute("data-cfasync", true);
  body ? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
