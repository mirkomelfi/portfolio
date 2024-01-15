export const products=[
{
    id:1,
    name:"Ecommerce Adiestramiento Canino",
    link:"https://ecommerce-adiestramiento-cli.rj.r.appspot.com",
    description:"Ecommerce basico de venta de productos. Hay registro y loggueo de usuarios. Filtrado por categorias. Carrito de compras con Control de Stock. Al finalizar el carrito, se envia un mail automatico al usuario con el ticket y la compra efectuada. (Integracion con MercadoPago desactivada para la demo para poder probar todo el flujo efectivamente).",
    info: "React Js, Node Js, MongoDB.  (Mongoose & Express Js)"
},

{
    id:2,
    name:"FindIt",
    link:"https://sip-front-end.rj.r.appspot.com/",
    description:"Sistema de busqueda de elementos en una oficina. Cada elemento, contenedor y sector posee un codigo QR y se encuentra almacenado en una Base de Datos. Quien utilice un elemento por ultima vez, escanea el codigo para especificar donde ha dejado el elemento. El objetivo es que cada empleado encuentre el elemento que necesite mediante la aplicacion (filtrado por item/descripcion del item le indicara secto y contenedor en el que está ubicado) a la hora de utilizarlo, sin perder tiempo de trabajo ni tener que desenfocar a sus colegas de sus respectivas tareas para ponerse en busqueda del objeto.",
    info: "React Js, Java, MySQL. (SpringBoot)",
    acceso_adm: {user:"admin",password:"admin"},
    acceso_usr: {user:"user1",password:"user1",}

},
{
    id:3,
    name:"Sistema de Reclamos",
    link:"https://sistema-de-reclamos-cliente.rj.r.appspot.com",
    description:"Sistema de Reclamos de Edificios donde hay un usuario administrador y usuarios comunes. Estos ultimos pueden ser propietarios y/o inquilinos de propiedades. Esto les dará acceso a las areas comunes de dicho edificio. Ante una inquietud o falta de estado, se puede hacer el reclamo de las unidades que le corresponden y/o de las areas comunes del edificio del que es propietario o inquilino. El administrador es quien se encarga de la creacion de edificios y usuarios, asignacion de propietarios/inquilinos a las unidades, y de los cambios de estado de los reclamos, según avancen. El usuario comun unicamente podra ver sus unidades, areas y generar los reclamos correspondientes.",
    info: "React Js, Java, MySQL. (SpringBoot)",
    acceso_adm: {user:"admin",password:"admin"},
    acceso_usr: {user:"user1",password:"user1",}
    
}
]