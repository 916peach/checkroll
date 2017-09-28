<meta charset="utf-8"/>
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

function is_tables_name($str,$arr){
    global $content;
    
    foreach($arr as $val){
        if($val['Tables_in_'.$content['database']]==$str){
            return false;
        }
    }
    return true;
}

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
$add_table_sql='create table '.is_post('table-name').'(id int(4) not null primary key auto_increment,name varchar(255) not null,age int(2) not null,sex varchar(255) not null);';
if(is_post('table-name')){
    
    if(is_tables_name(is_post('table-name'),$resData)){
        if(!$con->query($add_table_sql)){
            die('创建表错误');
        };
        echo '创建表成功';
    }else{
        echo '表已存在';
    }
    
}

$con->close();

?>
<script>
    location.href="table_all_showh.php";
</script>
