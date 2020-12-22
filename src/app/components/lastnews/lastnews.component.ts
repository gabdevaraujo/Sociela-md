import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastnews',
  templateUrl: './lastnews.component.html',
  styleUrls: ['./lastnews.component.scss']
})
export class LastnewsComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
