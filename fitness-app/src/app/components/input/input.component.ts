import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  input:string = "";
  constructor(private workoutService : WorkoutService) { }

  postWorkout(): void {
    let workout : Workout = {workoutId : 0, title:this.input}
    console.log(workout);
    this.workoutService.postWorkoutAPI(workout).subscribe();
  }

  ngOnInit(): void {
  }

}
