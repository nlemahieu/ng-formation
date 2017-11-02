import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserResource} from '../../resources/UserResource';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input()
  public displayAvatar: boolean = false;

  @Input()
  public loginPrefix: string = '';

  public user: any = {};

  constructor(private userResource: UserResource) {}

  ngOnInit() {
    this.userResource.get(environment.API_USER)
      .subscribe(response => this.user = response);
  }
}
