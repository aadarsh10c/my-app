import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./components/Login";

test('username input should be renderd', () => { 
    render(<Login/>)
    const userInputEle = screen.getByPlaceholderText('username')
    expect(userInputEle).toBeInTheDocument()
 })

 test('password input should be renderd', () => { 
    render(<Login/>)
    const passwordInputEle = screen.getByPlaceholderText('password')
    expect(passwordInputEle).toBeInTheDocument()
 })

 test('button should be renderd', () => { 
    render(<Login/>)
    const buttonEle = screen.getByRole('button')
    expect(buttonEle).toBeInTheDocument()
 })

 test('button should be disabled when input is empty', () => { 
    render(<Login/>)
    const buttonEle = screen.getByRole('button')
    expect(buttonEle).toBeDisabled()
 })

 test('error message should not be visible', () => {
   render(<Login/>)
   const errorMEssage = screen.getByTestId('error')
   expect(errorMEssage).not.toBeVisible()
 })

 test('email input should change' , () => {
   render(<Login/>)
   const dummy= 'dummy'
   const inputEle = screen.getByPlaceholderText('username')
   fireEvent.change( inputEle , {target: {value:dummy}})
   expect(inputEle.value).toBe(dummy)
 })

 test('Butoon should not be disabled when input has values',() => {
   render(<Login/>)
   const username = 'test@gamil.com'
   const password = '1234567'

   const inputEle = screen.getByPlaceholderText('username')
   const passwordInputEle = screen.getByPlaceholderText('password')
   const buttonEle = screen.getByRole('button')

   fireEvent.change(inputEle, {target: { value:username }})
   fireEvent.change(passwordInputEle, {target: { value:password }})
   expect(buttonEle).not.toBeDisabled()

 })

 test('Please wait is not rendered', () => {
   render(<Login/>)
   const buttonEle = screen.getByRole('button')
   expect(buttonEle).not.toHaveTextContent(/Please Wait/i)
 })

