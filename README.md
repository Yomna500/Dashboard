This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Set up constructions

the librarys setup:
npm install react-hot-toast
npm install recharts
npm install @reduxjs/toolkit react-redux
npm install axios

Implementation approach:

#login
First I created the landing page which is also home page
,Then imlemented the link to login page that I used mockapi as backend
I made users and took one of them and made it the initial user to login I used axios for api manipulation

Used Redux tookit for state mangment , Stored user/ loading / error as the states i needed to follow
Used user value in Redux to check if user logged in or not for the navigation bar

#Table
Started by making the Ui then used mockapi again for users data
implemented the pagination , sort and filter and dividing them into components for clearness
used useMemo for delay in pagination

#charts
Used the recharts library to display users values from users endpoint then made the chart with XAxis which is name
and Bar which is the value

Toastify for notofication about problems and login

Tailwind usage for design and responsive design

Due to some delays I couldn't implement all I wanted so here a list of things i would do

#TODO:
Logout
Animation for the home page
Loading imporovment
UI and colors
Login security
delays still needs improvment
