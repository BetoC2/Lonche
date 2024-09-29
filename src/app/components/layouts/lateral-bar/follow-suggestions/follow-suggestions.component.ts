import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-suggestions',
  standalone: true,
  imports: [],
  templateUrl: './follow-suggestions.component.html',
  styleUrl: './follow-suggestions.component.scss'
})
export class FollowSuggestionsComponent {
  accounts = [
    { name: 'alan_mozo', followers: '20M', image: 'https://images.ecestaticos.com/s_s7gS41_P0oztzk21p0dS-IJYI=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd35%2Fa06%2F9fa%2Fd35a069fa93f0c03ec31659c38cb16e1.jpg' },
    { name: 'lusito_comunica', followers: '2M', image: 'https://yt3.googleusercontent.com/ytc/AIdro_nyXrAAt-FJ5azOAUoNd5Iw0aGQb-_b-SLSOkW0B_N2md4=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'cristiano', followers: '100K', image: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg' },
    { name: 'lewis_hamilton', followers: '150K', image: 'https://s1.elespanol.com/2021/01/22/ciencia/nutricion/553206479_171070440_1024x576.jpg' },
    { name: 'foodie_gdl', followers: '120K', image: 'https://lachicafoodie.wordpress.com/wp-content/uploads/2021/04/3.jpeg?w=1024' }
  ];
}
