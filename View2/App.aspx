<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="App.aspx.cs" Inherits="View2.App" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server" action="" method="post">
        <div>
            <label>Precio dolar</label>
            <input type="number" id="preciodivisaDolar" disabled="disabled" />
            <br />
            <label for="divisa mxn">Cantidad MXN <span>(Requerido)</span></label>
            <input id="cantidadDivisaMxn" min="0" type="number" value="0">
            <br />
            <label>Resultado</label>
            <input type="number" id="resultado" disabled="disabled" value="0" />
            <br />

            <button type="button" id="generarConversion">
                <span aria-hidden="true">Convertir</span>
            </button>
            <button type="button" id="nuevaConversion">
                <span aria-hidden="true">Nueva conversion</span>
            </button>
        </div>
    </form>
    <div>
        <br />
        <label>Historial</label>
        <p>
            <textarea name="textarea" rows="10" cols="50" id="panelHistorial" disabled="disabled" style="margin: 0px 1443px 0px 0px; width: 446px; height: 383px;"></textarea>
        </p>
    </div>
    <script src="Scripts/jquery/jquery.min.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/moment.js"></script>
    <script src="App.js"></script>
</body>
</html>
