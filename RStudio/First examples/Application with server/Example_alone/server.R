library(shiny)

# Define server
shinyServer(function(input, output) {
    
    #PESTANA 1 con dos graficos, uno estatico y otro dinimico.
    
    # Grafico dimanico vinculado a opciones de menu
    output$grafico1 <- renderPlot({ # Con renderplot se actualiza de forma automatica
        barplot(1:input$Cant,col="green",main="Grafico dinamico")}) # el input$Cant se crea en la interfaz
    
    # Grafico estatico para ver la diferencia con el dimanico
    output$grafico2 <- renderPlot({ # Con renderplot se actualiza de forma automatica
        barplot(1:8,col="blue", main="Grafico estatico")})
    
    
    #PESTANA 2
    # Grafico dinamico vinculado a opciones de zoom
    output$grafico3 <- renderPlot({ # Con renderplot se actualiza de forma automatica
        barplot(1:input$zoom,col="red")}) # el input$zoom se crea en la interfaz
    
})