import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class UserResource {
  private entrypoint = `${environment.API_URL}/users`;

  constructor(private http: HttpClient) {}

  get(id: string) {
    return this.http.get(`${this.entrypoint}/${id}`);
  }

  getRepos(id: string) {
    return this.http.get(`${this.entrypoint}/${id}/repos`);
  }
}
