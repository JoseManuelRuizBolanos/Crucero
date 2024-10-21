import { inject, Injectable } from "@angular/core";
import { addDoc, collection, Firestore } from "@angular/fire/firestore";

@Injectable({
    providedIn: 'root',
})
export class ReservasService {
    private firestore = inject(Firestore);
    constructor( ) {  }

    async guardarReserva(fechaInicio: any, lugares: any, puertoSalida: any, noches: any, huespedes: any, nombreCamarote: any, numeroCamarotes: any, nombreCrucero: any) {
        const obj ={
            "fechaInicio" : fechaInicio,
            "lugares" : lugares,
            "puertoSalida" : puertoSalida,
            "noches" : noches,
            "huespedes" : huespedes,
            "nombreCamarote" : nombreCamarote,
            "numeroCamarotes" : numeroCamarotes,
            "nombreCrucero" : nombreCrucero
        };

        const Ref = collection(this.firestore, 'Reservas');

        await addDoc(Ref, obj);
    }
}