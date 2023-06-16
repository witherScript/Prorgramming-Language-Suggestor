Programming Language Suggester
Create an application for people interested in coding to decide which language they should learn first. Keep in mind that even though all languages have similarities and switching between languages and platforms is very common in both internships and jobs, applicants should still put some thought into which language they should learn.

Choose at least three languages that prospective learners should consider. Here are some possibilities:

Ruby
C#
JavaScript
Go
Python
Rust
Swift
Feel free to pick any language that interests you, either from this list or from your own research.

Then create a Programming Language Suggester webpage (using HTML, CSS, JavaScript, and Web APIs) that asks future students a series of questions about themselves and provides a language suggestion based on their answers. You can ask questions about the languages themselves, the kinds of environments where these languages are used, or anything else you find relevant. Note that you are not required to research the languages extensively and you can even choose silly or irrelevant questions to determine which language would be best — for instance, people that like singing in the rain may prefer Ruby while chihuahua lovers might prefer C#.

Include a form with a minimum of 5 survey questions.
Offer a minimum of 3 different language suggestions.
One branch should return one result. It shouldn't be possible to be suggested two languages at once.
Make sure that when the user submits the survey again (for a second or third time), that previous answers are hidden, cleared, or replaced prior to showing the new result.
Don't forget regular Git commits and a detailed README. Commit messages should always be on-topic and professional in tone.
A Few Important Notes
For the branching logic, you are not required to take every possible combination of answers into account. Feel free to use very simple logic, or even ignore the user's responses for some questions as long as you show some good functionality and offer a minimum of 3 languages.

Do not use window methods to interact with the user. This includes window.alert(), window.confirm(), and window.prompt(). Instead use a form to gather user input and event handler properties or event listeners to handle events. To display the survey results to the user, you can show and hide HTML or update the values of existing HTML elements to communicate results.