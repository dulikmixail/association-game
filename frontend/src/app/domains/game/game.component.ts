import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  public form: FormGroup;

  private formBuilder = inject(FormBuilder);

  constructor() {
    this.form = this.formBuilder.group({
      keyword: ['']
    })
  }

  submitForm() {
    if(this.form.valid) {
      console.log(this.form.value)
    }
  }
}
