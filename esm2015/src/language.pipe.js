import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let LanguagePipe = class LanguagePipe {
    transform(value, language) {
        if (typeof value !== 'string') {
            console.error(`LanguagePipe has been invoked with an invalid value type [${value}]`);
            return value;
        }
        if (typeof language !== 'string') {
            console.error(`LanguagePipe has been invoked with an invalid parameter [${language}]`);
            return value;
        }
        return '```' + language + '\n' + value + '\n```';
    }
};
LanguagePipe = __decorate([
    Pipe({
        name: 'language',
    })
], LanguagePipe);
export { LanguagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9sYW5ndWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyw2REFBNkQsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0REFBNEQsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN2RixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3BELENBQUM7Q0FDRixDQUFBO0FBYlksWUFBWTtJQUh4QixJQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDO0dBQ1csWUFBWSxDQWF4QjtTQWJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlJyxcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBMYW5ndWFnZVBpcGUgaGFzIGJlZW4gaW52b2tlZCB3aXRoIGFuIGludmFsaWQgdmFsdWUgdHlwZSBbJHt2YWx1ZX1dYCk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBMYW5ndWFnZVBpcGUgaGFzIGJlZW4gaW52b2tlZCB3aXRoIGFuIGludmFsaWQgcGFyYW1ldGVyIFske2xhbmd1YWdlfV1gKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuICdgYGAnICsgbGFuZ3VhZ2UgKyAnXFxuJyArICB2YWx1ZSArICdcXG5gYGAnO1xuICB9XG59XG4iXX0=