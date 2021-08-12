import {Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ItemDetails } from './itemdetails';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.scss']
})
export class AdminindexComponent implements OnInit {

  itemsDetails={
    foodname:"",
    hotelname:"",
   
    price:""

  };

  formvalue!: FormGroup;
  allDetail: any;
  ItemDetailsobj: ItemDetails = new ItemDetails();
  @Output() sendToParent=new  EventEmitter();
  isEdit: boolean = false;
  constructor(private crudservice: CrudService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crudservice.getAllItem().subscribe(res => {
      this.allDetail = res;
    })
  }

  receiveItem(data:any)
  {
    console.log(data);
    this.itemsDetails=Object.assign({},data);
    this.isEdit=true;
  }

  onClickSubmit(registerRef: any) {
    console.log("add user: " + registerRef.value)
    let data = registerRef.value;
    data.id = null;
    this.crudservice.createItem(data).subscribe(response => {
      alert("details added successfully!");
      registerRef.reset();
      this.crudservice.informChild();
    });
  }
  updateItem(registerRef:any){
    this.crudservice.updateItem(this.itemsDetails).subscribe(response=>{
      alert("Item Updated");
      this.crudservice.informChild();
      this.isEdit=false;
      registerRef.reset();
    });
    // console.log(registerRef.value);
    
  }

  

}
