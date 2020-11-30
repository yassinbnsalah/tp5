import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/Employe';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'yes-listeempolyes',
  templateUrl: './listeempolyes.component.html',
  styleUrls: ['./listeempolyes.component.css']
})
export class ListeempolyesComponent implements OnInit {
  lesemployes!: Employe[];

  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.lesemployes = this.employeService.getEmployes();
  }

}
