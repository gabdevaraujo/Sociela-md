import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.scss']
})
export class TermoComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<TermoComponent> ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
