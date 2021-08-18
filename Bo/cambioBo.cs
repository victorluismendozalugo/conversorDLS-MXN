using Da;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Bo
{
    public class cambioBo
    {
        public string registraConversion(tipoCambioModel tipoCambio) => new cambioDa().registraConversion(tipoCambio);

        public string consultaHistorialConversiones() => new cambioDa().consultaHistorialConversiones();
    }
}
