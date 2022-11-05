import React from 'react';
import Layout from "../../components/Layouts/Layout";
import MainContainer from '../../components/MainContainer/MainContainer';

function ViewInquiries(props) {
    return (
        <MainContainer/>
    );
}

export default ViewInquiries;

ViewInquiries.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};