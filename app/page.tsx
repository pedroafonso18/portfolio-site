import Image from 'next/image';
import ProfileCard from './componentes/profile'
import Head from 'next/head'





export default function Home() {
  return (


    <main>
            <main className="flex flex-col items-center justify-center min-h-screen py-">
             <Head>
            <title>Portfolio</title>
        </Head>
            <ProfileCard />
        </main>
       <video autoPlay muted loop className="background" > <source src="/background.mp4" type="video/mp4" /> </video>
        <div className="square"/>
    </main>
  );
}
