import React from 'react';
import Layout from "../../components/Layouts/Layout";
import {useRouter} from "next/router";
import MainContainer from '../../components/MainContainer/MainContainer';

function SubSection(props) {

    const router = useRouter()
    const { subSection,section } = router.query
   

    return (
      <MainContainer selectedSubSection={subSection} selectedSection={section}/> 
    );
}

export default SubSection;

SubSection.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};