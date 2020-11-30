import { Injectable } from '@angular/core';
import { Employe } from './employe';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  listEmployes: Employe[] = [
    { matricule: 1234, nom: "Amine SALAH", poste: "Directeur" },
    { matricule: 5847, nom: "Mouna MOALLA", poste: "Ingénieur" },
    { matricule: 5812, nom: "Mourad SMIDA", poste: "Comptable" },
    { matricule: 9641, nom: "Samar FENINA", poste: "Directeur" },
  ];
  getEmployes() {
    return this.listEmployes;
  }
  getSpecialEmployes(poste:string){
    return this.listEmployes.filter(emp => emp.poste==poste);
    }
   
  constructor() { }
}
