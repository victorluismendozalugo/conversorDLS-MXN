

$(document).ready(function () {
    //al cargar la pagina obtenemos el precio actual del dolar y el historial de conversiones
    obtienePrecioDolarActual()
    obtieneHistorial();
});

//genera la conversion y registra el historial
$('#generarConversion').click(function () {
    console.log($('#cantidadDivisaMxn').val())
    if ($('#cantidadDivisaMxn').val() == "0") {
        alert("Favor de completar los campos");
        $('#cantidadDivisaMxn').focus()
    } else {

        $('#resultado').val(0)
        $('#resultado').val((parseFloat($('#cantidadDivisaMxn').val()) * parseFloat($('#preciodivisaDolar').val())))

        //llamada a la funcion para registro de historial
        registraHistorial();
    }
})

//limpia las cajas de texto para inicializar una nueva conversion
$('#nuevaConversion').click(function () {
    //aqui tambien se obtiene el precio nuevamente para estar siempre actualizado.
    obtienePrecioDolarActual()
    $('#cantidadDivisaMxn').val(0)
    $('#resultado').val(0)
})

//funcion encargada de enviar los datos de la conversión al web service para guardarlo en el historial
var registraHistorial = function () {
    var datos = {
        tipoCambio: {
            fechaConversion: moment().format("YYYY-MM-DD h:mm:ss"),
            preciodivisaDolar: $('#preciodivisaDolar').val(),
            cantidadDivisaMxn: $('#cantidadDivisaMxn').val(),
            resultado: $('#resultado').val()
        }
    }
    console.log(datos.tipoCambio)
    $.ajax({
        method: "POST",
        url: "App.aspx/registraConversion",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(datos),
        success: function (response) {
            //obtiene la respuesta de la consulta
            var res = (typeof response.d) == 'string' ?
                eval('(' + response.d + ')') :
                response.d;
            //accion despues de obtener la respuesta correcta
            if (res == "exito") {
                alert("Registros guardados");
                //al guardar los registros, obtenemos nuevamente el historial 
                //para tener la información actualizada
                obtieneHistorial();
            }
        },
        error: function (err) {
            console.log(err)
            alert("Error al registrar los datos");
        }
    })
}

var obtieneHistorial = function () {
    $.ajax({
        method: "POST",
        url: "App.aspx/consultaHistorialConversiones",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            //obtiene la respuesta de la consulta
            var res = (typeof response.d) == 'string' ?
                eval('(' + response.d + ')') :
                response.d;
            //accion despues de obtener la respuesta correcta

            //limpiamos el panel historial
            $('#panelHistorial').text("")
            //aqui ingresamos la informacion obtenida
            $('#panelHistorial').val(res)
        },
        error: function (err) {
            console.log(err)
            alert("Error al obtener el historial");
        }
    })
}


//funcion que obtiene el precio del dolar al dia de hoy, en este caso se consulta la api de Banxico
var obtienePrecioDolarActual = function () { 
    //token tipo Bmx-Token generado en la misma pagina  https://www.banxico.org.mx/SieAPIRest/service/v1/token
    let HeaderToken = "5deec86e876ec8d2eec35e854095b342f22966e8c772c0781fcb3a504ba5de85"
    //api actual para consulta : la serie "SF43718" contenida en la misma, es la correspondiente a la clave para
    //obtener la informacion del precio del dolar al dia de hoy.
    let API = "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno";

    $.ajax({
        url: API + "?token=" + HeaderToken,
        jsonp: "callback",
        dataType: "jsonp",
        success: function (response) {
            var series = response.bmx.series;
            //al obtener la respuesta, consultamos el json para sacar el precio del dolar
            $('#preciodivisaDolar').val(series[0].datos[0].dato)
        }
    });
}