import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-list-your-service',
  templateUrl: './list-your-service.component.html',
  styleUrls: ['./list-your-service.component.scss']
})
export class ListYourServiceComponent {
  public servicesArray: any = [
    {
      serviceimageSource: '/assets/images/Services/bands.svg',
      serviceTitle: 'Formatii'
    },
    {
      serviceimageSource: '/assets/images/Services/bar.svg',
      serviceTitle: 'Bar'
    },
    {
      serviceimageSource: '/assets/images/Services/cakes.svg',
      serviceTitle: 'Torturi'
    },
    {
      serviceimageSource: '/assets/images/Services/catering.svg',
      serviceTitle: 'Catering'
    },
    {
      serviceimageSource: '/assets/images/Services/decorations.svg',
      serviceTitle: 'Decoratiuni'
    },
    {
      serviceimageSource: '/assets/images/Services/fireworks.svg',
      serviceTitle: 'Artificii'
    },
    {
      serviceimageSource: '/assets/images/Services/invitations.svg',
      serviceTitle: 'Invitatii'
    },
    {
      serviceimageSource: '/assets/images/Services/locations.svg',
      serviceTitle: 'Locatii'
    },
    {
      serviceimageSource: '/assets/images/Services/photo.svg',
      serviceTitle: 'Fotografi'
    },
    {
      serviceimageSource: '/assets/images/Services/transportation.svg',
      serviceTitle: 'Transport'
    },
    {
      serviceimageSource: '/assets/images/Services/video.svg',
      serviceTitle: 'Videograf'
    },

  ]

  public secondSwipperConfig: SwiperOptions = {

    autoplay: false,
    updateOnWindowResize: true,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 8,
  };
}
