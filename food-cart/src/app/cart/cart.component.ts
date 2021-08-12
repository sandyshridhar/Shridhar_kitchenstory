import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import itemdetails from '../itemdetails.json';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  index: any;
  public items:{id:number,category:string,name:string,image:string,size:string, color:string,price:number}[] = itemdetails;
  searchValue: string = '';
 
  allDetail: any;
  constructor(public router:Router,private crudservice:CrudService) { 
    //console.log(this.router.getCurrentNavigation()?.extras);
    this.index = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.index.itemid+":"+this.index.i);
    // this.itemid = this.router.getCurrentNavigation().extras.state.itemid;
  }

  ngOnInit(): void {
    this.crudservice.getItemDetails().subscribe(res => {
      this.allDetail = res;
    })
  }
  paymentMethod(paymentRef:any)
  {
    console.log(paymentRef);
    let data = paymentRef.value;
    data.id = null;
    this.crudservice.addPaymentDetails(data).subscribe(response => {
      // alert("details added successfully!");
      paymentRef.reset();
      this.router.navigate(['/paymentsuccess']);
    });
    
  }

}
