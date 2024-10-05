import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { teachersData } from '../../data';
import { CommonService } from '../../common/common.service';
import { Subject } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'app-add-edit-teachers-schedule',
  standalone: true,
  imports: [CommonModule,MatIconModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-edit-teachers-schedule.component.html',
  styleUrl: './add-edit-teachers-schedule.component.scss'
})
export class AddEditTeachersScheduleComponent implements OnInit {
  type:string=''
  teachersData:any=teachersData
  teacherData:any=[]
  teahcerClasses:any=[]
  Schedule:FormGroup
  constructor( private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public dialogData: any, public dialogRef: MatDialogRef<AddEditTeachersScheduleComponent>, public _commonService:CommonService) {
  }
  ngOnInit(): void {

    this.type=this.dialogData.type;
    this.teacherData = this.teachersData.filter(teacher=>teacher.id == this.dialogData.teacher_id)
    this.getClasses( this.teacherData[0].classes )
    this.setupForm()
    if(this.dialogData.type !='create'){

      this.updateformWithModel()
    }
    
  }
  updateformWithModel(){
      this.Schedule.get('date').setValue(this.dialogData.meta.date)
      this.Schedule.get('class').setValue(this.dialogData.meta.class)
      this.Schedule.get('start_time').setValue(this.dialogData.meta.start_time)
      this.Schedule.get('end_time').setValue(this.dialogData.meta.end_time)
      this.Schedule.get('subject').setValue(this.dialogData.meta.subject)
      this.Schedule.get('color').setValue(this.dialogData.meta.color) 
      this.Schedule.get('notes').setValue(this.dialogData.meta.notes) 
  }
  getClasses(classes:any[]){
    console.log(classes)
    for(let item of classes){

      this.teahcerClasses.push({name:item,id:item})
    }
console.log(this.teahcerClasses)
  }
  onClose(){
    this.dialogRef.close()
  }
  setupForm(){
    if(this.dialogData.type =='create'){

      this.Schedule =this.fb.group({
        date:[this._commonService.formatDate(this.dialogData.eventSegment.date),Validators.required],
        class:[this.teacherData[0].classes[0],Validators.required],
        start_time:[moment(this.dialogData.start_time).format("HH:mm"),Validators.required],
        end_time:[moment(this.dialogData.end_time).format("HH:mm"),Validators.required],
        subject:['',Validators.required],
        color:['#CFCEFF',Validators.required],
        notes:['']
  
      })
    } else{
      this.Schedule =this.fb.group({
        date:['',Validators.required],
        class:['',Validators.required],
        start_time:['',Validators.required],
        end_time:['',Validators.required],
        subject:['',Validators.required],
        color:['',Validators.required],
        notes:['']
  
      })
    }
  
    
  }
  onSubmit(){
    this.Schedule.markAllAsTouched();
    this.Schedule.markAsDirty();
    this.Schedule.updateValueAndValidity();
    if(this.Schedule.valid){
      if(this.dialogData.type !='create'){

        this.dialogRef.close({...this.Schedule.value,id:this.dialogData.meta.id}) 

      }{

        this.dialogRef.close({...this.Schedule.value,id:this.dialogData.events.length +1}) 
      }
    }
  }
}
