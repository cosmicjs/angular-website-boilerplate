import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { CosmicServiceService } from './../../services/cosmic-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  clientData: any;
  submitMessage: any = '';
  showLoader: boolean = false;

  constructor(private fb: FormBuilder, private cosmicService: CosmicServiceService) 
  { 
    this.contactForm = this.fb.group({
      'name': [''],
      'email': ['',[Validators.email, Validators.required ]],
      'message': ['']
    }); 
  }

  ngOnInit() {    

  }

  contactUs()
  {
    this.showLoader = true;
    this.clientData = this.contactForm.value;
    this.cosmicService.sendMessage(this.clientData)
    .subscribe((res)=>{
      this.showLoader = false;
      this.submitMessage = "  Message sent successfully!"
      setTimeout(()=>{  this.submitMessage = '' }, 5000);
    })
  }

}
