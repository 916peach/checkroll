<?php 
    
    function is_post($str){
        if(array_key_exists($str,$_POST)){
            if($_POST[$str]){
                return $_POST[$str];
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    $file='option_database.json';
    $open = fopen($file,'r');
    $content = '';
    while(!feof($open)){
        $content.=fgets($open);
    }
    $content=json_decode($content,true);
    $con = new mysqli($content['dburl'],$content['dbname'],$content['dbpwd']);
    if($con->connect_error){
        die('数据库链接错误');
    }
    $con->query('use '.$content['database'].';');
    $con->query('set names utf8;');
    $res = $con->query('show tables;');
    $resData=array();
    if($res->num_rows>0){
        while($values=$res->fetch_assoc()){
            array_push($resData,$values);
        }
    }
    function is_tables_name($str,$arr){
        global $content;
        
        foreach($arr as $val){
            if($val['Tables_in_'.$content['database']]==$str){
                return false;
            }
        }
        return true;
    }

    if(!is_tables_name(is_post('tablename'),$resData)){
        $resdel=$con->query('drop table '.is_post('tablename').';');
        if($resdel){
            echo '{"code":"1","msg":"删除成功"}';
        }else{
            echo '{"code":"0","msg":"删除失败"}';
        }
    }else{
        echo '{"code":"2","msg":"该表不存在"}';
    }
    
    $con->close();


?>