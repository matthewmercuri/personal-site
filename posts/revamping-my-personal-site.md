---
title: Revamping My Personal Site with Minimalism in Mind
date: 24-03-2022
author: Matthew Mercuri
---

# Revamping My Personal Site with Minimalism in Mind
In this post, I outline the motivation for revamping my personal site. Following a minimalist philosophy, I explain my choices and process in creating everything you currently see on my site.

## Starting with why
Having a place to publish my thoughts and ideas has always seemed like an integral development tool. I am being especially conscious to call it a *development* tool. As a software developer, it should help me explain my decisions with the tools I use, the methodologies I follow, and the techniques I employ. In a vast field like quantitative finance, starting from an idea for a post can help narrow in on the exact knowledge I expect to gain using math as a guide.

Below is a screenshot of my previous website. I hope find that there is a slight improvement in the aesthetics.
[SHOW PICTURE OF PREVIOUS SITE]

I think I did a lot of things right with it. But of course, I also did a lot wrong. Perhaps my time would have been better spent on modifying the old code. Though, the prospect of starting fresh seemed to resonate with me. I have learned much more about code and myself in the past couple of years. I felt a ground-up redesign would best capture this.

The code of the old site gives me anxiety, and I could not bring myself to publish on it. With that admittedly petty rationale, I decided to start over.

## The rough idea
I think something I got acutely wrong with the previous site was the lack of focus. There are some questions that I probably should have asked myself prior to development.
- What is the site for? 
- What do I want people to interact with? 
- What gives the visitor the most value?

All of this essentially became an after thought. No one cares about who I am. They want to read something interesting, learn something new, or laugh at my ignorance. **Content is king.** With this realization, I set out to design the site with content as the centrepiece.

## The content
Okay, so it was plainly obvious that content should be the main focus. But what content should I create? What am I qualified to share?

On what to create, I think its fairly simple: anything I find interesting. I have longed harboured a passion for data science and quantitative finance. So much so that I pursued a degree in financial mathematics and taught myself full-stack development. I currently find myself as a professional full-stack developer at a small consultancy specializing in the financial technology industry. So, naturally I should share my thoughts on quantitative finance, data science, and development.

The question of what I am *qualified* to share thoughts on is more nuanced. I firmly believe the only person to decide whether I am qualified to speak on any topic I talk about is the reader. I am not one who believes in credentialism. Nor do I believe in holding "experts" blindly in high esteem. No amount of letters after a name or temporal measures of experience should qualify one as an authority on a topic. Strictly the strength of one's ideas and actions should build confidence in them.

I don't think I am going to have many iron-clad, extremely well thought out write-ups. I intend to maintain the tone of a learner, leaving mistakes and missteps published.

## The design
I am not a designer, and wanted to make sure the design reflected my limiting capabilities. This essentially amounted to following solid design principles and keeping things minimalistic. I have learned a lot about this watching [Gary Simon](https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow) on YouTube. Following his advice, I started with mock-ups on [Figma](https://www.figma.com/).

I knew that if I kept things simple. I could ensure the content is maintained as the focus and still make sure it looks half-decent.

[SHOW PICTURES OF FIGMA MOCK-UPS]

## The tech stack
I think I got the ideal tech stack mostly correct on my last go. I think it is optimal to have the site be completely static. This is made possible with [static site generators](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/). My favourite, given that it is React based and has other capabilities is [Next.js](https://nextjs.org/).

There are many advantages to having a static site. What I care about most is performance, and the ease of hosting (both in a cost and effort sense). It is also rather trivial to integrate building and deploying into a CI/CD pipeline.

I also wanted to make the tech stack minimal and the easiest way I can conceive a blog becoming bloated is through its content management system. This part I struggled on. I wanted to build on a headless CMS like [Strapi](https://strapi.io/).
