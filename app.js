// permite manejar el stock de una tienda
// y calculos con respecto a los numeros de los productos
class Producto
{
    constructor(id, prod, costo, precio, stock, ventas)
    {
        this.id = Number(id)
        this.prod = prod.toUpperCase();
        this.costo = Number(costo);
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.ventas = Number(ventas);
    }
    sumaIVA()
    {
        let nuevo = this.precio * 1.13;
        return nuevo;
    }
}

const productos = [];
productos.push(new Producto(1, "Laptop HP",350000,397000,10,2))
productos.push(new Producto(2, "Cable USB",2000,8000,6,8))
productos.push(new Producto(3, "Logitech MX",62000,95000,0,3))
productos.push(new Producto(4, "Mousepad",1000,4200,10,2))
productos.push(new Producto(5, "Monitor LG",35000,56000,8,6))
productos.push(new Producto(6, "FD Kingston 8gb",3500,7900,10,22))
productos.push(new Producto(7, "SSD 256GB",22000,35000,12,6))

const ProductosShow = () =>
{
    console.log("-----Lista de productos-----")
    for (const datos of productos) 
    {
        console.log("-------------------")
        console.log("Id: "+datos.id)
        console.log("Producto: "+datos.prod)
        console.log("Costo: "+datos.costo)
        console.log("Precio: "+datos.precio)
        console.log("Total(IVA): "+datos.sumaIVA())
        console.log("Ventas: "+datos.ventas)
        if(datos.stock>0)
            console.log("En stock: "+datos.stock)
        else
            console.log("No hay stock.")
                   
        console.log("-------------------")
    }
}

const ProductoInsert = () =>
{
    let id_ = productos.length+1;
    let nombre_ = prompt("Ingrese el nombre del producto:")
    let costo_ = Number(prompt("Ingrese precio de costo:"))
    let precio_ = Number(prompt("Ingrese el precio de venta:"))
    let stock_ = Number(prompt("Ingrese la cantidad en stock:"))
    let ventas_ = Number(prompt("Ingrese la cantidad vendida:"))

    productos.push(new Producto(id_,nombre_,costo_,precio_,stock_,ventas_))
    console.clear()
    ProductosShow()
}

const Calculos = () =>
{
    let id_ = Number(prompt("Ingrese el ID del producto a evaluar:"))
    let objetivo = Number(prompt("Ingrese objetivo de utilidad que desea obtener:"))

    const resultado = productos.find(elemento => elemento.id === id_)
    if(!Array.isArray(resultado) && !resultado.length)
    {
        let utilidadUnitaria = resultado.precio - resultado.costo;
        let necesidad = objetivo/utilidadUnitaria;
        let comprar = necesidad-resultado.stock;
        console.log("Para obtener una utilidad de "+objetivo+" es necesario vender "+necesidad+" unidades de "+resultado.prod);
        console.log("La utilidad por unidad es de: "+utilidadUnitaria);
        if(comprar>=0)
            console.log("Actualmente el stock del producto es de: "+resultado.stock+" debes comprar "+comprar+" unidades más.");
        else
            console.log("Actualmente tienes en stock "+resultado.stock+" unidades.");
    }
    else
        console.log("El ID "+id_+" no está registrado. Los IDs disponibles son de 1 a "+resultado.length);
}