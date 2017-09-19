var React = require('react');

var Fbtn = React.createClass({
  getInitialState:function(){


    return {
      init: 1
    }
  },
  handleChange: function(ev){
    // console.log(ev.target.value);
    this.setState({
      init:parseInt(ev.target.value)
    })
  },
  handleAdd: function(){

    this.setState({
      init:this.state.init+1
    })
  },
  handleDis: function(){
    this.setState({
      init: this.state.init-1
    })
  },
  render: function(){
    var add = '增加';
    var dis = '减少';
    return <div>
      <button onClick={this.handleAdd}>{add}</button>
      <input value={this.state.init} onChange={this.handleChange} />
      <button onClick={this.handleDis}>{dis}</button>
    </div>
  }
})

module.exports = Fbtn;
