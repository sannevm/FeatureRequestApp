import { FeatureRequestItem } from './../models/feature-request-item';
import { FeatureRequestItemService } from './../services/feature-request-item.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatSortModule } from '@angular/material';
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

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: FeatureRequestItemService) { }

  ngOnInit() {
    this.subscription  =  this.service.getAll().subscribe(
      results  =>  {
        this.featureRequestItemList = results;
        this.dataSource = new MatTableDataSource(this.featureRequestItemList);
        this.dataSource.sort = this.sort;
      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  addVote(featureRequestItem: FeatureRequestItem) {
    if (featureRequestItem) {
      featureRequestItem.numberOfVotes += 1;
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
