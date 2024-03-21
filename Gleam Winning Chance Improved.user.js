 ==UserScript==
 @name         Gleam.io Winning Chance Improved
 @namespace    GLEAM
 @version      1.2
 @description  lets show the odds of winning with improved accuracy
 @author       You
 @icon         httpi.imgur.com6PuVE2l.png
 @match        gleam.io
 @grant        none
 ==UserScript==

$(document).ready(function() {
    if (document.getElementById(current-entries) !== null) {
        $('.span4.blue-square.ng-scope').after('div class=span4 green-square.ng-scope span class=square-describe mont span class=status small span class=current ng-binding id=winning_chanceCalculating...span span span class=description ng-bindingWinning Chancespan span div');
        var elems = document.querySelectorAll(div.square-row.row-fluid.center.ng-scope  .span4);

        for (var i = 0; i  elems.length; i++) {
            elems[i].setAttribute(style, width25%;);
        }

        var gleam = setInterval(function() {
            var ownElement = document.querySelector(.status.ng-binding);
            var totalElement = document.querySelector(.current.ng-binding);
            if (ownElement !== null && totalElement !== null) {
                 Remove commas and parse integers
                var own = parseInt(ownElement.innerHTML.replace(,g, ''));
                var total = parseInt(totalElement.innerHTML.replace(,g, ''));
                
                 Perform the calculation with the corrected math
                var chance = own  total  100;
                var formattedChance = Math.round(chance  1000)  1000;  Round to three decimal places

                document.getElementById(winning_chance).innerHTML = formattedChance + %;
                
                console.log([GLEAM] Your winning chance is  + formattedChance + %!);
                clearInterval(gleam);
            }
        }, 500);
    }
});
