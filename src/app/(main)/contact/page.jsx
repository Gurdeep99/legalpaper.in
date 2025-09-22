import AllComp from '@/utils/AllComp';
import { contactDataApi } from '@/utils/apiCall';
import React from 'react'

const Page = async () => {
  const contactDataResponse = await contactDataApi();
//   console.log(contactDataResponse, "---//--\\--");

  if (!contactDataResponse || contactDataResponse.length === 0) {
    return <main>No data found</main>;
  }

  return (
    <>
      {contactDataResponse.map((item, index) => (
        <AllComp key={index} data={item} />
      ))}
    </>
  )
}

export default Page;