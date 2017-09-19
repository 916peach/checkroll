var React = require('react');
var oData=require('./json/filefload.json');
var FileFload=React.createClass({
  render:function(){
    var index=0;
    var self=this;
    function loadFile(oData){
      return oData.map(function(val,key){
        if(val.dirname){
          index++
          return <div key={key} className="panel panel-success">
          <div className="panel-heading">
            <span ref={'btn'+index} style={{cursor:'pointer',marginRight:'10px',fontSize:'20px'}} onClick={self.handleClick.bind(self,index)}>-</span>
            <span>{val.dirname}</span>
          </div>

          <div className="panel-body">{loadFile(val.children)}</div>

          </div>
        }else{
          return <div className="panel-body" key={key}>
            <span>{val.filename}</span>
            </div>
        }
      })
    }
    return <div  className="panel panel-group">  {loadFile(oData)}  </div>
  },
  handleClick:function(index){
    var dom=this.refs['btn'+index];
    var oUl=dom.parentNode.nextElementSibling||dom.parentNode.nextSibing;
    if(dom.getAttribute('index')==null||dom.getAttribute('index')=='block'){
      oUl.style.display='none';
      dom.innerHTML='+';
      dom.setAttribute('index','none');
    }else{
      oUl.style.display='block';
      dom.innerHTML='-';
      dom.setAttribute('index','block');
    }

  }
});
module.exports=FileFload;
