import { Component, OnInit } from '@angular/core';
import { CosmicServiceService } from './../../services/cosmic-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: any;
  content: any;
  firstPara: any;
  secondPara: any;
  showLoader: boolean = false;

  constructor(private cosmicService: CosmicServiceService) { }

  ngOnInit() {
    this.showLoader = true;
    this.cosmicService.getHomeData()
    .subscribe((res)=>{
      var data  = JSON.stringify(res);
      let datum = JSON.parse(data)
      console.log(datum.objects[0].metadata['para1'])
      this.title = datum.objects[0].title;
      this.content = datum.objects[0].content;
      this.firstPara = datum.objects[0].metadata['para1'];
      this.secondPara = datum.objects[0].metadata['para2'];
      this.showLoader = false;
    })

  }

}
