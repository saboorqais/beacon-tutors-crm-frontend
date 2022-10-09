import React from 'react';
import Layout from "../../components/Layouts/Layout";
import {useRouter} from "next/router";

function Section(props) {

    const router = useRouter()
    const { section } = router.query
    console.log(router.query)
    return (
        <div>This is Section : {section}</div>
    );
}

export default Section;

Section.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};