import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {

  public subscriptionDescriptionsArray = [
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi voluptatum sapiente perspiciatis, odit corporis ipsa aliquam sint quod veniam possimus, enim molestiae aspernatur? Eveniet repudiandae culpa ut nulla ',

      free: true,
      plus: true,
      pro: true,
    },
    {
      text: '  Cupiditate eligendi voluptatum sapiente perspiciatis, odit corporis ipsa aliquam sint quod veniam possimus, enim molestiae aspernatur? Eveniet repudiandae culpa ut nulla ',

      free: false,
      plus: true,
      pro: true,
    },
    {
      text: ' Lorem ipsum dolor possimus, enim molestiae aspernatur? Eveniet repudiandae culpa ut nulla ',

      free: false,
      plus: false,
      pro: true,
    },
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi voluptatum sapiente perspiciatis, odit corporis ipsa aliquam sint quod veniam possimus, enim molestiae aspernatur? Eveniet repudiandae culpa ut nulla ',

      free: false,
      plus: false,
      pro: true,
    },
    {
      text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi voluptatum sapiente perspiciatis, odit corporis ipsa aliquam sint quod veniam possimus, enim molestiae aspernatur? Eveniet repudiandae culpa ut nulla ',

      free: false,
      plus: true,
      pro: true,
    }
  ]

}
