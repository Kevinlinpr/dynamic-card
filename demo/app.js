import React from 'react'
import ReactDOM from 'react-dom'
import DynamicCard from '../src/index'
import Img from './test.jpg'

const root = document.createElement('div');
window.document.body.appendChild(root);
ReactDOM.render(
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
    />,
    root
);