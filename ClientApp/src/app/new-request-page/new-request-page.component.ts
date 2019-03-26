import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-request-page',
  templateUrl: './new-request-page.component.html',
  styleUrls: ['./new-request-page.component.css']
})
export class NewRequestPageComponent implements OnInit {

  ngOnInit(){}

  add(title: string, description: string): void {
    console.log("Add wordt aangeroepen!");
    console.log("The title is: ", title);
    console.log("The description is: ",  description);

  }

}
