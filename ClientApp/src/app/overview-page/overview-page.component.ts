import { FeatureRequestItem } from './../models/feature-request-item';
import { FeatureRequestItemService } from './../services/feature-request-item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  featureRequestItemList: FeatureRequestItem[];
  featureRequestItem: FeatureRequestItem;

  constructor(private service: FeatureRequestItemService) { }

  ngOnInit() {
    this.subscription  =  this.service.getAll().subscribe(
      results  =>  {
        console.log('Feature Requests are loaded!', results);
        this.featureRequestItemList = results;

      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
