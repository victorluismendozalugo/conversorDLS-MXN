using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class tipoCambioModel
    {
        [Required]
        [DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        public DateTime fechaConversion { get; set; }
        [Required]
        public decimal preciodivisaDolar { get; set; }
        [Required]
        public decimal cantidadDivisaMxn { get; set; }
        [Required]
        public decimal resultado { get; set; }

    }
}
