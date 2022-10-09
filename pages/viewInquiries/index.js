import React from 'react';
import Layout from "../../components/Layouts/Layout";

function ViewInquiries(props) {
    return (
        <div>ViewInquiries</div>
    );
}

export default ViewInquiries;

ViewInquiries.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};