using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KitaBizde.Core.Convertors
{
    public class NameGenerator
    {
        public static string GeneratorUniqCode()                //saxt yek active code menhasel befard
        {
            return Guid.NewGuid().ToString().Replace("-","");      
        }
    }
}
