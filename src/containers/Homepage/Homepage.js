import React, { Component } from 'react';

import classes from './Homepage.css';
import Category from '../../components/Category/Category';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Homepage extends Component {
    state = {
        cartAmount: '1',
        homepage: {
            imageUrl: 'https://i.imgur.com/793X3RJ.jpg'
        },
        categories: [
            {
                categoryName: 'e-Commerce',
                level: 'basic',
                amount: 15,
                imageUrl: 'https://i.imgur.com/sDSJz0z.jpg',
                bigImage: false
            },
            {
                categoryName: 'Web Design',
                level: 'medium',
                amount: 23,
                imageUrl: 'https://i.imgur.com/w0HhfBM.jpg',
                bigImage: true
            },
            {
                categoryName: 'SEO',
                level: 'basic',
                amount: 5,
                imageUrl: 'https://i.imgur.com/R8qW8wC.jpg',
                bigImage: false
            },
            {
                categoryName: 'Startup',
                level: 'advanced',
                amount: 7,
                imageUrl: 'https://i.imgur.com/oVRlQRr.jpg',
                bigImage: false
            },
            {
                categoryName: 'Graphic Design',
                level: 'advanced',
                amount: 11,
                imageUrl: 'https://i.imgur.com/8kRiAl2.jpg',
                bigImage: false
            },
            {
                categoryName: 'App Development',
                level: 'medium',
                amount: 23,
                imageUrl: 'https://i.imgur.com/szypjTe.jpg',
                bigImage: false
            },
            {
                categoryName: 'Html',
                level: 'basic',
                amount: 3,
                imageUrl: 'https://i.imgur.com/1UcKm2Z.jpg',
                bigImage: false
            }
        ]
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    homepage={true}
                    imageUrl={this.state.homepage.imageUrl}
                    cartAmount={this.state.cartAmount} />
                <div className={classes.Height50} />
                <div className={classes.HomepageSection}>
                    <div className={classes.HomepageSectionClearfix}>
                        <div className={classes.CategorySection}>
                            <h1><strong>Our Categories</strong></h1>
                            <div className={classes.Height10}></div>
                            <h3>The Best Courses</h3>
                        </div>
                        {this.state.categories.map((category, index) => (
                            <Category
                                key={index}
                                categoryName={category.categoryName}
                                levelType={category.level}
                                amount={category.amount}
                                imageUrl={category.imageUrl}
                                isBig={category.bigImage}/>
                        ))}
                    </div>
                </div>
                <div className={classes.Height70} />
            </Aux>
        );
    }
}

export default Homepage;
