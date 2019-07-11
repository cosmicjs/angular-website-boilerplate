import { Component, OnInit } from '@angular/core';
import { CosmicServiceService } from './../../services/cosmic-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: any;
  content: any;
  showLoader: boolean = false;

  constructor(private cosmicService: CosmicServiceService) { }

  ngOnInit() {
    this.showLoader = true;
    this.cosmicService.getAboutUsData()
    .subscribe((res)=>{
      var data  = JSON.stringify(res);
      let datum = JSON.parse(data);
      this.title = datum.objects[0].title;
      this.content = datum.objects[0].content;
      this.showLoader = false;
    })
  }

}
