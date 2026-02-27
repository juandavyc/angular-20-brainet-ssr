import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialShareComponent } from '@shared/components/social-share/social-share.component';
import { BuyOptionsComponent } from '../../components/buy-options/buy-options.component';
import { DynamicGradientComponent } from '@shared/ui/dynamic-gradient/dynamic-gradient.component';

@Component({
  //selector: 'app-blocks-page',
  imports: [
    RouterLink,
    SocialShareComponent,
    BuyOptionsComponent,
    TitleCasePipe,
    DynamicGradientComponent,
  ],
  templateUrl: './blocks-page.component.html',
  styleUrl: './blocks-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlocksPageComponent {


}
