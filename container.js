const dependable = require("dependable");
const path = require("path");

const container = dependable.container();

const simpleDependencies = [["_", "lodash"]];

simpleDependencies.forEach(function (val) {
  container.register(val[0], function () {
    return require(val[1]);
  });
});
