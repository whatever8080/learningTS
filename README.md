# learningTS
share my gains from learning Typescript :joy:

## misunderstanding concepts
### 1. `types`,`include` and `/// <reference/>`
   - **difference**: both `types` and `include` are complier option,while `reference` is in the top of a script.
   - **similarity**: they do both include all files that they specified to your program so that typescript will extract ***all global variables,type and declaration(usually includeing module augmentation,global augmentation,ambient(runtime) module declaration and ambient namespace declaration)*** from these files to the current type collection that you can use globally, and provide suggestion and completement when you import a module that included in those files.