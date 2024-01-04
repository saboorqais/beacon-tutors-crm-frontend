import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Eye, EyeOff } from "lucide-react";
import styles from "../../styles/SignIn.module.css";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";

function SignIn(props) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [isDisabled, setIsDisabled] = useState(false);

  /*   useEffect(() => {
          onAuthStateChanged(auth, (user_) => {
              setUser(user_);
              user_ && router.push('/');
          });
      }, [user]);
   */
  const showPassword = () => {
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  /*   const signInHandler = async (e) => {
          e.preventDefault();
          if (email === '' || password === '') toast.error('Missing credentials');
          else {
              try {
                  setIsDisabled(true);
                  await setPersistence(auth, browserSessionPersistence);
                  try {
                      await toast.promise(
                          signInWithEmailAndPassword(auth, email, password).then(
                              (userCredential) => {
                                  const user = userCredential.user;
                                  router.push('/');
                              }
                          ),
                          {
                              loading: 'Verifying credentials...',
                              success: 'Signed in successfully',
                              error: 'Invalid credentials',
                          }
                      );
                  } catch (error) {
                      console.log(error.code, error.message);
                  }
              } catch (error) {
                  console.log(error.code, error.message);
              }
              setIsDisabled(false);
          }
      }; */
  function createMockPromise(result, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (result) {
          resolve(result);
        } else {
          reject("Error: No result provided");
        }
      }, delay || 0);
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    var bool = false;
    if (email === "devs.testing.01@Gmail.com" && password === "Admin123*") {
      bool = true;
    }
    var myPromise = createMockPromise(bool, 2000);
    await toast.promise(
      myPromise.then((result) => {
        router.push("/viewInquiries");
      }),
      {
        loading: "Verifying credentials...",
        success: "Signed in successfully",
        error: "Invalid credentials",
      }
    );
  };

  return (
    <>
      <Head>
        <title>Sign In - Beacon Tutors CRM</title>
        <meta name="description" content="Admin Sign In page" />
      </Head>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.signIn}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="adminInput"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.password}>
                <input
                  className="adminInput"
                  type={inputType}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.eye} onClick={showPassword}>
                  {inputType === "password" ? (
                    <EyeOff color="#C5C8CE" />
                  ) : (
                    <Eye color="#C5C8CE" />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="adminButton"
                disabled={isDisabled}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

SignIn.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
