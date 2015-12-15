var state = require('@nichoth/state');
var oArray = require('observ-array');

module.exports = List;


function List(opts) {
  opts = opts || {};
  opts.items = opts.items || [];

  var s = state({
    items: oArray(opts.items)
  });

  return s;
}


List.render = function(h, state) {

  var items = state.items.map(function(it) {
    return h('li.vdom-list-parent', [
      h('span.vdom-list-parent-label', it.name),
      h('ul.vdom-list-nested', it.children.map(function(c) {
        return h('li.vdom-list-child', c);
      }))
    ]);
  });

  return h('ul.vdom-list.vdom-list-top', items);
};
