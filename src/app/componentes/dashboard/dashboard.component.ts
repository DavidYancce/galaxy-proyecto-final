import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IBroma } from '../../modelos/broma.interface';
import { JokeService } from '../../servicios/joke.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  broma: IBroma | undefined;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.generarBroma();
  }

  generarBroma() {
    this.jokeService.getJoke().subscribe({
      next: (broma) => (this.broma = broma),
      error: (error) => {
        // Si hay un error, se vuelve a llamar a la función de generación de bromas después de 1 segundo
        setTimeout(() => this.generarBroma(), 1000);
      },
    });
  }
}
