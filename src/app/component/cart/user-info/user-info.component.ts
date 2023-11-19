import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  createForm!: FormGroup;
  submitted = false;
  @Output() userInfo = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
    });
  }

  onSubmitProduct() {
    this.userInfo.emit(this.createForm.value);
  }

  get fullName() {
    return this.createForm.get('fullName');
  }

  get address() {
    return this.createForm.get('address');
  }

  get creditCard() {
    return this.createForm.get('creditCard');
  }
}
