//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const pointList1=[...pointsList]
console.log(pointList1);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2={...toy}
console.log(toy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList0 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointList3=[...pointsList0,...pointsLis2]
console.log(pointList3);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toytoy={...toy1,...toyUpdate};
console.log(toytoy);
//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colors1=[...colors];
let colores = colors1.indexOf("azul");
colors1.splice(colores,1);
console.log(colors1);