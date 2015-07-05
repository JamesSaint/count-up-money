<!DOCTYPE html>
<html lang="en_GB">
<head>
</head>
<body>

    <span id="number"> <?=(int)((time()-15595199)/357.13);?></span>

    <script type="text/javascript">

     var i = <?=(int)((time()-15595199)/1);?>;
     function increment() {
     i++;
     document.getElementById('number').innerHTML = i;
     }
     function numberWithCommas(i) {
     return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
     setInterval('increment()', 1);
    </script>

</body>
</html>