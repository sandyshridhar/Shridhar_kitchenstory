import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from  'rxjs/operators'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000/posts";

  itemAdded=new Subject();

  constructor(private http: HttpClient) { }
  getAllItem(){
    return this.http.get(this.apiServer);
  }
  createItem(data: any){

    console.log("crud service create: "+data.name+":"+data.id)
    return this.http.post(this.apiServer,data);
   
  }
  informChild()
  {
    this.itemAdded.next();
  }
  getLatestUser()
  {
    return this.http.get(this.apiServer)
  }
  updateItem(data:any){
    return this.http.put("http://localhost:3000/posts/"+data.id,data);
  }


  deleteItem(data:any){
return this.http.delete("http://localhost:3000/posts/" + data.id);

  }   


  addPaymentDetails(data:any)
  {
    return this.http.post("http://localhost:3000/comments",data);
  }



  getItemDetails()
  {
    return this.http.get("http://localhost:3000/posts");
  }
}
