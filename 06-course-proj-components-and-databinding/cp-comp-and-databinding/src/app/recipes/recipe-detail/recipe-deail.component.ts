import { Component , OnInit, Input } from "@angular/core";

@Component({
    selector: "app-recipe-detail",
    templateUrl: "./recipe-deail.component.html",
    styleUrls: ["./recipe-deail.component.css"]
})

export class RecipeDetailComponent implements OnInit {
    @Input() recipe: any;

    constructor() {}

    ngOnInit() {}
}

