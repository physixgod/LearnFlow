import axios, { AxiosResponse } from 'axios';

export default async function fetchRedditData(query:string) {
  // Define your credentials
  const clientId = 'pri7AqQIGmRNkWAfMHtwbA'; // Reddit client ID
  const clientSecret = 'ZUl_cJw5uOyL3uK9ns-nrPkYsSdUSg'; // Reddit client secret
  const username = 'Natural-Chemistry484'; // Reddit username
  const password = '98477666'; // Reddit password

  // Prepare the data for the POST request
  const data = new URLSearchParams();
  data.append('grant_type', 'password');
  data.append('username', username);
  data.append('password', password);

  // Function to get the access token
  const getAccessToken = async (): Promise<string | null> => {
    try {
      const response: AxiosResponse = await axios.post('https://www.reddit.com/api/v1/access_token', data.toString(), {
        headers: {
          'User-Agent': 'YourAppName by YourUsername', // User-Agent header (replace with your own)
        },
        auth: {
          username: clientId,
          password: clientSecret,
        },
      });
      console.log( response.data.access_token);
    } catch (error) {
      console.error('Error fetching access token:', error.response ? error.response.data : error.message);
      return null;
    }
  };

  // Fetch Reddit posts
  const fetchRedditPosts = async (accessToken: string) => {
    try {
      const response: AxiosResponse = await axios.get(`https://oauth.reddit.com/search?q=${query}&sort=relevance&limit=5`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': 'YourAppName by YourUsername',
        },
      });

      const result = response.data.data.children?.map((item: any) => ({
        title: item.data.title,
        selftext: item.data.selftext,
        id: item.data.id,
      }));
      const response2: AxiosResponse = await axios.get(`https://oauth.reddit.com/comments/${result[0].id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': 'YourAppName by YourUsername',
        },
      });

      const filter = response2.data[1].data.children?.map((item: any) => ({
        body: item.data.body,
      }));
      console.log(filter)
      return [result[0],filter]
    } catch (error) {
      console.error('Error fetching Reddit posts:', error);
    }
    
  };

  

  // Main function to execute the steps
  
    // const accessToken = await getAccessToken();
    // if (accessToken) {
      const finalResult=await fetchRedditPosts('eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzM3MzUxMTU4LjE2MjM0NSwiaWF0IjoxNzM3MjY0NzU4LjE2MjM0NSwianRpIjoiY3o3UWFSZVVJNVpQbndmWDlXQkZ1alptNTdvQW93IiwiY2lkIjoicHJpN0FxUUlHbVJOa1dBZk1IdHdiQSIsImxpZCI6InQyXzFoZnRqZ3piMDYiLCJhaWQiOiJ0Ml8xaGZ0amd6YjA2IiwibGNhIjoxNzM3MjQ3MTU4NTUwLCJzY3AiOiJlSnlLVnRKU2lnVUVBQURfX3dOekFTYyIsImZsbyI6OX0.ALVIhF_O3Aqcgr9uSSFJr7YQ22o89lnL-oeTdk8IjMH9WRgXl_oFKPEYMmv-7nmh064HKJSYpl2zNCpqlNmWr6phYPQ4I4TO9Pvw-2jdT14P9HqaiCWw17hhbHYLWy59AklUa_5qkbg66VkBqDmAlw555u_WmDtoafIkVIACj1pmwxcgNOuh4yjmVVVdeARCe_YMkRRLNZxu_bBd4YNLSv1nY0y8Zzl91J-GCdagIUUXMMnsJlLv4c3MVA_bMxWF27t942CLLSt1uUJkTkuNjp24TFDSNCckKm0eeY4xYpdngVwLiWBniQJSFPbRi1w2XjFWoLv7YBH2YXIFHciprw');
    // }
  console.log("final result: ",finalResult)
  return finalResult
}
