import AllComp from '@/utils/AllComp';
import { aboutDataApi } from '@/utils/apiCall';
import React from 'react'

const Page = async () => {
  const aboutDataResponse = await aboutDataApi();
  console.log(aboutDataResponse, "---//--\\--");

  if (!aboutDataResponse || aboutDataResponse.length === 0) {
    return <main>No data found</main>;
  }

  return (
    <>
      {aboutDataResponse.map((item, index) => (
        <AllComp key={index} data={item} />
      ))}
    </>
  )
}

export default Page;
