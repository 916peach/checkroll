<?php
        function get_tables_list(){
            global $con;
            $res=$con->query('show tables;');
            $resData=array();
            if($res->num_rows>0){
                while($value=$res->fetch_assoc()){
                    array_push($resData,$value);
                }
            }
            return $resData;
        }
       

        $file='./option_database.json';
        $open = fopen($file,'r');
        $content='';
        while(!feof($open)){
            $content.=fgets($open);
        }
        $content=json_decode($content,true);
        $con = new mysqli($content['dburl'],$content['dbname'],$content['dbpwd']);
        if($con->connect_error){
            die('数据库链接错误');
        }
        
        $con->query('use '.$content['database'].';');
        $con->query('set names "utf8";');
       
        $resData=get_tables_list();

        $con->close();
        
    ?>