var vdom = require('virtual-dom');
var h = vdom.h;
var List = require('../List.js');

function Link(url, words) {
  return h('a', {href: url}, [words]);
}

var state = List({
  items: [
    {
      name: 'location',
      children: ['seattle', 'olympia', 'tangier']
    },
    {
      name: 'meats',
      children: [
        Link('ham', 'ham'),
        Link('fish', 'some kinds of fish'),
        Link('hot-dogs', 'hot dogs')
      ]
    }
  ]
});

var loop = require('main-loop')( state(), List.render.bind(null, h), vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
