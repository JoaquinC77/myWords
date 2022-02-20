import Head from "next/head";
import React from "react";
import { Exit, Footer, Header, Image } from "./styles";
import Link from "next/link";


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Words</title>
        <meta name="description" content="App diccionario Next! by Joaquin C." />
        <link rel="icon" href="images/dictionary.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <Header>
        <div className="icon">
          <Link href={"/"}>
            <Image src="images/dictionary128.png" />
          </Link>
        </div>
        <ul>
          {/* <Link href={"/myvocabulary"}>
            <li>
              <p className="m-0">Mi Vocabulario</p>
            </li>
          </Link>

          <Exit>
            <li>
              Cerrar Session
            </li>
          </Exit> */}
        </ul>
      </Header>

      {children}

      <Footer>
        <h3>Todos los derechos reservados</h3>
        <p>José Joaquín Cabello</p>
        <p>Trainee Developer</p>
      </Footer>
    </>
  );
};

export default Layout;
