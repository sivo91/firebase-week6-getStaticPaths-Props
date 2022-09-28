
import Link from 'next/link';
import Layout from '../../components/layout';
import { getIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
 
  return {
    props: {
      itemData
    }
  };
}


export async function getStaticPaths() {
  const paths = await getIds();
  return {
    paths,
    fallback: false
  };
}


export default function Entry({ itemData }) {
   const {title, email, phone, birthdate ,related,relatedName} = itemData.data
  return (
    <Layout>
         <h2 className='text-center text-uppercase fw-bold text-decoration-underline mt-5'>person Info</h2>

          <p className="text-center fs-2">Name: <span className='fw-bold text-primary'>{title}</span></p>
          <p className="text-center fs-2">Phone:  {phone}</p>
          <p className="text-center fs-2">DOB: {birthdate}</p>
          <p className="text-center fs-2">Email: {email}</p>
          
         

         <Link href="/">
            <a className="btn btn-primary mt-3 vstack mx-auto w-25 mt-5">← Back to home</a>
         </Link>

   
      { itemData.data.related ? 
         <h2 className='text-center mt-3'>Related person</h2>
       : null
      }
      
      

           { 
            related ?  // destruct - itemData - line 26
            // item.data.related = ukazuje itemData.id teda id cislo
            // itemData.data.relatedName = ukazuje meno kam smeruje link
            <Link key={itemData.data.related} href={`${related}`}>
            <a className="btn btn-warning mt-3 vstack mx-auto w-25 mt-1">Related: {relatedName}</a>
            </Link>
  
           : null
         }
      
    </Layout>
  );
}