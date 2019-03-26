import { FeatureRequestItemService } from './../services/feature-request-item.service';
import { FeatureRequestItem } from './../models/feature-request-item';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-request-page',
  templateUrl: './new-request-page.component.html',
  styleUrls: ['./new-request-page.component.css']
})
export class NewRequestPageComponent implements OnInit {

  constructor(private service: FeatureRequestItemService){}

  ngOnInit(){}

  add(name: string, description: string): void {
    console.log("Add wordt aangeroepen!");
    console.log("The title is: ", name);
    console.log("The description is: ",  description);
    name = name.trim();
    description = description.trim();
        
    const newFeatureRequestItem: FeatureRequestItem = {name, description} as FeatureRequestItem;
    this.service.addFeatureRequestItem(newFeatureRequestItem)
      .subscribe(todoItem => {
        this.service.getAll();
      });

  }

}
