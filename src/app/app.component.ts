import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
   <div>

	      <h1>Please select date Time</h1> 
	      <app-demo2></app-demo2>

    </div>
  `,
  styles: [
  ]
})
export class AppComponent {
	
	showAlert(v: object) {
	  alert('the parent is receiving ' +JSON.stringify(v));
	}

}