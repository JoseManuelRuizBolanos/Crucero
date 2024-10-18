import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { addDoc, collection } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})
export class ReservasService {
    private firestore: Firestore
    constructor() {  }

    async guardarReserva(fechaInicio: any, lugares: any, puertoSalida: any, noches: any, huespedes: any, nombreCamarote: any, numeroCamarotes: any, nombreCrucero: any) {
        const obj = Object.assign({
            "fechaInicio" : fechaInicio,
            "lugares" : lugares,
            "puertoSalida" : puertoSalida,
            "noches" : noches,
            "huespedes" : huespedes,
            "nombreCamarote" : nombreCamarote,
            "numeroCamarotes" : numeroCamarotes,
            "nombreCrucero" : nombreCrucero
        });

        const Ref = collection(this.firestore, 'Reservas');

        await addDoc(Ref, obj);
    }
}