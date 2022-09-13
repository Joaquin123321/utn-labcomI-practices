<body>
    <input type="text" id="myText">
    <input type="button" value="Calcular cuadrado" onclick="cuadrado()">
    
    <script>
    
        function cuadrado(num){
            var num = document.getElementById("myText").value;
            num = parseInt(num)
            var elevado = num * num
            alert(elevado)
        }
        
    </script>
</body>