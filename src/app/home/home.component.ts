import { Component } from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Food} from "../shared/models/Food";
import {RatingModule} from "ng-starrating";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    RatingModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[] = [];
constructor(private foodService:FoodService) {
}
ngOnInit(): void {
  this.foods = this.foodService.getAll()
}
}
