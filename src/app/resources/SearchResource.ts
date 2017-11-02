import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchResource {
  private entrypoint = `${environment.API_URL}/search`;

  constructor(private http: HttpClient) {}

  search(value: string) {
    return this.http.get(`${this.entrypoint}/repositories?q=${value}+user:${environment.API_USER}`)
      .map((response: any) => response.items);
  }
}
