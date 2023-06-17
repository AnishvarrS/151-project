// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      radius: { type: "number", default: 150 },
      height: { type: "number", default: 3 },
    },

    init: function () {
      this.el.setAttribute("geomentry", {
        primitive: "cylinder",
        radius: this.data.radius,
        height: this.data.height,
      });
       this.el.setAttribute("material", { color: "#1769aa"});
      }
      
  });