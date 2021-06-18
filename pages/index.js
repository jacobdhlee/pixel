import axios from 'axios';

import Wrapper from '../components/wrapper';
import Search from '../components/Search';
import Images from '../components/Images';
import Pagination from '../components/Pagination';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../constants';

export default function Home({ pictures, error }) {
  return (
    <Wrapper>
      <Search onClick={(searchVal) => console.log('search value is ', searchVal)}/>
      <Images pictures={pictures.photos} />
      <Pagination total_result={pictures.total_results} callPage={(page) => console.log('page is ', page)}/>
    </Wrapper>
  )
}

export const getServerSideProps = async (context) => {  
  try {
    const page = context.query?.page ? context.query.page : DEFAULT_PAGE;
    const headers = {
      Authorization: process.env.API_KEY
    }
    // console.log(' ', process.env.API_KEY)
    let response = await axios.get(`https://api.pexels.com/v1/curated?page=${page}&per_page=${DEFAULT_PER_PAGE}`, { headers })
    // console.log('query ', response)
    return {
      props: {
        pictures: response.data,
        error: null,
      }
    }
  } catch(error) {
    return {
      props: {
        pictures: null,
        error
      }
    }
  }
}