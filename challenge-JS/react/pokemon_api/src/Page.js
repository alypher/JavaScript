import React from 'react'

import Routes from './routes'

import './reset.css'

import Header from './_components/_header'
import Footer from './_components/_footer'

const Page = () =>
(
    <div className="page">
        <Header/>
        <Routes/>
        <Footer/>
    </div>
)

export default Page