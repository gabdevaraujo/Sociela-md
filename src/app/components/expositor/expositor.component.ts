import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expositor',
  templateUrl: './expositor.component.html',
  styleUrls: ['./expositor.component.scss']
})
export class ExpositorComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
