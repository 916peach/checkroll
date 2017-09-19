var React = require('react');
// import {React} from 'react';
var Hello=React.createClass({
  render:function(){
    return <div>
        <h1>{this.props.msg}</h1>
        <div className="btn btn-primary">确定</div>
    </div>



  }
});
module.exports=Hello;
