import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialShareComponent } from '@shared/components/social-share/social-share.component';
import { BuyOptionsComponent } from '../../components/buy-options/buy-options.component';
import { DynamicGradientComponent } from '@shared/ui/dynamic-gradient/dynamic-gradient.component';

@Component({
  selector: 'app-kits-post',
  imports: [
    RouterLink,
    SocialShareComponent,
    BuyOptionsComponent,
    TitleCasePipe,
    DynamicGradientComponent
  ],
  templateUrl: './kits-post.component.html',
  styleUrl: './kits-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KitsPostComponent { }
