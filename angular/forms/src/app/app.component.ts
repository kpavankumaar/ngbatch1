import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      constructor(private fb:FormBuilder){
        
      }
      name = new FormControl('sneha');

      update(){
        this.name.setValue('ravi');
      }
      profileForm = this.fb.group({
        firstname: [''],
        lastname: [''],
        phonenumber: [''],
        address: this.fb.group({
          city: [''],
          state: ['']
        })
        
      })
      // profileForm = new FormGroup({
      //   firstname: new FormControl(''),
      //   lastname: new FormControl(''),
      //   phonenumber: new FormControl(''),
      //   address: new FormGroup({
      //     city: new FormControl(''),
      //     state: new FormControl('')
      //   })
        
      // })
      onSubmit(value){
        console.log(value);
      }
}
