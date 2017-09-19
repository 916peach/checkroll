var React=require('react');
var Button=require('./Button.js');

var Wrap=React.createClass({
  getInitialState:function(){
    return {
      msg:'wrap'
    }
  },
  handleClick:function(){
    this.setState({
      msg:'wrap'
    });
  },
  render:function(){
    return <div onClick={this.handleClick} style={{width:'200px', height:'200px', backgroundColor:'red'}}>

      <Button msg="wrap" />
    </div>
  }
});
module.exports=Wrap;
