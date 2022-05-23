    function desplegar (tabla, icon){ /*La función recibe el nombre de la tabla y del icon para reutilizarla */
      if (document.getElementById(tabla).style.display !== "none") { /*Si la tabla está visible, se oculta. La flecha se recoge*/
        document.getElementById(tabla).style.display = "none";
        document.getElementById(icon).style.transform = "rotate(0deg)"
        
      } else {
        document.getElementById(tabla).style.display = "block"; 
        document.getElementById(icon).style.transform = "rotate(90deg)";
      }
    };
