import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../FooterContainer/FooterContainer';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import { fetchListings, myNewPageListingsSelector } from './MyNewPage.duck';

const MyNewPage = () => {
  const dispatch = useDispatch();
  const listings = useSelector(myNewPageListingsSelector);
  console.log('newpage listings', listings)


  useEffect(() => {
    dispatch(fetchListings({}));
  }, []);

  return (
    <div>
      <TopbarContainer />



      <FooterComponent />
    </div>
  )
}

export default MyNewPage