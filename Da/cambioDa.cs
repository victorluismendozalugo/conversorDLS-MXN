using Model;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Da
{
    public class cambioDa
    {
        //inicializamos la clase encripter, a la cual se le debe pasar como parametro la llave de encriptacion
        //en nuestro caso seria "contpaqi"
        Encrypter encrypter = new Encrypter("contpaqi");
        //obtenemos la ruta para la base de datos
        string path = HttpContext.Current.Server.MapPath(@"~/DB/db.txt");
        public string registraConversion(tipoCambioModel tipoCambio)
        {
            string res = string.Empty;
            try
            {
                using (StreamWriter file = new StreamWriter(path, true))
                {
                    //se agrega información al documento y se le agrega la encriptacion
                    file.WriteLine(encrypter.Encrypt("Fecha                     |  Dólar  | mxn |Total"));
                    file.WriteLine(encrypter.Encrypt(tipoCambio.fechaConversion + " | " + tipoCambio.preciodivisaDolar + " | " + tipoCambio.cantidadDivisaMxn + " | " + tipoCambio.resultado));
                    file.Close();
                    res = "exito";
                }

            }
            catch (Exception e)
            {
                res = e.Message;
            }
            finally
            {
                if (res == "")
                    res = null;
            }
            return res;
        }

        public string consultaHistorialConversiones()
        {
            string res = string.Empty;
            try
            {

                string[] lines = System.IO.File.ReadAllLines(path);
                foreach (string line in lines)
                {
                    //obtenemos linea por linea y a la vez desencriptamos la informacion
                    res += "\n" + encrypter.Decrypt(line);
                }

            }
            catch (Exception e)
            {
                res = e.Message;
            }
            finally
            {
                if (res == "")
                    res = null;
            }
            return res;
        }
    }
}
