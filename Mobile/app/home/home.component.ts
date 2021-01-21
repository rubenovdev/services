import { ItemEventData } from "tns-core-modules/ui/list-view"
import { Component, OnInit } from "@angular/core";
import {serviceService } from './service.service'

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],

    
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }

    facts = [];

    constructor(private serviceService: serviceService) {
    }

    ngOnInit() {
        this.serviceService.getData().subscribe((result) => {
            this.facts=result
        }, (error) => {
            console.log(error);
            });
        console.log(this.facts)
    }



}
