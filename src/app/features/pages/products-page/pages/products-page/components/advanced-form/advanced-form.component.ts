import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category, Material, } from '../interfaces';

@Component({
  selector: 'advanced-form',
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './advanced-form.component.html',
  styleUrl: './advanced-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedFormComponent {


  public readonly categories: Category[] = [
    {
      id: 1,
      name: "Todas las Categorías",
    },
    {
      id: 2,
      name: "Ciencias Exactas (Math & Física)",
    },
    {
      id: 3,
      name: "Idiomas y Conversación",
    },
    {
      id: 4,
      name: "Programación y Web",
    },
    {
      id: 5,
      name: "Diseño Gráfico y Audiovisual",
    },
    {
      id: 6,
      name: "Marketing Digital y Redes",
    },
    {
      id: 7,
      name: "Escritura y Redacción Académica",
    },
    {
      id: 8,
      name: "Música e Instrumentos",
    },
    {
      id: 9,
      name: "Soft Skills y Liderazgo",
    },
    {
      id: 10,
      name: "Preparación de Exámenes (Saber Pro/SAT)",
    },
    {
      id: 11,
      name: "Finanzas Personales y Excel",
    },
    {
      id: 12,
      name: "Artes Plásticas y Manualidades",
    }
  ];

  public readonly materials: Material[] = [
    {
      id: 1,
      name: "Todas las Modalidades",
    },
    {
      id: 2,
      name: "Sesión Virtual (En vivo)",
    },
    {
      id: 3,
      name: "Presencial (Punto de encuentro)",
    },
    {
      id: 4,
      name: "Híbrido (Teoría online + Práctica)",
    },
    {
      id: 5,
      name: "Por Hora de Tutoría",
    },
    {
      id: 6,
      name: "Por Proyecto / Entrega Final",
    },
    {
      id: 7,
      name: "Cursos Pregrabados (Acceso libre)",
    },
    {
      id: 8,
      name: "Revisión de Documentos / Feedback",
    },
    {
      id: 9,
      name: "Mentoría Grupal",
    }
  ];

}
