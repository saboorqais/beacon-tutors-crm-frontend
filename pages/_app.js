import '../styles/globals.css'
import dynamic from "next/dynamic";

function MyApp({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);
    const Toaster = dynamic(() => import("react-hot-toast").then((module) => module.Toaster));

    return getLayout(
        <>

        <Toaster

            position = "bottom-right"
            containerStyle = {{
                zIndex: "10000001",
            }}
            toastOptions = {{
                className: "toast", duration: 5000, success: {
                    iconTheme: {
                        primary: "#4FC3B1",
                    },
                }, error: {
                    iconTheme: {
                        primary: "#FF6F66",
                    },
                }, style: {
                    zIndex: "10000000 !important",
                },
            }}
        />
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
