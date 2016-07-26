import { AsyncPipe } from './async_pipe';
import { UpperCasePipe } from './uppercase_pipe';
import { LowerCasePipe } from './lowercase_pipe';
import { JsonPipe } from './json_pipe';
import { SlicePipe } from './slice_pipe';
import { DatePipe } from './date_pipe';
import { DecimalPipe, PercentPipe, CurrencyPipe } from './number_pipe';
import { ReplacePipe } from './replace_pipe';
import { I18nPluralPipe } from './i18n_plural_pipe';
import { I18nSelectPipe } from './i18n_select_pipe';
import { CONST_EXPR } from 'angular2/src/facade/lang';
/**
 * A collection of Angular core pipes that are likely to be used in each and every
 * application.
 *
 * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
 * property of the `@Component` decorator.
 */
export const COMMON_PIPES = CONST_EXPR([
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    ReplacePipe,
    I18nPluralPipe,
    I18nSelectPipe
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3BpcGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvbW1vbi9waXBlcy9jb21tb25fcGlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BS08sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjO09BQy9CLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCO09BQ3ZDLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCO09BQ3ZDLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYTtPQUM3QixFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWM7T0FDL0IsRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhO09BQzdCLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlO09BQzdELEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCO09BQ25DLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CO09BQzFDLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CO09BQzFDLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCO0FBRW5EOzs7Ozs7R0FNRztBQUNILGFBQWEsWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUNyQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7Q0FDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgYSBzZXQgb2YgY29tbW9uIFBpcGVzLlxuICovXG5pbXBvcnQge0FzeW5jUGlwZX0gZnJvbSAnLi9hc3luY19waXBlJztcbmltcG9ydCB7VXBwZXJDYXNlUGlwZX0gZnJvbSAnLi91cHBlcmNhc2VfcGlwZSc7XG5pbXBvcnQge0xvd2VyQ2FzZVBpcGV9IGZyb20gJy4vbG93ZXJjYXNlX3BpcGUnO1xuaW1wb3J0IHtKc29uUGlwZX0gZnJvbSAnLi9qc29uX3BpcGUnO1xuaW1wb3J0IHtTbGljZVBpcGV9IGZyb20gJy4vc2xpY2VfcGlwZSc7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICcuL2RhdGVfcGlwZSc7XG5pbXBvcnQge0RlY2ltYWxQaXBlLCBQZXJjZW50UGlwZSwgQ3VycmVuY3lQaXBlfSBmcm9tICcuL251bWJlcl9waXBlJztcbmltcG9ydCB7UmVwbGFjZVBpcGV9IGZyb20gJy4vcmVwbGFjZV9waXBlJztcbmltcG9ydCB7STE4blBsdXJhbFBpcGV9IGZyb20gJy4vaTE4bl9wbHVyYWxfcGlwZSc7XG5pbXBvcnQge0kxOG5TZWxlY3RQaXBlfSBmcm9tICcuL2kxOG5fc2VsZWN0X3BpcGUnO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBBbmd1bGFyIGNvcmUgcGlwZXMgdGhhdCBhcmUgbGlrZWx5IHRvIGJlIHVzZWQgaW4gZWFjaCBhbmQgZXZlcnlcbiAqIGFwcGxpY2F0aW9uLlxuICpcbiAqIFRoaXMgY29sbGVjdGlvbiBjYW4gYmUgdXNlZCB0byBxdWlja2x5IGVudW1lcmF0ZSBhbGwgdGhlIGJ1aWx0LWluIHBpcGVzIGluIHRoZSBgcGlwZXNgXG4gKiBwcm9wZXJ0eSBvZiB0aGUgYEBDb21wb25lbnRgIGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTU1PTl9QSVBFUyA9IENPTlNUX0VYUFIoW1xuICBBc3luY1BpcGUsXG4gIFVwcGVyQ2FzZVBpcGUsXG4gIExvd2VyQ2FzZVBpcGUsXG4gIEpzb25QaXBlLFxuICBTbGljZVBpcGUsXG4gIERlY2ltYWxQaXBlLFxuICBQZXJjZW50UGlwZSxcbiAgQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgUmVwbGFjZVBpcGUsXG4gIEkxOG5QbHVyYWxQaXBlLFxuICBJMThuU2VsZWN0UGlwZVxuXSk7XG4iXX0=