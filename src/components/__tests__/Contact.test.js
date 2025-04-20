import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

//describe is just used to group similar or certiain groups of test cases together . it is optional , nothings great about it .peope just use it
//can have nesting of describe box also
describe('To check the correct rendering of Contact page', () => {
  test('To check whether our contact form loads or not', () => {
    render(<Contact />);
    //Query
    const heading = screen.getByRole('heading');
    //Assert
    expect(heading).toBeInTheDocument();
  });

  test('To check whether button exists or not', () => {
    render(<Contact />);
    //Query
    const button = screen.getByRole('button');
    //Assert
    expect(button).toBeInTheDocument();
  });
  //it is alias of test
  it('To check whether there are 2 input boxes', () => {
    render(<Contact />);
    //it returns a JSX, virtual DOM object , object , reactfiber (all are one and the same).
    //Query
    const inputBoxes = screen.getAllByRole('textbox');
    //Assert
    expect(inputBoxes.length).toBe(2);
  });

  test('To check SUBMIT button exists or not', () => {
    render(<Contact />);
    //Query
    const submit = screen.getByText('Submit');
    //Assert
    expect(submit).toBeInTheDocument();
  });
});
