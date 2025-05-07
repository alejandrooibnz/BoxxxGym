export interface DestinacionesMain {
    titulo: string,
    destinaciones: Destinacion[]
}

export interface Destinacion {
    titulo: string,
    dias_noches: string,
    precio: string,
    imagen: string,
    ruta: string
}

export interface DestinacionesDestinos {
    titulo: string,
    destinaciones: Destinacion2[]
}

export interface Destinacion2 {
    titulo: string,
    dias_noches: string,
    precio: string,
    imagen: string,
    ruta: string,
    pais: string
}