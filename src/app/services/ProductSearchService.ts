import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable()
export class ProductSearchService {
    constructor(private httpClient : HttpClient){

    }
    private products = [];
    
    getProducts(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
          this.httpClient.get<Array<any>>('http://localhost:9990/search',{})
          .subscribe(data => {
            console.log(data as string []);
            resolve(data as string[]);
          },
          error => {
            reject(error);
          });
        });
        return promise;
      }

      


}