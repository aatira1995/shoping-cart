import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() total : any;
  @Input() quantity : any;

  button = {
    text : 'CHECKOUT',
    style : 'cart-button'
  };

  constructor() { }

  ngOnInit() {
  }

}
