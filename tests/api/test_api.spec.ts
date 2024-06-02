import { test, expect } from '@playwright/test';
import { getTestData } from '../../utils/utils';

test.describe.parallel('test api', () => {
  const baseURL = 'https://reqres.in'

  let testData: any;
  test.beforeAll(async () => {
    testData = await getTestData();
    console.log("Loaded test data:", testData); 
  });

  test('Simple GET API test', async ({request}) => {
    const response = await request.get(`${baseURL}/api/users2`)
    expect(response.status()).toBe(200)
  }) 
  
  test('Simple POST API test', async ({request}) => {
   console.log(testData.endpoints.getUser) 
   console.log("POST test will run here !!!")
  }) 
  

})

