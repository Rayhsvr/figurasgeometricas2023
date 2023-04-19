//Funciones para cálculo de áreas y perímetros
// de diversas figuras geométricas

// Función para calcular área y circunferencia de un Círculo
function circulo() { 
    const radio = parseFloat(document.getElementById('radio-input').value);
    const area = Math.PI * radio * radio;
    const circunferencia = 2 * Math.PI * radio;
    const resultado = document.getElementById('circulo-resultado');
    resultado.innerHTML = `Área: ${area.toFixed(2)}<br>Circunferencia: ${circunferencia.toFixed(2)}`;
  }

  // Función para calcular área y perímetro de un Cuadrado
  function cuadrado() {
    const lado = parseFloat(document.getElementById('lado-input').value);
    const area = lado * lado;
    const perimetro = 4 * lado;
    const resultado = document.getElementById('cuadrado-resultado');
    resultado.innerHTML = `Área: ${area.toFixed(2)}<br>Perímetro: ${perimetro.toFixed(2)}`;
  }
  
    // Función para calcular área y perímetro de un Rectángulo
    function rectangulo() {
        const base = parseFloat(document.getElementById('base-input').value);
        const altura = parseFloat(document.getElementById('altura-input').value);
        const area = base * altura;
        const perimetro = 2 * (base + altura);
        const resultado = document.getElementById('rectangulo-resultado');
        resultado.innerHTML = `Área: ${area.toFixed(2)}<br>Perímetro: ${perimetro.toFixed(2)}`;
      }

    // Función para calcular área y perímetro de un Triángulo
    function triangulo() {
        const base = parseFloat(document.getElementById('base-input').value);
        const altura = parseFloat(document.getElementById('altura-input').value);
        const lado1 = parseFloat(document.getElementById('lado1-input').value);
        const lado2 = parseFloat(document.getElementById('lado2-input').value);
        const area = (base * altura) / 2;
        const perimetro = base + lado1 + lado2;
        const resultado = document.getElementById('triangulo-resultado');
        resultado.innerHTML = `Área: ${area.toFixed(2)}<br>Perímetro: ${perimetro.toFixed(2)}`;
      }
      
      