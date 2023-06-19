# Programming Language Suggestor 
### ***Genesis Scott***

***

Github Pages link: [https://witherscript.github.io/Prorgramming-Language-Suggestor/](https://witherscript.github.io/Prorgramming-Language-Suggestor/)

The application employs an event-driven JavaScript approach, utilizing the Web API and conditional branching to dynamically update the DOM based on user input. The user responds to a series of randomly presented questions through a form. Each question's radio input element is structured with specific classes (ruby, js, cs) in the HTML markup, enabling efficient processing using a single JavaScript command, getQuerySelectorAll

### _Example retreival of user input:_
```javascript
 
// querySelectorAll queries the DOM for each question, returning
// an Array object whose length property is the number of answers 
// in the class <CLASSNAME> (possible values: ruby, js, cs)

document.querySelectorAll('input[name="question1"].<CLASSNAME>:checked').length; 
```

**The program's survey recommends one of the following 3 Languages:** C#, JavaScript, Ruby





## Technologies used:
  - Bootstrap 5.4
  - Git
  - HTML
  - CSS
  - Javascript



## Known bugs:
- Re-take survey button visible on window's initial load, even when user hasn't submitted the survey









Copyright &copy; 2023 Genesis Scott

**MIT License**

<font size="2">
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
</font>
