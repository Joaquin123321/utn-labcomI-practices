<body>
    <input type="text" id="num1">
    <input type="text" id="num2">
    <input type="button" value="Calcular mayor número" onclick="mayor()">
    
    <script>
    
        function mayor(){
            var num1 = parseInt(document.getElementById("num1").value)
            var num2 = parseInt(document.getElementById("num2").value)
            
            if (num1 > num2){
                alert("El número "+ num1 + " es el mayor")
            }
            else{
                alert("El número " + num2 + " es el mayor")
            }
        }

    </script>
</body>