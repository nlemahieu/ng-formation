import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Output()
  public onSubmit: EventEmitter<string> = new EventEmitter();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    });
  }

  public submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.get('search').value);
    }
  }

}
