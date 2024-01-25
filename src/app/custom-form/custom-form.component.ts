import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-custom-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./custom-form.component.html",
  styleUrl: "./custom-form.component.css",
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomFormComponent,
    multi: true
  }],
})
export class CustomFormComponent implements ControlValueAccessor {
  input!: string;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(input: any): void {
    this.input = input;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
