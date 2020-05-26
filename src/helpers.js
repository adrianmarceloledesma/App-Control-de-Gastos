export const revisarPresupuesto = (presupuesto, preRestante) => {
    let clase;
    
      // si el valor de el presupuesto % 4 que haya puesto, es mayor al 'restante'(la plata que me queda) .. 
    if( (presupuesto / 4) > preRestante){
       clase = 'rojo'
    }else if( (presupuesto / 2) > preRestante){
        clase = 'amarillo'
    }else{
        // si ninguna condicion se cumple significa que que no hemos gastado menos del 50% 
        clase = 'verde'
    }
    
    return clase;
}

// 