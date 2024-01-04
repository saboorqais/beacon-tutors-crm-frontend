import React from 'react';
import Layout from "../../components/Layout/Layout.js";
import MainContainer from '../../components/MainContainer/MainContainer';

function ViewInquiries(props) {
  
    return (
        <div><MainContainer/></div>
    );
}

export default ViewInquiries;

ViewInquiries.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};