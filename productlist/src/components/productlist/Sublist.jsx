import React, { useState, useEffect } from "react";
import Subcategory from './Subcategory'
import { useParams } from 'react-router-dom';
import { getsubproduct } from "../../apis/Apis";

const Sublist = () => {
  const {categoryId} = useParams();
  
  useEffect(() => {
    (async function invoke() {
      await getsubproduct(categoryId).then((res) => {
        // getsubproduct(res?.data?.category);
      });
    })();
  }, []);
  return (
    <div>
      <Subcategory categoryId={categoryId}/>
      <p>think</p>
    </div>
  )
}

export default Sublist
