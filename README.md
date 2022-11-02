![rick-and-morty-31013](/Users/samanthamartins/Downloads/rick-and-morty-31013.png)

## Hi 👋,

<h3> Welcome to my Rick and Morty React FE App!</h3>

This is a front end project built as single-page application with React.

The app is responsive and based on the consumption of the [Rick and Morty API](https://rickandmortyapi.com/).
Within all the application data, I chose to manipulate the characters data.




## Decisions:

The app was built based on the scaffolding sent by Appspace. However all the functionalities and the design were build from scrach.

As it is a SPA, all the information is displayed on the homepage, which presents a search bar where the user can search for the characters by name, by default the page already shows the characters alphabetically ordered and displays a result of 20 characters per page, however, the pagination filter is implemented at the beginning and at the end of the list.
There is also the option to select a filter per category that can be applied, only one can be chosen at a time.

The list is a set of green and red cards, according to their status, alive or dead, accordingly. It shows all the character information, name, gender, image, species, status and when the user hovers over the image more details such as the number of episodes that the character appears and the first and the last place they were seen.

All components are organized in the components folder, where each one has its individual style file. There is also a static page - homepage, which gathers the main components of the app.

It is possible to observe that I used typescript nonuniformly in all the files of the project because I learned the technology while developing the project, and for reasons of time and knowledge I could not complete it. However, I intend to solidify the knowledge of it.

I also used hooks in the application, although I have worked more with React classes, I have been updating myself and developing some projects with hooks.




## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`



## Links

### Github
URL for the project repo and deploy
[Ricky & Morty TC](https://github.com/samsmc/Rick-Morty).

### Hosted
Github Page

## Backlog    
- Apply typescript to all project files.
- Implement E2E testing with Cypress.
- Upgrade css to scss.
