import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() contact: any;

  constructor() {
    this.contact = {
      name: '',
      email: '',
      company: '',
      role: '',
      twitter: '',
      location: '',
      notes: ''
    };
  }

  ngOnInit() {

  }
  
}