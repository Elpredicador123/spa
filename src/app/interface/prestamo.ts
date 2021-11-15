export interface Prestamo {
    montoPrestamo:number | null;
    cuotasPrestamo:number | null;
    fechaPrestamo:String | null;
    estadoPrestamo:String | null;
    idCliente?:number | null;
}
