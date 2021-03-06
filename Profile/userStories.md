1. As a developer, I need my site to use valid and semantic markup, so that employers will love me. DONE
2. As the creator, I need the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience. Done
3. As a developer, I need portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects. Done.
4. As a visitor, I want the images to be responsive, so that content stays properly proportioned. Done.
5. As a visitor, I want the viewport properly sized, so that content fits all the size I have available. Done.
6. As a visitor, I want the primary nav to be responsive with a menu, so that I can get around using any device. Done.
7. As a hiring manager, I want to quickly be able to assess whether I should contact the developer to set up an interview, based on web development skills shown on the site. Done.

Next Day User Stories
1. As a developer, I want portfolio items to be displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.

Develop Template using pair lab code as an example.

Develop list of projects and export to rawData js file


2. As a visitor, I want the portfolio to show the newest projects on top so that I can easily see the developers recent work.

Apply sort function to rawData per pair lab

3. As a visitor, I want relative timestamps on projects to give me a idea of how many days ago something was created.

We literally don't know how to do this kind of date math yet? Great!

3rd Day User Stories

1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
This means your links do NOT navigate to a new page.
Instead, your "single page app" shows only the section related to the navigation tab that is selected.
You can use data- HTML attributes to associate a content section with a particular tab
2. Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
3. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

4th Day User Stories

1. As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily. YEP
2. As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles. YEP
3. As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience. YEP
4. Set up your h1, h2, h3 elements according to a type scale. YEP
5. Include some good fonts that work well together. YEP
6. Technical Requirements and Grading Rubric

7. Add Handlebars to your app.
8. Use web fonts (such as Google fonts) to style all text content in your app.
9. Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.
10. +1 E.C. for using a theme CSS file.

Class 06 Assignment
1. As a developer, I want to store my project data in a .json file, so that I can keep it organized.
2. As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.

Class 07 Assignment
1. Eliminate all for loops. DONE
2. Use .map() where you are transforming one collection into another. DONE
3. Enclose the contents of each script file in an IIFE that exports any interface methods. Not sure what that second part means. Done, unless we have to nest everything inside ready functions.
4. Use templates to avoid repetition of HTML structure. Use .map() to convert collections of data into collections of DOM nodes.
5. Think of a useful way to use .reduce(). Maybe you want to put some "fun facts and stats" in your footer, or on a separate page, like funStats.html?

09 Class Assignment
1. Make sure your code passes ESLint. DONE
2. Perform a self code review, in GitHub, that includes comments (or GitHub Issues) in the areas that you will refactor.
Your comments (or Issues) should include high level technical details about how the related code should be refactored.
Use FP concepts and JS array methods to organize and/or manipulate your data.
Ensure that your JS modules are written in an OOP fashion and are wrapped in an IFFE in order to expose the module to the 'window' object.
As usual, work on a branch, and submit your final PR in Canvas.
Include a summary of your experience as a PR comment.
Have fun, be creative, and take your code to the next level!

(function(){ /* code */ }()); // Crockford recommends this one
06.
(function(){ /* code */ })(); // But this one works just as well
