import Link from "next/link"
import data from '../../JSON/data.json'

// getStaticProps from JSON file
export async function getStaticProps(context) {
  return {
    props: { data }
  }
}


const Data = ({ data }) => {

  return (
    <>
      <div className="text-center mt-5"> index.js </div>   
      <br/>

       {
        data.map(item => (
            <Link href={'/routing/' + item.id} key={item.id}> 
               <a>
                 <h2 className="text-center">{item.name}</h2>
               </a>
            </Link>
        ))
       }

     <Link href='/'>
        <a className='d-grid gap-2 col-3 mx-auto bg-light mt-5'>
          <h2 className='vstack mx-auto'>go home</h2>
        </a>
      </Link>
    </>
  )
}


export default Data















