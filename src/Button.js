var React=require('react');
var Button = React.createClass({
  getDefaultProps:function(){
    console.log('gitDefaultProps')
    return {
      msg:'确定'
    }
  },
  getInitialState:function(){
    console.log('getInitialState'+' '+this.props.msg);
    return {
      index:0
    }
  },

  componentWillMount:function(){
    console.log('componentWillMount'+' '+this.props.msg);
    console.log(this.refs.btn);
  },
  componentDidMount:function(){
    console.log('componentDidMount'+' '+this.props.msg);
    console.log(this.refs.btn);
  },
  shouldComponentUpdate:function(newProps,newState){//当state和props改变时才会执行
    console.log('shouldComponentUpdate'+' '+this.props.msg);
    console.log(newProps,newState);
    return true;
  },
  componentWillUpdate:function(newProps,newState){
    console.log('componentWillUpdate'+' '+this.props.msg);

  },
  handleClick:function(){
    this.setState({
      index:1
    })
  },
  render:function(){
    console.log('render'+' '+this.props.msg);
    return <button ref="btn" onClick={this.handleClick}>
      {this.props.msg+this.state.index}
    </button>

  }
});
module.exports=Button;
