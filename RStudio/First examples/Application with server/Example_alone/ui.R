library(shiny)

# Define UI 
shinyUI(fluidPage(
    sidebarLayout(
        sidebarPanel( # Inicia Panel de opciones a la izquierda
            
            # titulo de las opciones
            titlePanel("Opciones de navegacion de la aplicación"),
            
            #Creación de menús para dinamizar los gráficos
            p("Seleccion de cantidad"), # texto para mostrar descripción de las opciones
            
            # Creación de un menú tipo lista desplegable
            selectInput(inputId = "Cant", # nombre del output creado en el servidor.
                        label="Opciones para pestaña 1", # Etiqueta del input
                        choices = c(1:7), # opciones del desglose (rango de la lista)
                        selected = 3), # donde se posiciona el valor inicialmente
            
            # Creación de un insumo tipo zoom
            sliderInput("zoom", # nombre del output creado en el servidor
                        "Opciones para pestaña 2", # descripcion de la opcion 
                        min = 1, # Inicio del rango
                        max = 20, # Fin del rango
                        value = 5 # donde se posiciona el valor inicialmente
            )
        ), # cierre de panel de opciones a la izquierda
        
        #Inicio panel principal (pestañas de visualizaciones) o panel central
        mainPanel(
            tabsetPanel(type="tabs", #Tabs es para crear pestanas de seleccion (Salida de los graficos)
                        tabPanel("Pestaña 1", # Nombre de la pestaña
                                 plotOutput(outputId = "grafico1"), # Insumo utilizado
                                 tabPanel("Pestaña 1", # Se repite pestaña para agregarle otro insumo.
                                          plotOutput(outputId = "grafico2"))), # termina la primer pestaña
                        tabPanel("Pestaña 2",plotOutput(outputId = "grafico3"))
            )
        )
    )
))