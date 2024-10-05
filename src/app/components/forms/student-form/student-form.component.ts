import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [MatIconModule,ReactiveFormsModule,CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit {
  type="create"
  formErrors:any
  studentForm: FormGroup;

  constructor( private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public dialogData?: any, public dialogRef?: MatDialogRef<StudentFormComponent>) {
  }

  
  imagePreview: any = '';
  ngOnInit(): void {
    this.setupForm();
  }
  setupForm() {
    this.formErrors = {
      firstName: {},
      lastName: {},
      phone: {},
      address: {},
      sex: {},
      bloodType: {},
      birthday: {},
      image:{}
    };
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bloodType: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      sex: ['', [Validators.required]],
    });
    this.studentForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  onFormValuesChanged() {
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        console.log(field)
        // Clear previous errors
        this.formErrors[field] = {};
  
        // Get the control
        const control = this.studentForm.get(field);
  
        // Check if the control exists, is touched or dirty, and is invalid
        if (control && control.invalid) {
          this.formErrors[field] = control.errors;
        }
      }
    }
  }
  

  onClose() {
    this.dialogRef?.close();
  }
  profile:any=''
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imagePreview = e.target?.result; // Set the image preview
      };

      reader.readAsDataURL(file); 
this.profile=file
console.log(file)
    }
  }

  onSubmit() {
    this.studentForm.markAllAsTouched();
    this.studentForm.markAsDirty();
    this.studentForm.updateValueAndValidity();
    console.log(this.studentForm.value);
  }
}
