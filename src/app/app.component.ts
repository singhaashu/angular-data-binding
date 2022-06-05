import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  smart= 'Angular Framework';

  courses=["react jS" ,'angular',"Node js","MongoBd"];
  show = this.courses[0];

  
    empdetails=[
      {"name":"aashish" , "age":24 ,"city" : "ballabgarh"},
      {"name":"vikas" , "age":25 ,"city" : "noida"},
      {"name":"harshita" , "age":20 ,"city" : "noida"}
    ]

    abc()
     {
          alert("my favourite Angular frame work");
      }
}


  
