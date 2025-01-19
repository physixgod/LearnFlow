const axios = require('axios');
const  f =()=>  {
    // Set your Reddit app credentials and user info
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

// Send the POST request to Reddit API
axios.post('https://www.reddit.com/api/v1/access_token', data.toString(), {
  headers: {
    'User-Agent': 'YourAppName by YourUsername', // User-Agent header (replace with your own)
  },
  auth: {
    username: clientId,
    password: clientSecret
  }
})
  .then(response => {
    console.log('Access Token:', response.data.access_token); // Access token
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
  // try {
  //   const fetchApiReddit = async (q,sort,limit) => {
  //       const response = await axios.get(`https://oauth.reddit.com/search?q=is%20java%20good&sort=relevence&limit=5`, {
  //         headers: {
    
  //           'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzM3MzQ1MjM4LjAzOTYwMSwiaWF0IjoxNzM3MjU4ODM4LjAzOTYsImp0aSI6Ii1heDZKZGNfVnNPaFNkRE9wZ2pzMThXXzdXaWljUSIsImNpZCI6InByaTdBcVFJR21STmtXQWZNSHR3YkEiLCJsaWQiOiJ0Ml8xaGZ0amd6YjA2IiwiYWlkIjoidDJfMWhmdGpnemIwNiIsImxjYSI6MTczNzI0NzE1ODU1MCwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.Wp3r5gBFOihun3VBkWMO0wFmOdnoj6ko1BQXJ6G7Sy6OYMnY3cscj4pAxJmISmj2mB6YdnEVDSrEFoZAE6al1FQ5QJEHs6b4hjVNrNSKVjebiSypsFhdiaiLJ6XeTGTcuXZrxDTylGO2eAuOymssOrdn7JWrjeFxiuyWfz76HPpCAx6noVBMaMr3qq6d6Ypvu77LFE-nlcsSr8KgABmDcH6w-nN1vNUwRPRtHT0y3DnAppVNsmuEJmaz0FBzADc3dTZPlAhg6p86esIZyGXvdXfw08Z_HqClyDul5BWiKmO33-HxZZ_SILMHJ8hsoduO3Y5MOyWnGUsl05EqcsnoVA',  // Use the access
  //           'User-Agent': `ChangeMeClient/0.1 by YourUsername`
  //         }})
  //         const result = response.data.data.children?.map(item => {
  //           return {
  //             title: item.data.title,
  //             selftext: item.data.selftext,
  //             id: item.data.id,
  //           };
  //         });
      
  //         // Log the result
  //         console.log(result);
  //         fetchApiRedditComments(result)
  //       }
  //       fetchApiReddit('java','relevence',10)
  //       const fetchApiRedditComments = async (result) => {
  //           const response = await axios.get(`https://oauth.reddit.com/comments/${result[0].id}`, {
  //             headers: {
        
  //               'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzM3MzQ1MjM4LjAzOTYwMSwiaWF0IjoxNzM3MjU4ODM4LjAzOTYsImp0aSI6Ii1heDZKZGNfVnNPaFNkRE9wZ2pzMThXXzdXaWljUSIsImNpZCI6InByaTdBcVFJR21STmtXQWZNSHR3YkEiLCJsaWQiOiJ0Ml8xaGZ0amd6YjA2IiwiYWlkIjoidDJfMWhmdGpnemIwNiIsImxjYSI6MTczNzI0NzE1ODU1MCwic2NwIjoiZUp5S1Z0SlNpZ1VFQUFEX193TnpBU2MiLCJmbG8iOjl9.Wp3r5gBFOihun3VBkWMO0wFmOdnoj6ko1BQXJ6G7Sy6OYMnY3cscj4pAxJmISmj2mB6YdnEVDSrEFoZAE6al1FQ5QJEHs6b4hjVNrNSKVjebiSypsFhdiaiLJ6XeTGTcuXZrxDTylGO2eAuOymssOrdn7JWrjeFxiuyWfz76HPpCAx6noVBMaMr3qq6d6Ypvu77LFE-nlcsSr8KgABmDcH6w-nN1vNUwRPRtHT0y3DnAppVNsmuEJmaz0FBzADc3dTZPlAhg6p86esIZyGXvdXfw08Z_HqClyDul5BWiKmO33-HxZZ_SILMHJ8hsoduO3Y5MOyWnGUsl05EqcsnoVA',  // Use the access
  //               'User-Agent': `ChangeMeClient/0.1 by YourUsername`
  //             }})
  //             const filter=response.data[1].data.children?.map(item => {
  //               return {
                  
  //                 body: item.data.body
  //               };
  //             });
  //             console.log(filter)
          
              
  //           }
            
  // } catch (error) {
  //   console.error('Error:',error);
    
  // }
  
}
export default f
