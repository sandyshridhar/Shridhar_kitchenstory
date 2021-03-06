import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import itemdetails from '../itemdetails.json';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public items:{id:number,category:string,name:string,image:string,size:string, color:string,price:number}[] = itemdetails;
  searchValue: string = '';
  // items = [
  //   {
  //     id: 1,
  //     category: 'jeans',
  //     name: 'Ripped jeans',
  //     image:
  //       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg',
  //     size: 'XL',
  //     color: 'blue',
  //     price: 20.99
  //   },
  //   {
  //     id: 2,
  //     category: 'jeans',
  //     name: 'Boyfriend jeans',
  //     image:
  //       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg',
  //     size: 'S',
  //     color: 'blue',
  //     price: 24.99
  //   },
  //   {
  //     id: 3,
  //     category: 'shirts',
  //     name: 'Ripped sweatshirt',
  //     image:
  //       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg',
  //     size: 'XL',
  //     color: 'white',
  //     price: 29.99
  //   },
  //   {
  //     id: 4,
  //     category: 'jackets',
  //     name: 'Denim Jacket',
  //     image:
  //       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
  //     size: 'M',
  //     color: 'grey',
  //     price: 40.99
  //   },
  //   {
  //     id: 5,
  //     category: 'shirts',
  //     name: 'Longsleeve',
  //     image:
  //       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg',
  //     size: 'L',
  //     color: 'black',
  //     price: 120.99
  //   }
  // ];

  allDetail: any;
  constructor(private router: Router,private crudservice:CrudService) {
        
  }
  async updateResults()
  {

  }
  ngOnInit(): void { 
    this.crudservice.getItemDetails().subscribe(res => {
      this.allDetail = res;
    })
  }

   

  addToCart(index: any,itemid:any) {
   //  console.log(index + ' : ' + itemid);
    this.router.navigate(['./cart'], {
      state: { i: index, itemid: itemid }
    });
  }

}
