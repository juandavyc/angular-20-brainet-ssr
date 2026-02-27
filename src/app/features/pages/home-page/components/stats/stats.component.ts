import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Stat } from '../../interfaces';

@Component({
  selector: 'stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {

  public readonly stats: Stat[] = [
    {
      title: 'Créditos',
      value: '+5K',
      description: 'Intercambiados',
      icon: 'fa-solid fa-coins',
    },
    {
      title: 'Tutores',
      value: '+1.2K',
      description: 'Activos',
      icon: 'fa-solid fa-user-graduate',
    },
    {
      title: 'Aprendizaje',
      value: '+10K',
      description: 'Horas Totales',
      icon: 'fa-solid fa-clock-rotate-left',
    }
  ];

}
