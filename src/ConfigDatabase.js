var React=require('react');
var ConfigDatabase=React.createClass({
  render:function(){
    var url='http://localhost/checkroll/php/option_database.php';
    var formStyle={
      width:500,
      margin:'0 auto',
      paddingTop:100
    }
    return <form onSubmit={this.handleSub} action={url} style={formStyle} method="post">
      <div className="form-group">
        <label className="label-control">请输入数据库地址</label>
        <input name="dburl" className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label className="label-control">请输入数据库用户名</label>
        <input name="dbname" className="form-control" type="text" />
      </div>
      <div className="form-group">
        <label className="label-control">请输入数据库密码</label>
        <input name="dbpwd" className="form-control" type="password" />
      </div>
      <div className="form-group">
        <label className="label-control">请输入数据库名称</label>
        <input name="database" className="form-control" type="text" />
      </div>
      <div className="form-group">

        <input className="btn btn-info btn-block" type="submit" />
      </div>
    </form>
  },
  handleSub:function(ev){
    // ev.preventDefault();

  }

});
module.exports=ConfigDatabase;
