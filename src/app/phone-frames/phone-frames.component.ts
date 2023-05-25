import { Component } from '@angular/core';
import { PhoneFrameContent } from '../phone-frame.interface';

@Component({
  selector: 'app-phone-frames',
  templateUrl: './phone-frames.component.html',
  styleUrls: ['./phone-frames.component.scss']
})
export class PhoneFramesComponent {
  public phoneFrameContentArray: PhoneFrameContent[] = [
    {
      title: 'Planificatorul de nunți Marity este intuitiv și ușor de folosit.',
      description: 'Planificarea evenimentelor poate fi o sarcină dificilă, însă cu ajutorul planificatorului de evenimente de la Marity Business poți să găsești informații generale despre toate serviciile necesare pentru ca evenimentul tău să fie un succes.De la locații de evenimente, la servicii de catering, decor și muzică, ai toate informațiile la îndemână într-un singur loc.',
      mobileDescr:'Ai toate informațiile la îndemână într-un singur loc.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_1.svg',
      className: 'full-width',
      buttonText: 'Încearca acum',
      buttonArrow: '/assets/images/icons/arrow_right.svg',
      showOnMobile: false
    },
    {
      title: 'Gestionare invitati',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_2.svg',
      className: 'half-width'
    },
    {
      title: 'Asezarea la mese',
      description: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit, sed do eiusmod incididunt.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_3.svg',
      className: 'half-width'
    },
    {
      title: 'Wedding Wall, singurul loc in care gasesti inspiratie de la furnizori in timp real. Un pinterest dedicat nuntilor.',
      description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod incididunt.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_4.svg',
      className: 'full-width',
      buttonText: 'Încearca acum',
      buttonArrow: '/assets/images/icons/arrow_right.svg',
      showOnMobile: true

    },
    {
      title: 'Checklist',
      description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod incididunt.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_5.svg',
      className: 'half-width'
    },
    {
      title: 'Site de nunta si invitatii online',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.',
      pictureSrc: '/assets/images/phone_frames/phone_frame_6.svg',
      className: 'half-width'
    }
  ]
}
