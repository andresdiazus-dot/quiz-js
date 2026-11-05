const nombres_sucios = [
  "JuAn", "María", "PEdro", "ANA", "Luis",
  "  jUAN ", "MARÍA", "pedro  ", "  ANA", "luIS",
  "  sofía  ", "CARLOS", "laura ", " ANDRÉS", "valenTINA",
  "  DIEGO  ", "camila", "JOSÉ ", "  paula", "FELIPE",
  "  nataLIA ", "sebastián", "DANIELA  ",
];

let nombres_limpios = nombres_sucios.map(nombre => {
  const limpio = nombre.trim().toLowerCase();
  return limpio.charAt(0).toUpperCase() + limpio.slice(1);
});

nombres_limpios = [...new Set(nombres_limpios)]
  .sort((a, b) => a.localeCompare(b, 'es'));

  console.log("-------nombres encontrados----------" );
console.log(nombres_limpios);



// const numeros_sucios = [" 25 ", "30", "treinta y dos", "abc", "17", "150", "41.0", ""]; 
// const numeros =[cero: 0, uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7,
//   ocho: 8, nueve: 9, diez: 10, veinte: 20, treinta: 30, cuarenta: 40,
//   cincuenta: 50, sesenta: 60, setenta: 70, ochenta: 80, noventa: 90,]
// let numeros_limpios = numeros_sucios.map(numero => {
//   const numero_limpio = numero.trim();

//   console.log(`Número limpio: "${numero_limpio}"`); 