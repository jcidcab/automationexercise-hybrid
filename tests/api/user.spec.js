import { test, expect } from '@playwright/test';
import { newUser } from '../../data/user.js';

let user;

test.beforeEach(async ({ request }) => {
  user = newUser();
  const create = await request.post('/api/createAccount', { form: user });
  const body = JSON.parse(await create.text());
  expect(body.responseCode).toBe(201);
});

test.afterEach(async ({ request }) => {
  await request.delete('/api/deleteAccount', {
    form: { email: user.email, password: user.password },
  });
});

test('un usuario creado puede verificar su login', async ({ request }) => {
  const verify = await request.post('/api/verifyLogin', {
    form: { email: user.email, password: user.password },
  });
  const body = JSON.parse(await verify.text());

  expect(verify.status()).toBe(200);
  expect(body.responseCode).toBe(200);
  expect(body.message).toBe('User exists!');
});


test('login con contraseña incorrecta', async ({ request }) => {
  const verify = await request.post('/api/verifyLogin', {
    form: { email: user.email, password: 'password malo' },
  });
  const body = JSON.parse(await verify.text());

  expect(verify.status()).toBe(200);
  expect(body.responseCode).toBe(404);
  expect(body.message).toBe('User not found!');
});
