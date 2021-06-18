import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Wrapper from '../components/wrapper';
import Search from '../components/Search';
import Images from '../components/Images';
import Pagination from '../components/Pagination';

import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '../constants';
import 'react-toastify/dist/ReactToastify.css';

export default function Home({ pictures, error }) {
  const [ searchPic, changeSearchPic ] = useState({});
  const [ data, chageData ] = useState({});
  const [ page, changePage ] = useState(1);
  const [ search, changeSearch ] = useState('');
  const [ err, changeError ] = useState(null);

  useEffect(() => {
    changeError(error)
    if(!error) {
      chageData({...pictures})
      const randomIndex = Math.floor(Math.random() * DEFAULT_PER_PAGE);
      changeSearchPic({...pictures.photos[randomIndex]})
    }
  }, []);

  useEffect(() => {
    if(err) {
      console.log('called error')
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
  }, [err])

  const handleApiCall = async (url) => {
    try {
      const headers = {
        Authorization: process.env.API_KEY
      }
      let response = await axios.get(url, { headers })
      chageData({...response.data})
    } catch(errors) {
      changeError(errors)
    }
  }

  const handleChangeSearchTerm = (str) => {
    changeSearch(str);
    changePage(1);
    const url = `https://api.pexels.com/v1/search?query=${str}&per_page=${DEFAULT_PER_PAGE}&page=1`
    handleApiCall(url)
  };

  const handleChangePagerNumber = (num) => {
    changePage(num)
    const url = search === '' ? 
      `https://api.pexels.com/v1/curated?page=${num}&per_page=${DEFAULT_PER_PAGE}`
      : `https://api.pexels.com/v1/search?query=${search}&per_page=${DEFAULT_PER_PAGE}&page=${num}`
    handleApiCall(url)
  }




  return (
    <Wrapper>
      <Search onClick={handleChangeSearchTerm} searchPic={searchPic} />
      <Images pictures={data.photos} />
      <Pagination total_result={data.total_results} callPage={handleChangePagerNumber} handlePages={page}/>
      <ToastContainer />
    </Wrapper>
  )
}

export const getServerSideProps = async (context) => {  
  try {
    const page = context.query?.page ? context.query.page : DEFAULT_PAGE;
    const headers = {
      Authorization: process.env.API_KEY
    }
    let response = await axios.get(`https://api.pexels.com/v1/curated?page=${page}&per_page=${DEFAULT_PER_PAGE}`, { headers })
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