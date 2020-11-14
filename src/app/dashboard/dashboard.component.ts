import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  panelOpenState1: boolean = false
  panelOpenState2: boolean = false
  panelOpenState3: boolean = false
  panelOpenState4: boolean = false
  
  myData

  WorkRoomUpdates: any
  columnNames = ['Months', 'Complied', 'Delayed', 'Failed', 'Trends'];
  data = [
    ["Nov-18", {v: 70, f: '70%'}, {v: 15, f: '15%'}, {v: 12, f: '12%'}, {v: 70, f: '70%'}],
    ["Dec-18", {v: 100, f: '100%'}, {v: 0, f: '0%'}, {v: 0, f: '0%'}, {v: 100, f: '100%'}],
    ["Jan-19", {v: 100, f: '100%'}, {v: 0, f: '0%'}, {v: 0, f: '0%'}, {v: 100, f: '100%'}],
    ["Feb-19", {v: 100, f: '100%'}, {v: 0, f: '0%'}, {v: 0, f: '0%'}, {v: 100, f: '100%'}]
  ];
  options = {
    colors: ['#6ea412', '#e7b506', '#c33b13', '#3d6bc3', '#3d6bc3'], is3D: true,
    curveType: 'function',
    // hAxis: {
    //   title: 'Person'
    // },
    vAxis: {
      title: 'Performance(%)',
      viewWindow: {
        min: 0,
        max: 110
      },

      format: '#\'%\''
    },
    seriesType: 'bars',
    series: { 3: { type: 'line' } },
    legend: { position: 'bottom', alignment: 'center' },
    pieSliceText: 'value-and-percentage',
    pointsVisible: true
    
  };

  calenderData = [
    { 'person1Initials': 'JW', 'person2Initials': 'TF', 'isFavourite': true, 'subject': '[CID-16090022] Form 1120X - Amended U.S. Cormporatio...', 'time': '09:30 AM', 'isOpened': false},
    { 'person1Initials': 'JW', 'person2Initials': 'MT', 'isFavourite': false, 'subject': '[CID-24500024] Acquisition Strategies, Tools & Methods...', 'time': '09:45 AM', 'isOpened': false},
    { 'person1Initials': 'TF', 'person2Initials': 'TF', 'isFavourite': false, 'subject': '[CID-16090022] Form 1120X - Amended U.S. Cormporatio...', 'time': '10:30 AM', 'isOpened': false},
    { 'person1Initials': 'PW', 'person2Initials': 'TF', 'isFavourite': false, 'subject': '[CID-16090022] Form 1120X - Amended U.S. Cormporatio...', 'time': '10:45 AM', 'isOpened': false},
    { 'person1Initials': 'JW', 'person2Initials': 'PW', 'isFavourite': true, 'subject': '[CID-16090022] Form 1120X - Amended U.S. Cormporatio...', 'time': '11:30 AM', 'isOpened': false},
   
    
  ]
  constructor() { }

  ngOnInit() {
    // this.myData = [
    //   ['2004/05',  165,      938,         522,             998,           450,      614.6],
    //   ['2005/06',  135,      1120,        599,             1268,          288,      682],
    //   ['2006/07',  157,      1167,        587,             807,           397,      623],
    //   ['2007/08',  139,      1110,        615,             968,           215,      609.4],
    //   ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    // ]
    var event1 = ' mentioned you in a comment:'
    this.WorkRoomUpdates = [
      {'name': 'Mike Williams', 'event': event1, 'name2': 'Nick Holden', 'update': 'Right on tranch with the ongoing marketing campaign. Should be able to send in a report by tonight.', 'date': '5-DEC-2019' },
      {'name': 'Mike Williams', 'event': event1, 'name2': 'Nick Holden', 'update': 'Right on tranch with the ongoing marketing campaign. Should be able to send in a report by tonight.', 'date': '5-DEC-2019' },
      {'name': 'Mike Williams', 'event': event1, 'name2': 'Nick Holden', 'update': 'Right on tranch with the ongoing marketing campaign. Should be able to send in a report by tonight.', 'date': '5-DEC-2019' },
    ]
  }

  entities = [
    { value: 'allEntities', viewValue: 'All Entities' },
    { value: 'Entity1', viewValue: 'Entity 1' },
    { value: 'Entity2', viewValue: 'Entity 2' }
  ];

  trends = [
    { value: 'allCategories', viewValue: 'All Categories' },
    { value: 'categories1', viewValue: 'Category 1' },
    { value: 'categories1', viewValue: 'Category 2' }
  ];

}
