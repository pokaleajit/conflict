import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  
} from '@angular/material/table';
import { EmpolyeeService } from './empolyee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'travluk';
  view:boolean=false
  newEmp!:FormGroup
  empArray:any[]=[]
  getEmpInfo:any[]=[]
  searchItem:boolean=false
  constructor(private fb:FormBuilder,private empolyee:EmpolyeeService){}
  ngOnInit(){
    this.newEmp=this.fb.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required]], 
      age:['',[Validators.required]],
      salary:['',[Validators.required]],
    })
    this.getData()
    
  }
  addEmp(){
    this.view=true
  }


  }

  getInfo(value:any){
    this.searchItem=true
    console.log(value);
    this.getEmpInfo=[...this.empArray].filter((res)=>res.name.toLowerCase().includes(value.trim().toLowerCase()))
    console.log(this.getEmpInfo);
    
    
  }
}
