import React from 'react';
import Layout from "../../components/Layouts/Layout";
import {useRouter} from "next/router";

function SubSection(props) {

    const router = useRouter()
    const { subSection } = router.query

    return (
        <div>This is Sub Section : {subSection}</div>
    );
}

export default SubSection;

SubSection.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};