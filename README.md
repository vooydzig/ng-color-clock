ng-color-clock
==

ng-color-clock is a very simple angularjs directive that let's You create nice clock widget to use in your project. It was inspired by: [http://thecolourclock.co.uk](http://thecolourclock.co.uk)

Usage
==
1. Include directive in your project(check `main.js` file).
2. In HTML use custom tag:

    <ng-color-clock></ng-color-clock>

Yes, that's it. It's that simple. You can optionally use `.color-clock` class to apply custom styling. Check `style.css` for example CSS. 

Customization
==
There are two optional attributes you can use to further customize colorclock.

format
--
**default: "hh:mm:ss a"** It can be either "#rgb", #RGB" or valid date time format.

    <ng-color-clock format="#rgb"></ng-color-clock>

    <ng-color-clock format="#RGB"></ng-color-clock>

    <ng-color-clock format="HH:mm:ss"></ng-color-clock>

properties
--
**default: ['background-color']** It's a list of CSS properties separated by " " that will be colored every second.

    <ng-color-clock properties="color"></ng-color-clock>

    <ng-color-clock properties="color border-color"></ng-color-clock>