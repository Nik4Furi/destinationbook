import React from 'react'

import IdelSpaceCard from './IdelSpaceCard'

//Images Stuff
import Explore from '../../../../assets/Home/Steps/explore.png'
import Book from '../../../../assets/Home/Steps/book.png'
import Dashboard from '../../../../assets/Home/Steps/dashboard.png'
import Notify from '../../../../assets/Home/Steps/matches.png'


const IdelSpaceProcedure = () => {
    return (
        <>
            <section>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <IdelSpaceCard dataaosduration={'0'} img={Explore} title={'Explore'} description={'Choose your ideal workspace location and solution.'} link={'spaces'} />
                    <div className="bg-red-500 w-[21px] h-[9px] hidden md:block"></div>
                    <IdelSpaceCard dataaosduration={'500'} img={Book} title={'Book '} description={'Fill neccessary detail form for booking, and wait for comfirmation .'} />
                    <div className="bg-red-500 w-[21px] h-[9px] hidden md:block"></div>
                    <IdelSpaceCard dataaosduration={'1500'} img={Notify} title={'Notify'} description={'After filled, wait response from the sponser, get the notify .'} />
                    <div dataaosduration={'3000'} className="bg-red-500 w-[21px] h-[9px] hidden md:block"></div>
                    <IdelSpaceCard img={Dashboard} title={'Chackout'} description={'After confrimation, go to checkout'} link={'checkout'} />
                </div>
            </section>
        </>
    )
}

export default IdelSpaceProcedure
