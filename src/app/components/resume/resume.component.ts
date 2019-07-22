import { Component, OnInit } from '@angular/core';
//import '../../../assets/Resume.pdf'


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  src = "https://drive.google.com/open?id=19T_pf-K2W0TeK8AIIQVCuAHfEHe6fyIF";
  //src = "../../../assets/Resume.pdf";

  ngOnInit() {
  }


  ViewBtnOnClick() {
    setTimeout(() => {
      window.open(this.src, "_blank");
    }, 1000);
  }
}
