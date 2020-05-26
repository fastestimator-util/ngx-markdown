import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
    }
    LanguagePipe.prototype.transform = function (value, language) {
        if (typeof value !== 'string') {
            console.error("LanguagePipe has been invoked with an invalid value type [" + value + "]");
            return value;
        }
        if (typeof language !== 'string') {
            console.error("LanguagePipe has been invoked with an invalid parameter [" + language + "]");
            return value;
        }
        return '```' + language + '\n' + value + '\n```';
    };
    LanguagePipe = __decorate([
        Pipe({
            name: 'language',
        })
    ], LanguagePipe);
    return LanguagePipe;
}());
export { LanguagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9sYW5ndWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBYUEsQ0FBQztJQVhDLGdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7UUFDdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQywrREFBNkQsS0FBSyxNQUFHLENBQUMsQ0FBQztZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyw4REFBNEQsUUFBUSxNQUFHLENBQUMsQ0FBQztZQUN2RixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3BELENBQUM7SUFaVSxZQUFZO1FBSHhCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7T0FDVyxZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZScsXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihgTGFuZ3VhZ2VQaXBlIGhhcyBiZWVuIGludm9rZWQgd2l0aCBhbiBpbnZhbGlkIHZhbHVlIHR5cGUgWyR7dmFsdWV9XWApO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxhbmd1YWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihgTGFuZ3VhZ2VQaXBlIGhhcyBiZWVuIGludm9rZWQgd2l0aCBhbiBpbnZhbGlkIHBhcmFtZXRlciBbJHtsYW5ndWFnZX1dYCk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAnYGBgJyArIGxhbmd1YWdlICsgJ1xcbicgKyAgdmFsdWUgKyAnXFxuYGBgJztcbiAgfVxufVxuIl19