# Programming Language Suggestor 
### Genesis Scott

The application employs an event-driven JavaScript approach, utilizing the Web API and conditional branching to dynamically update the DOM based on user input. The user responds to a series of randomly presented questions through a form. Each question's radio input element is structured with specific classes (ruby, js, cs) in the HTML markup, enabling efficient processing using a single JavaScript command, getQuerySelectorAll

Example of 

```javascript
/* 
querySelectorAll queries the DOM, returning
an Array object whose length property is the number of answers in the class (CLASSNAME = ruby, js, cs)
*/
document.querySelectorAll('input[name="question1"].<CLASSNAME>:checked').length; 
```

**This program recommends one of the following 3 Languages:** C#, JavaScript, Ruby



## Technologies used:
  - Bootstrap 5.4
  - Git
  - HTML
  - CSS
  - Javascript




Copyright &copy; 2023 Genesis Scott

<font size="2">
**MIT License**

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