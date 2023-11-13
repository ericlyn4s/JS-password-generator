# <JavaScript Password Generator>

## Description

This project intends to generate a password given user criteria. The user specifies the following:

1. Password length (between 8 and 128 characters)
2. Character type requirement(s) (must select at least one):
    a. Lowercase characters
    b. Capitalized characters
    c. Numeric characters
    d. Special characters

Utilizing javascript, the site then displays a randomized password that satisfies these specifications. The goal of this project was to get preliminary experience using JavaScript. I utilized basic JavaScript concepts such as 'for' loops and functions in order to fulfill the user requirements. I actually went a step further than the typical 'for' loop structure and created four distinct scenarios (one for each character type), and within these sections I'd increase the loop counter by one. This helped me consider 'for' loops in ways outside of the basic setup (i=0; i<array.length; i++).  

## Installation

This project requires no installation since it's hosted locally at https://ericlyn4s.github.io/js-password-generator/. The user can visit this site whenever he or she wishes to utilize the tool.

## Usage

Access the site at https://ericlyn4s.github.io/js-password-generator/.

From the landing page, select the 'Generate Password' button.

<image src="assets/images/js-landning-page.png" alt="The landing page; title of 'Password Generator' at the top, a white box headed with the text 'Generate a Password', an inner output area that generates as blank, a red 'Generate Password' button at the bottom of the main box" width="200"/>

Five questions will appear as alert boxes at the top of the page. First, input the number of characters required. This must be a number between 8 and 128, otherwise the alert will reappear until that requirement is met. If a non-whole number is input, the program will round down to nearest integer. Next, the program will ask four character requirement questions. The user must select at least one of these criteria. 

<image src="assets/images/js-criteria-selection.png" alt="The first question alerted once the user hits 'Generate Password'. This alert asks 'Password character requirement? (Between 8 and 128)" width="200"/>

After all five questions are answered (and meet the requirements described above), the site generates a password in the center of the page.

<image src="assets/images/js-password-generated.png" alt="A random password has been generated in the main box" width="200"/>

## Credits

I had a tutor session on 11/14/23 with Scott Everett.

## License

MIT License

Copyright (c) 2023 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
