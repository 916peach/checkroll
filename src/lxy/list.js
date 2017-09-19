require('./list.css');
var React = require('react');
var msg = require('../json/list.json');

// console.log(msg);
var List = React.createClass({
  render:function(){
    return <table className="table table-hover table-striped"><tbody>{
      msg.map(function(item,index){
        console.log(item,index);
        return <tr key={index}><td>姓名: {item.name}</td><td>年龄: {item.age}</td><td>性别: {item.sex}</td></tr>
      })
    }</tbody></table>
  }
});
module.exports = List;
