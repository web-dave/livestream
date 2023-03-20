import { Component } from '@angular/core';
import { FooPipe } from './foo.pipe';

@Component({
    selector: 'app-foo',
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.scss'],
    standalone: true,
    imports: [FooPipe]
})
export class FooComponent {

}
