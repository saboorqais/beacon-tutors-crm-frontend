import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html> <Head>
                <link
                    rel = "stylesheet"
                    href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <link
                    href = "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel = "stylesheet"
                />
            </Head>
                <body>
                <div id = {'globalLoader'}>
                    <div className = "loader">
                        <div/>
                        <div/>
                    </div>
                </div>
                <Main/> <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
