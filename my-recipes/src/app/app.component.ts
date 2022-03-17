import { Component } from '@angular/core';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Recipes';
  loadedFeature: string = 'recipes';

  onNavigate(feature: string) {
    console.log(feature);
    this.loadedFeature = feature;
  }
  
  constructor(private ngxBootstrapConfirmService: NgxBootstrapConfirmService){}

  action() {
    let options ={
      title: 'Sure you want to delete this comment?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        console.log('Okay');
      } else {
        console.log('Cancel');
      }
    });
  }
}
