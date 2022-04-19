import { Component , OnInit, Input, ElementRef } from "@angular/core";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-deail.component.html",
    styleUrls: ["./recipe-deail.component.css"]
})

export class RecipeDetailComponent implements OnInit {
    @Input() recipe: any;
    count: number = 0; 

    constructor(private elRef: ElementRef) {}

    ngOnInit() {}

    onClickDropdown(value: any) {
        // console.log(value.style.display);
        console.log(value);
        this.count++
        if(this.count % 2 == 0) {
            value.style.display = 'none';
        } else {
            value.style.display = 'block';
        } 
    }
}

