import * as React from 'react';
import Header from './header';
import Footer from './footer';
import Forum from './forum';

export default function App() {

    return (
        <>
            <Header />

            <section className="hero is-medium">
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
                        <h2 className="subtitle">Featured Articles</h2>
                    </div>
                    </div>
                    <div className="level-right">
                    <div className="level-item">
                        <div className="field has-addons has-addons-centered">
                        <div className="control">
                            <a className="button is-small" disabled>
                            <i className="far fa-chevron-left" />
                            </a>
                        </div>
                        <div className="control">
                            <a className="button is-small">
                            <i className="far fa-chevron-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3">
                    <article>
                        <figure className="image is-5by3">
                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                        </figure>
                        <h2 className="subtitle">Creating a Group</h2>
                        <span className="tag is-rounded">Users & Groups</span>
                    </article>
                    </div>
                    <div className="column is-3">
                    <article>
                        <figure className="image is-5by3">
                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                        </figure>
                        <h2 className="subtitle">Downloading/Printing Your Invoices</h2>
                        <span className="tag is-rounded">Billing & Accounts</span>
                    </article>
                    </div>
                    <div className="column is-3">
                    <article>
                        <figure className="image is-5by3">
                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                        </figure>
                        <h2 className="subtitle">Changing the Account Owner</h2>
                        <span className="tag is-rounded">Billing & Accounts</span>
                    </article>
                    </div>
                    <div className="column is-3">
                    <article>
                        <figure className="image is-5by3">
                        <img src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png" />
                        </figure>
                        <h2 className="subtitle">Adding Internal Notes</h2>
                        <span className="tag is-rounded">Billing & Accounts</span>
                    </article>
                    </div>
                </div>
                </section>
                
                <section className="categories">
                <div className="columns is-multiline">
                    <div className="column is-6">
                    <div className="category">
                        <h1 className="title is-5">
                        Billing & Accounts <span>5 articles</span>
                        </h1>
                        <hr />
                        <ul>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            General Billing Overview
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Changing the Account Owner
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Downloading/Printing Your Invoices
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Downloading/Printing Your Invoices
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            What to Do When Your Card is Declined
                        </li>
                        </ul>
                        <h3 className="category-more">View All <i className="far fa-arrow-right icon-padding-left" /></h3>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="category">
                        <h1 className="title is-5">
                        FAQs <span>7 articles</span>
                        </h1>
                        <hr />
                        <ul>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Why Isn't My Custom Profile Data Showing on My Tickets?
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Why Won't My Gmail SMTP Settings Work?
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Is There a Customer Portal My Users Can Log in To?
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            How Do I Export My Contacts, Tickets, Reports?
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            How Do I Search for a Number?
                        </li>
                        </ul>
                        <h3 className="category-more">View All <i className="far fa-arrow-right icon-padding-left" /></h3>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="category">
                        <h1 className="title is-5">
                        Getting Started <span>6 articles</span>
                        </h1>
                        <hr />
                        <ul>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Creating a New Conversation
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Assigning Conversations and Changing Status
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Adding Internal Notes
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Configuring Your Inbox View
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Snoozing a Conversation
                        </li>
                        </ul>
                        <h3 className="category-more">View All <i className="far fa-arrow-right icon-padding-left" /></h3>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="category">
                        <h1 className="title is-5">
                        Users & Groups <span>3 articles</span>
                        </h1>
                        <hr />
                        <ul>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Understanding User Roles
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Creating a Group
                        </li>
                        <li>
                            <i className="fas fa-caret-right fa-xs icon-padding-right" />
                            Editing the Role of a User
                        </li>
                        </ul>
                        <h3 className="category-more">View All <i className="far fa-arrow-right icon-padding-left" /></h3>
                    </div>
                    </div>
                </div>
                </section>
            </div>

            <Footer />
            
        </>
    )
}
