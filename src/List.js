var React=require('react');
var ps=require('./Sure.js').ps;

var oData=require('./json/list.json');
var List=React.createClass({
  render:function(){
      var self=this;
      return <div style={{width:'400px'}}>

      <ul>
        {
          this.state.data.map(function(val,key){
            return <li key={key} className="list-group-item text-center">
              <div className="row">
              <span className="col-xs-3">{val.name}</span>
              <span className="col-xs-3">{val.age}</span>
              <span className="col-xs-3">{val.sex}</span>
              <span className="col-xs-3" style={{cursor:'pointer'}} onClick={self.handleClick.bind(self,key)}>X</span>
              </div>
            </li>
          })

        }
      </ul>
      </div>
  },
  handleClick:function(key){
    this.key=key;
    ps.publish('issure','block');

  },
  getInitialState:function(){
    return {
      data:oData
    }
  },
  componentDidMount:function(){
    var self=this;
    ps.subscribe('del',function(){
      console.log('删除'+self.key);
      var oData=self.state.data;
      oData.splice(self.key,1);
      self.setState({
        data:oData
      });
    })
  }

});
module.exports=List;
