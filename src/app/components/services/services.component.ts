import { Component, OnInit } from '@angular/core';
import { CosmicServiceService } from './../../services/cosmic-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  firstPara: any;
  secondPara: any;
  showLoader: boolean = false;
  constructor(private cosmicService: CosmicServiceService) { }

  ngOnInit() {
    this.showLoader = true;
    this.cosmicService.getServices()
    .subscribe((res)=>{
      var data  = JSON.stringify(res);
      let datum = JSON.parse(data);
      this.firstPara = datum.objects[0].metadata['para1'];
      this.secondPara = datum.objects[0].metadata['para2'];
      this.showLoader = false;
    })
  }

}
