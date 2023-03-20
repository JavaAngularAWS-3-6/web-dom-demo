import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  @Input()
  workout : Workout = {workoutId : 0, title: ""}
  constructor(private workoutService : WorkoutService) { }

  ngOnInit(): void {
  }
  addFavorite () {
    this.workoutService.addToFavorites(this.workout);
  }

}
