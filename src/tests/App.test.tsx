import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import UserProvider from '../Context/UserProvider';

describe('Testar se a caixa de input está sendo rederizada', async () => {
  it('teste', async () => {
    render(<UserProvider><App /></UserProvider>);
    const input = screen.getByTestId('name-filter');
   expect(input).toBeInTheDocument()
   
    // const homeLink = screen.getByRole('button', { name: 'Entrar' });
    // expect(homeLink).toBeEnabled();
    // await userEvent.click(homeLink);
    // const con = screen.getByTestId('email-field');
    // expect(con).toBeInTheDocument();
    // expect(con).toHaveTextContent('tryber@teste.com');
  });
});
describe('Testa se a requisicão está sendo feita', () => {
  it('teste', async () => {
    render( <UserProvider><App /></UserProvider>);
    const input = await screen.findByText("Endor");
   expect(input).toBeInTheDocument()
  });
});
describe('Teste se esta filtrando ', async () => {
  it('teste', async () => {
    render(<UserProvider><App /></UserProvider>);
    const input = screen.getByRole("textbox" );
   await userEvent.type(input,'oo' )
    const tattoine =  await screen.findByText('Naboo')
    expect(tattoine).toBeInTheDocument()
  })

  
  });
  describe('Testar se a caixa de filtro está sendo rederizada', async () => {
    it('teste', async () => {
      render(<UserProvider><App /></UserProvider>);
      const input = screen.getByTestId('column-filter');
     expect(input).toBeInTheDocument()
    })})

// await userEvent.type(email1, 'tryber@teste.com');
// await userEvent.type(senha1, '1234567');
// const homeLink = screen.getByRole('button', { name: 'Entrar' });
// expect(homeLink).toBeEnabled();
// await userEvent.click(homeLink);
// const con = screen.getByTestId('email-field');
// expect(con).toBeInTheDocument();
// expect(con).toHaveTextContent('tryber@teste.com');