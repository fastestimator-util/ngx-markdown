/**
 * @fileoverview added by tsickle
 * Generated from: src/language.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class LanguagePipe {
    /**
     * @param {?} value
     * @param {?} language
     * @return {?}
     */
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
}
LanguagePipe.decorators = [
    { type: Pipe, args: [{
                name: 'language',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9sYW5ndWFnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUV2QixTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3ZDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkRBQTZELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNERBQTRELFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdkYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUNwRCxDQUFDOzs7WUFmRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFVBQVU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlJyxcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBMYW5ndWFnZVBpcGUgaGFzIGJlZW4gaW52b2tlZCB3aXRoIGFuIGludmFsaWQgdmFsdWUgdHlwZSBbJHt2YWx1ZX1dYCk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBMYW5ndWFnZVBpcGUgaGFzIGJlZW4gaW52b2tlZCB3aXRoIGFuIGludmFsaWQgcGFyYW1ldGVyIFske2xhbmd1YWdlfV1gKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuICdgYGAnICsgbGFuZ3VhZ2UgKyAnXFxuJyArICB2YWx1ZSArICdcXG5gYGAnO1xuICB9XG59XG4iXX0=