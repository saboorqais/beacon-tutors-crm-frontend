import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import Layout from "../../components/Layout/Layout";
import MainContainer from '../../components/MainContainer/MainContainer';

function AddInquiry(props) {
    return ( 
            <MainContainer selectedSection={"addInquiry"}/>
          
    );
}

export default AddInquiry;

AddInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};