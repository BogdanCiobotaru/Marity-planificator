import { Component, OnInit } from '@angular/core';
import { AnswearsAndQuestions } from '../phone-frame.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-question-answear',
  templateUrl: './question-answear.component.html',
  styleUrls: ['./question-answear.component.scss'],
  // animations: [
  //   trigger('revealAnimation', [
  //     state('hidden', style({
  //       height: '0px',
  //       opacity: 0,
  //       overflow: 'hidden'
  //     })),
  //     state('visible', style({
  //       height: '*',
  //       opacity: 1,
  //       overflow: 'hidden'
  //     })),
  //     transition('hidden => visible', animate('300ms ease-in')),
  //     transition('visible => hidden', animate('300ms ease-out'))
  //   ])
  // ]
})
export class QuestionAnswearComponent implements OnInit {
  public indexExpanded: number;
  public isHidden = true;

  public displayContents: AnswearsAndQuestions[]

  public ngOnInit(): void {
    this.displayContents = [
      {
        question: 'Ce este Marity Business? ',
        answear: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, architecto pariatur! Corrupti, similique vitae! Impedit sed debitis praesentium fugiat blanditiis?'
      },
      {
        question: 'Cum pot folosi Marity Business?? ',
        answear: 'Architecto, libero labore? Deleniti voluptate odit pariatur labore iusto. Explicabo quos sequi quia tenetur pariatur earum, consequuntur voluptatem at voluptatum architecto officia magni alias vitae doloribus libero exercitationem natus nobis cupiditate dolor cumque odio nisi iste. Quia architecto consectetur porro quam minima vitae enim sint '
      },
      {
        question: 'Cum pot folosi Marity Business?',
        answear: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed minus blanditiis quis odit. Expedita, beatae. Architecto, libero labore? Deleniti voluptate odit pariatur labore iusto. Explicabo quos sequi quia tenetur pariatur earuum architecto officia magni alias vitae doloribus libero exercitationem natus nobis cupiditate dolor cumque odio nisi iste. Quia architecto consectetur porro quam minima '
      },
      {
        question: 'Ce tip de abonament sa aleg?',
        answear: 'accusantium, incidunt rerum eveniet ipsam perferendis? Quo dignissimos beatae obcaecati labore quos? Fugit voluptatem quam veniam cumque ipsum dicta, fugiat et, eius officiis placeat sint iusto odio iste vitae harum obcaecati laborum eligendi rerum dolore magnam. Culpa asperiores nemo vero?'
      },
      {
        question: 'Ce imagini pot incarca?',
        answear: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
      },
      {
        question: 'Cum voi fi vizibil pentru toti utilizatorii?',
        answear: 'accusantium, incidunt rerum eveniet ipsam perferendis? Quo dignissimos beatae obcaecati labore quos? Fugit voluptatem quam veniam cumque ipsum dicta, fugiat et, eius officiis placeat sint iusto odio iste vitae harum obcaecati laborum eligendi rerum dolore magnam. Culpa asperiores nemo vero?'
      },
      {
        question: 'Pot comunica cu utilizatorii direct?',
        answear: 'Fugit voluptatem quam veniam cumque ipsum dicta, fugiat et, eius officiis placeat sint iusto odio iste vitae harum obcaecati laborum eligendi rerum dolore magnam. Culpa asperiores nemo vero?'
      },
      {
        question: 'Pot genera contracte, oferte?',
        answear: ' Quia architecto consectetur porro quam minima vitae enim sint accusantium, incidunt rerum eveniet ipsam perferendis?'
      },
      {
        question: 'Cum poate fi folosit calendarul?',
        answear: 'Deleniti voluptate odit pariatur labore iusto. Explicabo quos sequi quia tenetur pariatur earum, consequuntur voluptatem at voluptatum architecto officia magni alias vitae doloribus libero exercitationem natus nobis cupiditate dolor cumque odio nisi iste. Quia architecto consectetur porro quam minima vitae enim sint accusantium, incidunt rerum eveniet ipsam perferendis? '
      },


    ]
  }

  public toggleElement() {
    this.isHidden = !this.isHidden;
  }

  public showAnswearDetails(index: number): void {
    this.indexExpanded = this.indexExpanded === index ? -1 : index;
  }
}
