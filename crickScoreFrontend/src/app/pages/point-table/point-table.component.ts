import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  pointTable: any;
  teamHeading: any;

  constructor(private _api:ApiCallService){

  }

  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next:data=>{
        this.pointTable=data;
        // console.log(this.pointTable)
        this.teamHeading=[...this.pointTable[0]]
        console.log(this.teamHeading)
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
