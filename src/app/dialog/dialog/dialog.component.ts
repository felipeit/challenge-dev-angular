import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() listPropostasEvent = new EventEmitter<any>();

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private backendService: BackendService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
    ) {}

  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome_completo: [''],
      cpf: [''],
      endereco: [''],
      valor_emprestimo: [''],
      status:['']
    });
    this.backendService.retrieve(this.data.id).subscribe({
      next: (data)=>{
        this.form.setValue(data);
      }
    })
  }


  submit(): void {
    this.backendService.partialUpdate(this.data.id, this.form.value).subscribe({
      next: (data)=>{
        console.log(data);
        this.listPropostasEvent.emit(data);
      },
      error: (err)=>console.log('deu errado!')
    });
    
  }

}
