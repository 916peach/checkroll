<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Document</title>
    <?php
        // 判断提交的参数是否完整,如果存在就返回该参数；
        function is_post($str){
            $res;
            if($_POST[$str]){
                $res=$_POST[$str];
            }else{
                $res = 'no';
                
                die('参数不全');
            }
            return $res;
        }
    
    ?>
</head>
<body>
    <h1>数据库配置说明</h1>
    <p>
    <?php
        // 判断是否已经存储了数据库信息；
        $file='./option_database.json';
        $open = fopen($file,'a+');
        $content='';
        while(!feof($open)){
        $content.=fgets($open); 
        }
        // 判断数据库信息是否配置完成；
        if($content){
            fclose($open);
            exit('数据库信息已经配置完成');
            
        }
        // 创建数据库链接

        $con = new mysqli(is_post('dburl'),is_post('dbname'),is_post('dbpwd'));
        // $con = new mysqli('localhost:3306','root','root');
        if($con->connect_error){
            die('链接错误');
        }

        $sql="create database ".is_post('database').";";
        if($con->query($sql)){
            echo '操作成功';
        }else{
            echo '操作失败';
        }
        $con->close();

        $db_connect_info=array('dburl'=>is_post('dburl'),'dbname'=>is_post('dbname'),'dbpwd'=>is_post('dbpwd'),'database'=>is_post('database'));
        fwrite($open,json_encode($db_connect_info));
        fclose($open);


        ?>
    </p>
</body>
</html>



