import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { CrudService } from '../crud.service';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-itemsdetails',
  templateUrl: './itemsdetails.component.html',
  styleUrls: ['./itemsdetails.component.scss']
})
export class ItemsdetailsComponent implements OnInit {

  constructor(private crudservice:CrudService) { }
  allItems:any ;
  @Output() sendToParent=new EventEmitter();

  ngOnInit(): void {
      this.crudservice.itemAdded.subscribe(res=>{
        console.log("user added from parent compo");
        this.getLatestItem();
      });
      this.getLatestItem();
  }
  getLatestItem()
  {
    this.crudservice.getLatestUser().subscribe(res=>{
      console.log(res);
      this.allItems=res;
    });
    
  }

  editItem(registerRef: any) {
    this.sendToParent.emit(registerRef);
    console.log(registerRef);
    registerRef.from.reset();
  }
  deleteItem(registerRef: any) {
    this.crudservice.deleteItem(registerRef).subscribe(response => {
      this.getLatestItem();
      alert("deleted successfully!");
    })
  }

 

}
