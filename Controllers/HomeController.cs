using Microsoft.AspNetCore.Mvc;

namespace CalculadoraMVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calcular(string num1, string num2, string operador)
        {
            if (!double.TryParse(num1, out double n1) || !double.TryParse(num2, out double n2))
                return Json(new { resultado = "Erro" });

            double resultado = operador switch
            {
                "+" => n1 + n2,
                "-" => n1 - n2,
                "*" => n1 * n2,
                "/" => n2 == 0 ? double.NaN : n1 / n2,
                _ => double.NaN
            };

            return Json(new { resultado });
        }
    }
}
