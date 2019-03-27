import { FeatureRequestItem } from './../models/feature-request-item';
import { FeatureRequestItemService } from './../services/feature-request-item.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  featureRequestItemList: FeatureRequestItem[];
  featureRequestItem: FeatureRequestItem;
  dataSource;
  displayedColumns: string[] = ['position', 'name', 'description', 'date', 'voteButton', 'numberOfVotes'];


  constructor(private service: FeatureRequestItemService) { }

  ngOnInit() {
    this.subscription  =  this.service.getAll().subscribe(
      results  =>  {
        console.log('Feature Requests are loaded!', results);
        this.featureRequestItemList = results;
        this.dataSource = new MatTableDataSource(this.featureRequestItemList);
      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  addVote(featureRequestItemList, featureRequestItem) {
    console.log("Vote was submitted");
    if (featureRequestItem) {
      console.log("update is aangeroepen, de id is = ", featureRequestItem.id);
      featureRequestItem.numberOfVotes += 1;
      console.log("")
      this.service.updateFeatureRequestItem(featureRequestItem, featureRequestItem.id)
        .subscribe(featureRequestItem => {
          const ix = featureRequestItem ? this.featureRequestItemList.findIndex(h => h.id === featureRequestItem.id) : -1;
          if (ix > -1) { this.featureRequestItem[ix] = featureRequestItem; }
        });
      featureRequestItem = undefined;
    
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
