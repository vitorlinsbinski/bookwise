<div align="center">
  <img src="/public/bookwise-logo-big.svg"/>
</div>

<h1 align = "center">Bookwise</h1>
<p>Bookwise is a website to share your rating about a book that you read. Besides, you can search for books based on their category, see your profile statistics, last ratings, popular books, and other features.</p>
<p>In this project, I learned and practiced a lot of NextJS features, like SSR and SSG. Furthermore, other technologies and libraries were used, like NextAuth for authentication using OAuth 2.0, Prisma ORM, MYSQL Database, React Query, Axios, ZOD, React Hook Form and others.</p>

<div align="center">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <img src="https://img.shields.io/static/v1?label=NextJS&message=v14.0.3&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=ReactJS&message=v18.0.0&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=TypeScript&message=v5.3.3&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=NextAuth&message=v4.24.5&color=blue&style=plastic&logo="/>
    <img src="https://img.shields.io/static/v1?label=PrismaORM&message=v5.7.0&color=blue&style=plastic&logo="/>
  </div>
</div>

<h4 align="center"> 
	Bookwise | Status: Done ✔️
</h4>

## Table of Contents

- [Features](#features)
- [Requirements to run the project](#requirements-to-run-the-project)
- [Running the application](#running-the-application)
- [Main Technologies](#main-technologies)
- [Final Result](#final-result)
  - [Home page](#home-page)
  - [Product Page](#product-page)
  - [Cart Modal](#cart-modal)
  - [Loading Status](#loading-status)
  - [Success page](#success-page)
- [Deploy](#deploy)
- [License](#license)
- [Author](#author)
- [Contributing Guidelines](#contributing-guidelines)

## Features

Bookwise allows you to expose your opinion about a certain book, sharing it with other people who register on the platform. Besides, the books are organized based on each category you choose. Also, you sign in on the website by using OAuth 2.0 provided by Google or by Github.

### 1. Browse the latest book reviews and the popular books

The Home page shows the latest book reviews sent by users registered on the platform, as well as the most popular books.

### 2. Explore all books based on each category

The Explore page shows all books based on each category available in the database. By clicking on a certain book, its detailed information appears. Additionally, you can write down a rating for the book selected and send it.

### 3. View your profile data and analytics

The profile page shows key information about your data such as your latest reviews and data analysis such as most read category, total number of pages read, etc.

## Requirements to run the project

<p>Before you run the project, check if you have [Node.js](https://nodejs.org/en/) installed on your machine, as well [Git](https://git-scm.com) to clone this repository.</p>

## Running the application

```bash
    # Clone this repository on your machine:
    $ git clone https://github.com/vitorlinsbinski/bookwise.git

    # Access the project folder in your terminal:
    $ cd bookwise

    # Install all dependencies:
    $ npm install

    # Run the application:
    $ npm run dev
```

## Main Technologies

- [ReactJS](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Stitches](https://stitches.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor React](https://www.npmjs.com/package/phosphor-react)
- [NextAuth](https://next-auth.js.org/)
- [ZOD](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/v3/)
- [Prisma ORM](https://www.prisma.io/s)

## Final Result

### Login page

<span>/login</span>
<img src="/public/screenshots/login.png"/>

### Home page

<span>/</span>
<img src="/public/screenshots/home1.png"/>
<img src="/public/screenshots/home2.png"/>

### Explore Page

<span>/explore</span>
<img src="/public/screenshots/explore.png"/>

### Profile Page

<span>/profile</span>
<img src="/public/screenshots/profile.png"/>

### Book Modal

<img src="/public/screenshots/bookmodal1.png"/>
<img src="/public/screenshots/bookmodal2.png"/>

## Deploy

Check out the project working: https://bookwise-six.vercel.app/login

## Contributing Guidelines

Contributions are welcome! Whether you want to fix a bug, add a new feature, or improve documentation, your contributions are valuable.

### 1. Fork the Repository

Click the "Fork" button at the top right of this repository to create a copy in your GitHub account.

### 2. Clone the Repository

Clone your forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/bookwise.git
```

### 3. Create a Branch

Create a new branch for your contribution:

```bash
git checkout -b feature/your-feature-name
```

### 4. Make changes

Make your desired changes to the codebase. Ensure that your code is working well without problems or bugs.

### 5. Test your changes

Before submitting a pull request, test your changes thoroughly to ensure they work as expected.

### 6. Commit and Push

Commit your changes and push them to your forked repository:

```bash
git add .
git commit -m "Add your descriptive commit message here"
git push origin feature/your-feature-name
```

## License

This project is licensed under [MIT](https://choosealicense.com/licenses/mit/) License.

### Author

<a href="https://github.com/vitorlinsbinski">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69444717?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Vitor Linsbinski</b></sub></a> <a href="https://github.com/vitorlinsbinski" title="">🚀</a>

Developed by Vitor Linsbinski

[![Linkedin Badge](https://img.shields.io/badge/-Vitor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorlinsbinski/)](https://www.linkedin.com/in/vitorlinsbinski/)
