import { HttpClientModule, HttpClient } from '@angular/common/http';
export class Service{   
    constructor(private http: HttpClient){

    }
    getInfo(){
        return this.http.get('./assets/data.json');
    }

}