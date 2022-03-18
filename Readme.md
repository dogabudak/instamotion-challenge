
# Doga's instamotion-challenge

This is the challenge done by doga budak for instamotion in 11th of March 2022.
You can follow this documentation as a guide to this project.

## Pipeline status:

### Package Manager
This repo is based on Yarn2. Ensure that you have a global installation of
[Yarn2](https://yarnpkg.com/getting-started/install#global-install).
To use yarn2, you need node version >= 10.19.

You can test if yarn is installed correctly by using:
```sh
yarn --version
```

## Quick starter on running the app
Installing all the dependencies
```sh
yarn
```

#Server
Under `/server` you can find the server side code which was written with typescript using express.
To run the server please simply use `yarn start`. I used mongodb to stimulate a real database for this example.

#Client
Under `/client` you can find the client side code which was written with typescript. I used next.js as requested. Code is formatted with prettier.
To run the clent please simply use `yarn dev`.
I tried to stick to atomic design principles. To achieve that I created 2 types of components with styled components. (Basic and Compact)

### Workspace Structure
This application follows a micro service like approach. The following sections explains the folder structure:

- `./`: TypeScript applications defined as independent modules.
    - [`client/`](client/): Folder containing the frontend application.
    - [`server/`](server/): Folder containing the backend application.
- `./`
    - `.gitignore`: File and folder globs to be ignored by git.
    - `yarn.lock`: Auto generated lock file from yarn.



#Road map for the final product

Since I couldn't spare enough time on this product I have some additional improvements that I want to make.

1- Couldn't finish the server side implementation, Client side is still using the graphql api that instamotion provided.

2- Could not implement any tests !

3- Since i did not implement tests yet i could not finish the gitflow that i wanted to 

4- Implementation of cypress also did not started yet 

5- I did not implement a husky hook for the commit messages and tests but i wrote the commit messages according to conventional commit

6- I would dockerize the implementation

