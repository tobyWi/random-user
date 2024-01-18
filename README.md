# Installation

- npm install
- npm run dev

# Code test Criteria

- A button that fetches a random user from https://randomuser.me/api/.
- Display a loading indicator when the request is sent.
- Show an error message if something goes wrong.
- Display user information (in an optional format) if everything is successful.

# My thoughts

- I was uncertain about the design direction for the app. I knew that I didn't want it to be overly designed and preferred a more minimalistic approach. I went back and forth between different ideas, but I am pleased with the end result.

- I am aware that the code test didn't necessarily have to be done in Next.js. Initially, I thought the criteria required using Next.js, but later I found out that React was also an option. However, since I had already started working on it in Next.js, I decided to proceed with that framework.

- Given the small size of the app, I didn't put too much effort into creating highly reusable components. I adopted a YAGNI (You Aren't Gonna Need It) approach, meaning that if a component is only needed in one place, there might be no need to make it reusable.

- I really wanted to write a test with MSW for this, but I felt that time was running out and encountered several errors while trying to set up Jest.

- I believe this was a well-designed code test. Despite its seemingly straightforward nature, there are various ways to approach it, similar to when chefs are asked to make an omelette. :)
