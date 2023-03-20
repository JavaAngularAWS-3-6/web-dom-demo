import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites : Workout[] = this.workoutService.getFavorites();
  visible : boolean = false;
  constructor(private workoutService : WorkoutService) { }

  ngOnInit(): void {
  }
  swapVisibility(){
    this.visible = !this.visible;
  }
 
}
