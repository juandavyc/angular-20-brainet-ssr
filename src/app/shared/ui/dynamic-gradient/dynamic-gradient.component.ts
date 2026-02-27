import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'dynamic-gradient',
  imports: [CommonModule],
  templateUrl: './dynamic-gradient.component.html',
  styleUrl: './dynamic-gradient.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicGradientComponent {
  public seed = input.required<string>();

  public gradientStyle = computed(() => {
    const hash = this.stringToHash(this.seed());

    // Generate distinct colors based on hash
    const h1 = hash % 360;
    const h2 = (hash + 120) % 360;
    const h3 = (hash + 240) % 360;

    // Mixed gradients for a premium "glass" or "diffused" look
    const radialGradients = [
      `radial-gradient(circle at ${10 + (hash % 40)}% ${20 + (hash % 60)}%, hsl(${h1}, 45%, 35%) 0%, transparent 60%)`,
      `radial-gradient(circle at ${60 + (hash % 30)}% ${10 + (hash % 50)}%, hsl(${h2}, 40%, 25%) 0%, transparent 70%)`,
      `radial-gradient(circle at ${40 + (hash % 40)}% ${70 + (hash % 30)}%, hsl(${h3}, 35%, 20%) 0%, transparent 100%)`,
    ];

    return {
      'background': radialGradients.join(', ') + ', #171717'
    };
  });

  private stringToHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }
}
