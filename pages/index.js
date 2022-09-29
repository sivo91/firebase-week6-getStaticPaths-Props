//import { persons } from 'firebase-admin';
import Link from 'next/link';
import Layout from '../components/layout';
import { Entry } from '../lib/data';

export async function getStaticProps() {
  const allData = await Entry();

  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) {


  return (
      <Layout>
        <h1 className='text-center mt-5 text-warning fst-italic'>Firebase</h1>
       
        <div className="uvod">
          {allData ?
           allData.map(({ id,data }) => (
            <Link key={id}  href={`/persons/${id}`}>
              <a className="name border border-secondary p-4">{data.title}</a>
            </Link>
          ))
          : null }
        </div>

        <Link href='/routing'>
        <a className='d-grid gap-2 col-3 mx-auto bg-light mt-5'>
          <h2 className='vstack mx-auto'>Routing page</h2>
        </a>
      </Link>

        <style jsx global>{`
        .uvod {
          position:relative;
          width:100%;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          padding:10px 20px;
        }
        
         .name {
          font-size:25px;
          margin:20px;
          text-decoration:none;
         }
         .name:hover {
          box-shadow:1px 1px 20px gray;
         }
        `}</style>
      </Layout>
  );


}