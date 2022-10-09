import React from 'react';
import Layout from "../../components/Layouts/Layout";

function AddInquiry(props) {
    return (
        <div>AddInquiry</div>
    );
}

export default AddInquiry;

AddInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};