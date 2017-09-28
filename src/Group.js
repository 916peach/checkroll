var React=require('react');
var Group=React.createClass({
  render:function(){
    var students=[{name:'张三'},{name:'李晓燕'},{name:'王韬涛'},{name:'孙权'},{name:'李四'}];
    var listyle={
      float:'left'

    }
    return <div>
      <h1>花名册</h1>
      <div>
        
      </div>
      <ul>

        {
          students.map(function(val,key){
            return <li key={key} style={listyle}>{val.name}</li>
          })
        }
      </ul>


    </div>
  }
});
module.exports=Group;
