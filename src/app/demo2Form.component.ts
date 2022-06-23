import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  template: `
   <div>
	 
	 <div *ngIf="ecran===1">
	     Date :  <input #date type="date" />
	     
	     
	     Time :
	     <input type="time" #time />
	
	
	
	    <button (click)="submit(date.value, time.value)">Submit</button>
	    </div>
	    <div *ngIf="ecran===2">
	    	
		    <button (click)="back()">Back</button>
		    <br/>
		    	selected date/time {{date}} {{time}}
		    	
		    		     <input #firstn />
		    		     	     <input  #lastn /><br />
		    		      <input type="email" #email />
		    		     	     <input type="tel" #phone /><br />
				    		     	 
				     <input type="checkbox" #acceptTerm />I accept terms and conditions<br />
				      <input type="checkbox" #saveAcc />Save my account<br />  
		    	<br/>
		    	 <button (click)="book(
					{ firstn: firstn.value, 
					  lastn : lastn.value,
					  email : email.value, 
					  phone : phone.value, 
					 	saveAcc : saveAcc.value
					
					})">Book</button>
	    </div>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class Demo2Component {

  ecran=1;
  date='';
  time='';

  submit(date:string, t: string) {
    console.log('date time', date, t);
    this.date=date;
    this.time=t;
    this.ecran=2;
  }
  
  back() {
	this.ecran=1;
	}
	
  
  book(inp: any) {
	console.log('book', inp);
   }
}