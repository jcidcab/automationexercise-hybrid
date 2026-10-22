export function newUser() {
  const unique = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  return {
    name: `qa_user_${unique}`,
    email: `qa_${unique}@example.com`,
    password: 'Test1234!',
    title: 'Mr',
    birth_date: '15',
    birth_month: '6',
    birth_year: '1990',
    firstname: 'Juan',
    lastname: 'Tester',
    company: 'QA Corp',
    address1: 'Av. Providencia 1234',
    address2: 'Depto 56',
    country: 'Chile',
    zipcode: '7500000',
    state: 'Santiago',
    city: 'Santiago',
    mobile_number: '56912345678',
  };
}