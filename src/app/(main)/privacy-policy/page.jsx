export const dynamic = "force-dynamic";
import AllComp from '@/utils/AllComp';
import { privacyDataApi } from '@/utils/apiCall';
import React from 'react'

const Page = async () => {
  const privacyDataResponse = await privacyDataApi();
//   console.log(contactDataResponse, "---//--\\--");

  if (!privacyDataResponse || privacyDataResponse.length === 0) {
    return <main>No data found</main>;
  }

  return (
    <>
      {privacyDataResponse.map((item, index) => (
        <AllComp key={index} data={item} />
      ))}
    </>
  )
}

export default Page;