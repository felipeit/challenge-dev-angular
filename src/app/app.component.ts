import { Component, OnInit } from '@angular/core';

import { BackendService } from './services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud';
  dataSource:any;

  constructor(
    private backendService: BackendService,
    public dialog: MatDialog,
    ){}

  ngOnInit(): void {
    this.backendService.getAll().subscribe((data)=>{
      console.log(data);
      this.dataSource = data;

    })
  }

  editarProposta(): void{
    this.dialog.open(DialogComponent);
  }

}

