// Import necessary types from Next.js or next/og
import {  ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Define your API route handler function
export async function GET(req: NextRequest) {
  let URL;
  const imagef = await fetch(`https://picsum.photos/id/1/info`, {
    next: { revalidate: 10 },
  });

  const imageD = await imagef.json();
  URL = `https://picsum.photos/id/${imageD.id}/300`;

  let fetchdesc;
  const res = await fetch(
    `https://alt-text-generator.vercel.app/api/generate?imageUrl=https://picsum.photos/id/1/300`,
    { mode: 'no-cors', next: { revalidate: 10 } },
  );
  fetchdesc = await res.json();

  let data;
  try {
    const fetchData = await fetch(
      'https://randomimagedesc.creativegunfilms.workers.dev/',
      { mode: 'no-cors', cache: 'no-store' },
    );
    data = await fetchData.json();
  } catch (error) {
    // Handle errors appropriately
    console.error('Error fetching data:', error);
  }

  // Construct and return the response
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="bg-gray-50 flex w-full">
          <div tw="flex flex-col md:flex-rows w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span tw="text-indigo-600">{fetchdesc}</span>
            </h2>
            <img height={300} width={300} src={URL} alt='og-img' />
            <div tw="mt-8 flex">
              <div tw="flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">Get started</a>
              </div>
              <div tw="ml-3 flex rounded-md shadow">
                <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 650,
    },
  );
}
