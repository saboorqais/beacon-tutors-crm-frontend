import {useRouter} from "next/router";
import Link from "next/link";
import React from "react";

export function SidePanelList(props) {

    const router = useRouter();

    return <>
                <h5>{props.sectionName}</h5>
                <ul>
                    {props.rawInquiry.map(({href, title}) => (
                        <li key = {title}>
                        <Link href = {href}>
                        <a
                            className = {router.asPath === href && 'selected'}
                        >
                    {title}
                        </a>
                        </Link>
                        </li>
                    ))}
                </ul>

        </>
        ;
}