const ancss = require('@onsenui/ancss');
const fs = require('fs');

module.exports = function() {
  return function(files, metalsmith, done) {
    metalsmith.metadata().cssComponentCategories = groupByCategory(generateCssReferenceMetadata());
    done();
  };
};

function generateCssReferenceMetadata() {
  const css = fs.readFileSync(__dirname + '/../dist/v2/OnsenUI/build/css/onsen-css-components.css', 'utf-8');
  const components = ancss.parse(css, {detect: line => line.match(/^~/)}).map(component => {
    const annotation = component.annotation;
    if (annotation.elements) {
      annotation.elements = annotation.elements.split(/\s+/);
    }
    return component;
  });

  return components;
}

function groupByCategory(components) {
  const categoryDict = new Map();

  components.forEach(component => {
    if (!component.annotation.category) {
      console.log('CSS Component\'s category is not defined: ' + JSON.stringify(component.annotation));
    } else {

      if (!categoryDict.has(component.annotation.category)) {
        categoryDict.set(component.annotation.category, []);
      }

      categoryDict.get(component.annotation.category).push(component);
    }
  });

  return Array.from(categoryDict.keys()).map(key => {
    return {
      name: key,
      id: key.replace(/ +/g, '-').toLowerCase(),
      components: categoryDict.get(key)
    };
  });
};
