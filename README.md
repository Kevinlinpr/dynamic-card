# Dynamic Card

[![npm](https://img.shields.io/npm/v/dynamic-card?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/dynamic-card) [![GitHub stars](https://img.shields.io/github/stars/kevinlinpr/dynamic-card?color=ff4569&logo=github&style=for-the-badge)](https://github.com/Kevinlinpr/dynamic-card)

![Twitter Follow](https://img.shields.io/twitter/follow/Tvierrousjan?style=social)

a light-weight React Dynamic Card Component.

<div align=center>

![](https://github.com/Kevinlinpr/dynamic-card/blob/master/doc/effect.gif?raw=true)

</div>


## Installation

```sh
npm i dynamic-card
```
## Usage

```js
import DynamicCard from 'dynamic-card';
import Img from './test.jpg'

const MyCard = () => {
    <DynamicCard
        Img={Img}
        Category={"Episode 1"}
        Title={"Responsible growth for the long term"}
        Summary={"Going all out to maximize the revenue from your app or game won’t necessarily guarantee"+
        "that you’ll have a healthy business in the future. Sometimes, respecting your user and pulling back"+
        "from extracting everything you can from them may be the key to long-term success. A more holistic approach,"+
        " one which considers the game, the players, and the people who create the game can reap big rewards . "+
        " In this episode our hosts are joined by Sarah Fuchs and Judy Check from Crowdstar, "+
        " a game developer that has built their long term success by taking an unconventional path by game industry standards..."}
        AuthorName={"Apps, Games & Insights"}
        AuthorDate={"March 5, 2020"}
    />
}
```
## API
| param       | detail                                         | type     | require* |
| ----------- | ---------------------------------------------- | -------- | -------- |
| Img         | card image which will display when mouse enter | string   |   true   |
| Category    | card category of the detail                    | string   |   true   |
| Title       | title of the card                              | string   |   true   |
| Summary     | summary of the card                            | string   |   true   |
| AuthorName  | the name of this card's creater                | string   |   true   |
| AuthorDate  | the date detail of this card                   | string   |   true   |
| onClick     | onClick Event handler                          | function |   false  |