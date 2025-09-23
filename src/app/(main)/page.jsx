export const dynamic = "force-dynamic";
import AllComp from '@/utils/AllComp';
import { homeDataApi } from '@/utils/apiCall';
import React from 'react'

const Page = async () => {
  const homeDataResponse = await homeDataApi();
  // console.log(homeDataResponse, "---//--\\--");

  if (!homeDataResponse || homeDataResponse.length === 0) {
    return <main>No data found</main>;
  }

  return (
    <>
      {homeDataResponse.map((item, index) => (
        <AllComp key={index} data={item} />
      ))}
    </>
  )
}

export default Page;
