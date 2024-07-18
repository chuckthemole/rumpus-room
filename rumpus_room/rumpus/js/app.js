import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Forum from './forum';
import ForumThread from './forum_thread';

export default function App() {

    const path_to_hero_background = '/static/rumpus/images/golden_gate_bikes.jpg';
    // .hero {
    //     background: linear-gradient(
    //         rgba(255, 255, 255, 0.705),
    //         rgba(255, 255, 255, 0.301)
    //     ),
    //     url('/static/rumpus/images/golden_gate_bikes.jpg');
    //     background-position: center;
    //     background-repeat: no-repeat;
    //     background-size: cover;
    // }
    // create a hero background style like the css above
    // use the path_to_hero_background variable for the url
    const hero_background_style = {
        background: `linear-gradient(
            rgba(255, 255, 255, 0.705),
            rgba(255, 255, 255, 0.301)
        ),
        url(${path_to_hero_background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <>
            <Header />

            <section className="hero is-medium" style={ hero_background_style }>
                <div className="hero-body has-text-centered">
                    <h1 className="title is-2">Share stories, thoughts, ideas</h1>
                    <div id="hero-input-group" className="field has-addons has-addons-centered">
                        <Forum />
                    </div>
                </div>
            </section>

            <div className="container is-max-desktop">
                <section className="featured">
                    <div className="level">
                        <div className="level-left">

                            <div className="level-item">
                                <div className='columns'>
                                    <div className='column is-full'>
                                        <ForumThread />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field has-addons has-addons-centered">
                                    <div>
                                        <span>
                                            ToDO: write instructions here!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
            
        </>
    )
}
