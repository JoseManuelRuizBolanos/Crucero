import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { addDoc, collection } from "firebase/firestore";

@Injectable({
    providedIn: 'root'
})
export class ReservasService {
    constructor(private firestore: Firestore) { }

    async guardarReserva(fechaInicio: any, lugares: any, puertoSalida: any, noches: any, huespedes: any, nombreCamarote: any, numeroCamarotes: any, nombreCrucero: any) {
        const obj = Object.assign({
            "FechaInicio" : fechaInicio,
            "Lugares" : lugares,
            "PuertoSalida" : puertoSalida,
            "Noches" : noches,
            "Huespedes" : huespedes,
            "NombreCamarote" : nombreCamarote,
            "NumeroCamarotes" : numeroCamarotes,
            "NombreCrucero" : nombreCrucero
        });

        const Ref = collection(this.firestore, 'Reservas');

        await addDoc(Ref, obj);
    }
}