<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../dist/bootstrap-3.3.7-dist/css/bootstrap.min.css" />
    <style>
        .table-list{
            width:400px;
        }
        #sub-form{
            position:absolute;
            left:0; top:0; right:0; bottom:0;
            background:rgba(0,0,0,0.4);
            padding-top:50px;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <?php   require './table_all_showp.php' ?>
        <div class="table-list center-block">
            <ul class="list-group">
                <?php foreach($resData as $val){ ?>
                    <a href="###" class="list-group-item"><?php echo $val['Tables_in_'.$content['database']] ?><button data-tablename=<?php echo $val['Tables_in_'.$content['database']] ?> class="close"><span>&times;</span></button></a>
                <?php } ?>
                <a href="###" class="list-group-item text-center">
                    <button id="add-table" class="btn btn-default">
                        <span class="glyphicon glyphicon-plus"></span>
                    </button>
                </a>
                
            </ul>
        </div>
        <form action="table_all_add.php" class="form-inline text-center" id="sub-form" style="display:none;" method="post">
            <input type="text" name="table-name" class="form-control center-block" style="width:50%" placeholder="请属于要添加的表名" required autofocus />
            <input type="submit" class="btn btn-primary">
        </form>
        
    <script src="../dist/jquery-2.1.4.min.js"></script>
    <script src="../dist/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    <script>
        var oAddTable=$('#add-table');
        var oSubForm=$('#sub-form');
        var oTableList=$('.table-list');
        // 唤醒添加表名的操作；
        oAddTable.on('click',function(){
            oSubForm.show();
        });
        // 删除表名操作；
        oTableList.on('click','button.close',function(){
            var that=$(this);
            $.post('table_all_delete.php',{
                tablename:this.dataset['tablename']
            },function(data){
                var oData=JSON.parse(data);
                if(oData.code==1){
                    alert(oData.msg);
                    that.parent('a').remove();
                }else if(oData.code==2){
                    alert(oData.msg);
                }else if(oData.code==3){
                    alert(oData.msg);
                }

            });
        })
        
    </script>
        


</body>
</html>