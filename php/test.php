<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php  $arr=array(1,2,3) ?>
    <div>
        <ul>
            <?php foreach($arr as $value){ ?>
            <li><?php echo $value  ?></li> 
            <?php } ?>
        </ul>
    </div>
    
</body>
</html>