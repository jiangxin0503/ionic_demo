
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BackEndService {

	private baseUrl:String = 'http://jsonplaceholder.typicode.com';

	constructor(private http: Http){

	}

	getPostForUser(userId: String): Promise<Object[]> {
		
     	 let url = this.baseUrl + '/posts?userId=' + userId; 
           return this.http.get(url)
          		  .toPromise()
          		  .then(response=>response.json() as Object[])
          		  .catch(err=>{console.error(err)});
     }

     getAllPost(): Promise<Object[]> {
           let url = this.baseUrl + '/posts'; 
           return this.http.get(url).toPromise()
                      .then(response => response.json() as Object[])
                      .catch(err=>{console.error(err)});
     }
}