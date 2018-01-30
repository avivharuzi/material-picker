import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color/color.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css'],
  animations: [fadeInAnimation]
})
export class SchemaComponent implements OnInit {
  public slug: string;
  public schema: any;

  constructor(public colorService: ColorService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSchema();
  }

  getSchema() {
    this.slug = this.activatedRoute.snapshot.params.schema;
    this.colorService.getSchema(this.slug).subscribe((res) => {
      if (res) {
        this.schema = res.children;
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

}
