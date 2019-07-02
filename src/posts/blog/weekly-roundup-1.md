---
title: Weekly Roundup 1
date: 28-06-19
---

I've been pushing a few of my friends to do one of these every week while being slack myself. I think it's time to change that with my very own kayak-flavoured weekly roundups.

<!-- end excerpt -->

I'm not very good at writing down the small "hey check me out, I'm da man" moments as they happen, so I think I’ll just give a few points and a bit of an explanation about the project I’ve been chewing on for so long - my website.

## Gatsby.js

I’ll be the first to admit that I was suckered in by Gatsby’s use of React, GraphQL, and Webpack. Yes, they’re buzzwords, but they’re also names of languages I don’t have much experience with yet, and… well, have you _seen_ Gatsby’s logo?

![Gatsby's killer-stylish logo](../../images/gatsby-icon.png)

My only experience with React before starting this project was the first six sections of [this popular Udemy course](https://www.udemy.com/react-the-complete-guide-incl-redux/). So I’m not a complete newcomer, but I struggle to stick with Udemy courses. Eventually, the desire to make something for myself that wasn’t just the course project became too strong and I decided to do something about it.

Anyway, I installed the CLI (which was its own, unrelated hassle), pulled down the default starter, and got started on the tutorial. Let me say just one thing about the tutorial: _it’s amazing!_ Not only is it easy to follow, but I was able to come back later and pick it apart when my site needed some functionality that I knew I'd done before.

The only thing that I can really complain about is that Gatsby, being, you know, a _framework,_ adds a lot of invisible wrapper components that add a lot of noise to the React Dev Tools. It was a bit of a shock the first time I wanted to debug what was happening to my own component, props-wise, and had to open about 15 layers of Gatsby-added components before I even got to the root of my site. But, really, that's just a minor thing - especially when I can eye-drop the component I want to look at.

## I sort of understand React now

Before, when I said that I had done a few sections of a Udemy course, that might have been impressive.

You might ask me questions such as:

- "What did you make?"
- "What did you learn?"
- "Is React really that hard to learn?"

Unfortunately for (the hypothetical) you, I would have just stared blankly. I don't know the component lifecycle, I didn't make a to-do list, I can't tell you about what React Hooks to use when, and I definitely still don't understand the intricacies of Webpack.

I don't really _get_ React.

But that's all right. I don't need to know these things for Gatsby, for my first project, for the codebase that gets me comfy with components. Of course, I _should_ learn these things. But I don't _need_ them.

What I'm trying to say is that I'm less intimidated by React now. Gatsby might be a framework - so it's not _really_ React - but I figure it's better for showing off my learning than some class exercises that hundreds of thousands of other students have also done.

## The meta

I've learned a few nifty tricks over the course of the week and a bit working on this project.

### Snippets

Once I got the hang of styled-components (which took about three hours, thanks to their [amazing docs](https://www.styled-components.com/docs/basics#getting-started)), I soon realised that I was, essentially, hand-typing the same `import` / `export` statements over and over again.

```javascript
import React from "react";
import styled from "styled-components";

const Name = ({ className, children }) => {};

const StyledName = styled(Name)``;

export default StyledName;
```

So I set up some snippets in my editor ([Visual Studio Code](https://code.visualstudio.com/)). You can copy the following into your own snippets settings if you do a lot of work with styled-components too (`ctrl`+`shift`+`p` -> `Preferences: Configure User Snippets`)!

```json
  "styled-components": {
    "prefix": "ims",
    "body": "import styled from 'styled-components';"
  },

  "component w/ styled-components export": {
    "prefix": "rco",
    "body": [
      "const ${1:Name} = ({className, children}) => {$0}",
      "",
      "const Styled${1:Name} = styled(${1:Name})``",
      "",
      "export default Styled${1:Name}"
    ]
  }
```

### The GitHub repo

With this project, I decided to try some things I've seen around but never had the chance to try for myself. One of these was [Netlify](https://www.netlify.com/), which I've set up to preview deploy all of the Pull Requests I do.

I've also set up [Codacy](https://app.codacy.com/project/by-k4y4k/by-k4y4k.github.io/dashboard), as I've got nobody else to blame for the code than myself, and a second pair of eyes - even if they are robotic - can't hurt.

Not only that, but I've also enabled a neat little tool called [Greenkeeper](https://greenkeeper.io) to manage my `package.json` dependencies. What Greenkeeper does is it creates a Pull Request for any _out-of-range_ dependencies and makes sure all the usual Pull Request tests pass with the updated dependency. It's pretty great.

## Now What?

I've got a few things I want to achieve over the next week, namely:

1. Implement some kind of TDD on my website
2. Finish my website
3. Fill out the portfolio
4. Get a resume together

I've heard a few buzzwords and common names when it comes to React and TDD (Jest, anyone?), but I'm yet to try it out for myself. Hopefully, I can get the hang of it without too many tears.
