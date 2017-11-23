console.log("hola mundo")

d3.json("datos.json", function(data) {
    
    console.log("yupi")
    
    window.data = data
    
    partidos = data.partidos
    
    ancho = 500
    alto = 500
    
    
    escalaX = d3.scaleLinear()
        .domain([0,10])
        .range([0,500])
    
    contenedor = d3.select("#contenedor")
        .append("svg")
        .attr("width", ancho)
        .attr("height", alto)
    
    
    contenedor
        .selectAll("circle")
        .data(partidos)
        .enter()
        .append("circle")
        .attr("cx", function(d) {return escalaX(d.mediaAutoubicacion)})
        .attr("r", 10)
        .attr("cy", 10)
    
    
    ejeX = d3.axisBottom(escalaX)
    
    contenedor
        .call(ejeX)
    
    
    /* Tarea 1: Crear una escala lineal para el cx
    el dominio es 0-10 y el rango es 0-500
    
    
    Tarea 2: Colorear los puntos por su ubicacion ideologica (rojo-azul). NOTA: el attr es fill
    
    Tarea 3: Crear una escala lineal para el cy (eje vertical) con la variable votantes. APlicala en cy. Calcula el minimo ty el maximo auotmaticamente (con d3.extent)
    
    Tarea 4: Haz que cuando haya un click sobre el botón salga una alerta (alert con el nombre del partido)
    
      */  
    
})