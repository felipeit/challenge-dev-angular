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
    this.list();
  }

  editarProposta(id: number): void{
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(()=>{
      this.list();
    })
  }

  list(): void{
    this.backendService.getAll().subscribe((data)=>{
      this.dataSource = data;
    })
  }
}

