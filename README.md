# Analogenius - [Live Site](https://analogenius.vercel.app/)

### Analogenius is a tool powered by OpenAI's chat completion api that allows users to learn difficult concepts with easy to understand analogies to what they already know best. 

![Screen Recording 2023-04-16 at 07 20 02 PM](https://user-images.githubusercontent.com/99948055/232352265-64882e65-e3c8-47d6-985f-1c6dd4410e06.gif)


## Tech:

Analogenius is built with Next.js and Supabase, the OpenAI chat completion endpoint, and uses TailwindCSS with the daisyUI plugin for styling. I elected to use the new Next.js 13 app directory to learn more about using server/client components and other new features such as the updated route handler for easily creating REST endpoints. I used Supabase for user auth, a postgreSQL database, and the convenient REST api that is provided for creating, reading, and updating data. 

## How it works

On the home page, follow the steps provided to enter a concept you would like to learn and select an analog - some topic you are already familiar with that you would like to use as a comparison point - and Analogenius will generate a response that explains the concept in simple terms of the analog. 

<img width="1491" alt="Screen Shot 2023-04-16 at 7 20 26 PM" src="https://user-images.githubusercontent.com/99948055/232352224-caaefe7d-80fe-4efa-be44-e7af66566d02.png">

You can see past generated responses on the `/search` page, where the relevant tags (an emoji demonstrating the comparison being used) as well as the number of likes that response has will be displayed. You can filter by "concept" or "analog" by selecting the corresponding radio button and typing in the search input.


<img width="1336" alt="Screen Shot 2023-04-16 at 2 39 16 PM" src="https://user-images.githubusercontent.com/99948055/232339437-cf20ae41-6e67-44cc-9b07-f83aab7aba54.png">

Selecting a response will take you to the `/search/[id]` page, where you can read the full response, and leave a like as well as add to your own list of favoritesif you are signed in.

<img width="935" alt="Screen Shot 2023-04-16 at 2 39 38 PM" src="https://user-images.githubusercontent.com/99948055/232339506-6a1be23c-9a55-4b64-ab11-15741abdc695.png">

As I mentioned, users can add responses to their list of favorites, which will show up on the `/profile` page for signed in users. However, you are still able to generate responses and view responses even if you are not signed in. This is what the user profile page will look like for signed in users:

<img width="1495" alt="Screen Shot 2023-04-16 at 3 06 32 PM" src="https://user-images.githubusercontent.com/99948055/232339550-da75e9e2-5c36-467b-a1a0-fe3665eb1a1f.png">


## Takeaways and Future Additions

I learned quite a bit about the newest Next.js 13 features as well as various Supabase services through buildign Analogenius. As I continue to build on the app, I'd like to implement additional features for users with an account such as the ability to create new analogs that they can either use privately or choose to publish for use by all users. 


