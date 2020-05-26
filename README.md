# about

This repo is forked from https://github.com/jfcere/ngx-markdown.
The reason for building this repo is ngx-markdown cannot parse the tex mathematical expression perfectly.

Therefore we modify the parsing regex in lib/src/markdown.service.ts.(line 86)<br>
Run `npm run build:lib` and copy dist/lib/* to this repo's lib branch (lib, lib2)<br>
Please be aware of the validate date of the lincese, it will affect using npm to install this repo.<br>

## lib

change regex to `\$([^$]+?)\$` to fix the issue of not being able to parse single number in tex.

## lib2

change regex to `\$([^\s][^$]*?)\$` to fix the issue of not being able to use single dollar sign twice. (it will take everything between them as tex.) Now it will only parse the case when there is not space trailling after dollor sign.

ex:

* `$ echo hello world$` ==> not match
* `$echo hello world$` ==> match