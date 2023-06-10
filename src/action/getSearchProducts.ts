export async function revokeApiKey(value: string) {
    const res = await fetch(`/api/get-search-products/${value}` , {
        next: { revalidate: 0 }, // Revalidate every 60 seconds
      });
    const data = (await res.json()) as {
        [x: string]: any; error?: string 
};
    return data
    // if (data.error) {
    //   throw new Error(data.error);
    // }
  }