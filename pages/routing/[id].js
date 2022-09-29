

/* 
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.id.toString()
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id.toString())
  const data = await res.json()

  return {
    props : { data: data}
  }
} */


import data from '../../JSON/data.json'
import Link from 'next/link'

export function getStaticProps(staticProps) {
  const params = staticProps.params

  return {
    props: {
      data : data.find(item => item.id.toString() === params.id)
    }
  }
}


export function getStaticPaths() {
  return {
     paths: [
      {params: {id: "0"}}, 
      {params: {id: "1"}},
      {params: {id: "2"}}, 
      {params: {id: "3"}},
      {params: {id: "4"}}
            ],
     fallback: false
  }
}

function Page(props) {
  return (
    <>
      <h3 className='mt-5 text-center bg-warning d-grid gap-2 col-2 mx-auto'>Dynamic page</h3>

      <div className="card d-grid gap-2 col-2 mx-auto">
        <h1 className='text-center mt-5 text-primary'>{props.data.name}</h1>
        <h2 className='text-center'>{props.data.color}</h2>
        <h2 className='text-center text-danger'>{props.data.num}</h2>
        <h2 className='text-center text-secondary'>{props.data.state}</h2>
        </div>
      <br/>

      <Link href='/routing'>
        <a className='d-grid gap-2 col-3 mx-auto bg-dark text-light'>
          <h2 className='vstack mx-auto'>go back</h2>
        </a>
      </Link>
      
    </>
  )
}

export default Page