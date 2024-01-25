import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import { CustomFormComponent } from "../custom-form/custom-form.component";

@Component({
    selector: "app-form-container",
    standalone: true,
    templateUrl: "./form-container.component.html",
    styleUrl: "./form-container.component.css",
    imports: [CommonModule, ReactiveFormsModule, CustomFormComponent]
})
export class FormContainerComponent {
  form: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  get firstName() {
    return this.form.get("firstName") as FormControl;
  }

  get lastName() {
    return this.form.get("lastName") as FormControl;
  }

  get address() {
    return this.form.get("address") as FormControl;
  }

  onSubmit(value: FormGroup) {
    console.log(value);
  }
}
