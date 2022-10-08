import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import Nav from '../Nav/Nav';
import {SidePanelList} from "../SidePanelList";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Layout({children}) {
    const router = useRouter();

    const Pattern = dynamic(() =>
        import('../../assets/backgroundPattern.svg').then(
            (module) => module.ReactComponent
        )
    );

    const rawInquiry = [
        {
            href: '/rawInquiry/noReply',
            title: 'No Reply',
        },
        {
            href: '/rawInquiry/notContacted',
            title: 'Not Contacted',
        },
    ];
    const requirementsGathering = [
        {
            href: '/requirementsGathering/incompleteRequirements',
            title: 'Incomplete Requirements',
        },
        {
            href: '/requirementsGathering/reviewing',
            title: 'Reviewing',
        },
        {
            href: '/requirementsGathering/formalitiesLeft',
            title: 'Formalities',
        },
    ];
    const teacherLocating = [
        {
            href: '/teacherLocating/searchingApplicants',
            title: 'Searching Applicants',
        },
        {
            href: '/teacherLocating/applicantsFound',
            title: 'Applications Found',
        },
        {
            href: '/teacherLocating/recommendationsShared',
            title: 'Recommendations Shared',
        },
    ];
    const demoProcessing = [
        {
            href: '/demoProcessing/demoReminders',
            title: 'Demo Reminders/Calling',
        },
        {
            href: '/demoProcessing/clientFormalities',
            title: 'Client Formalities',
        },
        {
            href: '/demoProcessing/teacherFormalities',
            title: 'Teacher Formalities',
        },
        {
            href: '/demoProcessing/dayOneProcessing',
            title: 'Day One Processing',
        },
        {
            href: '/demoProcessing/dayTwoProcessing',
            title: 'Day Two Processing',
        },
        {
            href: '/demoProcessing/extendedDemo',
            title: 'Extended Demo',
        },
        {
            href: '/demoProcessing/clientReviewing',
            title: 'Client Reviewing',
        },
    ];
    const feeProcessing = [
        {
            href: '/feeProcessing/teacherTransfer',
            title: 'Teacher Transfer',
        },
        {
            href: '/feeProcessing/clientTransfer',
            title: 'Client Transfer',
        },
        {
            href: '/feeProcessing/companyTransfer',
            title: 'Company Transfer',
        },
        {
            href: '/feeProcessing/delayed',
            title: 'Delayed',
        },
    ];
    const rejected = [
        {
            href: '/rejected/lowBudget',
            title: 'Low Budget',
        },
        {
            href: '/rejected/noResponse',
            title: 'No Response',
        },
        {
            href: '/rejected/teacherNotFound',
            title: 'Teacher Not Found',
        },
        {
            href: '/rejected/notInterested',
            title: 'Not Interested',
        },


    ];

    return (
        <>
        <div className = {'background'}>
        <Pattern width = "100%" height = "100%"/>
        </div>
        <Nav/>
            <div className={"pageLayout"} >
                {!(router.asPath === "/signin") &&
            <aside>
            <ul>
                <li>
                    <SidePanelList rawInquiry = {rawInquiry} sectionName={"Raw Inquiry"}/>
                </li>
                <li>
                    <SidePanelList rawInquiry = {requirementsGathering} sectionName={"Requirements Gathering"}/>
                </li>
                <li>
                    <SidePanelList rawInquiry = {teacherLocating} sectionName={"Teacher Locating"}/>
                </li>
                <li>
                    <SidePanelList rawInquiry = {demoProcessing} sectionName={"Demo Processing"}/>
                </li>
                <li>
                    <SidePanelList rawInquiry = {feeProcessing} sectionName={"Fee Processing"}/>
                </li>
                <li>
                    <Link href = {"/funded"}>
                        <a
                            className = {router.asPath === "/funded" && 'selected'}
                        >
                            Funded
                        </a>
                    </Link>
                </li>
                <li>
                    <SidePanelList rawInquiry = {rejected} sectionName={"Rejected"}/>
                </li>
            </ul>
            </aside>
                }
                <main>{children}</main>
            </div>

    </>
    );
}
