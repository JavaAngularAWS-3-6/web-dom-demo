import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts : Workout[] = [];
  constructor(private workoutService : WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.getWorkoutsAPI().subscribe(json => this.workouts = json);
  }

}
