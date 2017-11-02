import { Component, OnInit } from '@angular/core';
import {UserResource} from '../../resources/UserResource';
import {environment} from '../../../environments/environment';
import {IRepo} from '../../interfaces/IRepo';
import {SearchResource} from '../../resources/SearchResource';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  public repos: any[] = [];

  constructor(private userResource: UserResource, private searchResource: SearchResource) { }

  ngOnInit() {
    this.userResource.getRepos(environment.API_USER)
      .subscribe((response: IRepo[]) => this.repos = response);
  }

  search(value) {
    this.searchResource.search(value)
      .subscribe((response: IRepo[]) => this.repos = response);
  }

}
