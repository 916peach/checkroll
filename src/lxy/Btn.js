var React = require('react');

var Btn = React.createClass({
  render:function(){
    var msg = '按钮';
    return <button>{msg}</button>
  }
})

module.exports = Btn;
