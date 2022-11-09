import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from "../../components/Layouts/Layout";
import MainContainer from '../../components/MainContainer/MainContainer';
import { getAllInquiries } from '../../components/Reducers/Inquiries';

function ViewInquiries(props) {
  
    
    return (
        <div><MainContainer/></div>
    );
}

export default ViewInquiries;

ViewInquiries.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};