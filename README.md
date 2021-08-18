# conversorDLS-MXN

# Clonar el proyecto
# Restaurar paquetes nuget
# Generado en VS 2019 

# El proyecto cuenta con la funcionalidad para convertir DLS-MXN
# Cada vez que se genera una conversión, esta se registra en una base de datos tipo texto
# Cada que se recarga la pagina o se ingresa una nueva conversión; se obtiene el historial de conversiones junto con la fecha y hora de las mismas.
# Para tomar el valor del dolar consumimos una API del banco de mexico https://www.banxico.org.mx/
# Cada vez que se recarga el proyecto estamos consumiendo este servicio, de forma que siempre tenemos el precio del dolar actualizado.
# Cuando se genera un registro en la base de datos, se utiliza un metodo de encriptación basado en la libreria CEncriptar de VB simplificada
# El proyecto esta estructurado en capas MODEL-DATA-BUSINESS-VIEW
# La capa model, la utilizo para representar los objetos que se involucran en las conversiones, la capa bussines; en este caso por tratarse de un proyecto sencillo, unicamente se utiliza como transporte para enviar los datos a la capa Data, la cual hace la conexión al archivo de texto e inserta y consulta datos.
# Hago uso tambien de WebServices o local Services, los cuales nos permiten interactuar entre la vista y el back end, transportando la información mediante peticiones Ajax y trabajando con formato JSON.
# En la vista no se utilizó un diseño, es solamente html y jquery.
# Hago uso también de la librería Moment.js para el formateo de fechas.
