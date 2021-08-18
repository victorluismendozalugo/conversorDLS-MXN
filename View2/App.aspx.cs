using Bo;
using Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace View2
{
    public partial class App : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [System.Web.Services.WebMethod]
        public static string registraConversion(tipoCambioModel tipoCambio)
        {
            string res = new cambioBo().registraConversion(tipoCambio);
            return JsonConvert.SerializeObject(res);
        }

        [System.Web.Services.WebMethod]
        public static string consultaHistorialConversiones()
        {
            string res = new cambioBo().consultaHistorialConversiones();
            return JsonConvert.SerializeObject(res);

        }
    }
}