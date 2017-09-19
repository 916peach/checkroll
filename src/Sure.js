var React=require('react');
var style=require('./css/sure.css');
var PubSub=require('PubSub');
var ps=new PubSub();
var Sure=React.createClass({
  getDefaultProps:function(){

    return {
      ok:'确定',
      no:'取消'
    }
  },
  componentDidMount:function(){
    var self=this;
    ps.subscribe('issure',function(data){
      self.setState({
        isShow:{
          display:data
        }
      })
    });
  },
  getInitialState:function(){
    return {
      isShow:{
        display:'none'
      }
    }
  },

  cancelClick:function(){
    this.setState({
      isShow:{
        display:'none'
      }
    });
  },
  sureClick:function(key){
    this.cancelClick();
    ps.publish('del');

  },
  render:function(){
    return <div className="alertInfo" style={this.state.isShow}>
      <div>
          <p>{this.props.msg}</p>
          <button onClick={this.sureClick}>{this.props.ok}</button>
          <button onClick={this.cancelClick}>{this.props.no}</button>
      </div>
    </div>
  }
});
module.exports={Sure:Sure,ps:ps};
