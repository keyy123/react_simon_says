import { screen, render } from "@testing-library/react";
import SimonBtn from "../components/SimonBtn/SimonBtn";


let mockData = {
    color: "none",
    disabled: false
}

test('render yellow simon Button', () => {
    mockData.color = "yellow";

    render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>)
    const yellowSimonBtn = screen.getByTestId("yellow_simon_button");
    expect(yellowSimonBtn).toBeInTheDocument();
})

test('render green simon Button',  () => {
    mockData.color = "green";

   render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>)
    
    const greenSimonBtn = screen.getByTestId('green_simon_button') 
    expect(greenSimonBtn).toBeInTheDocument();
})

test('will not render pink simon button', () => {
    mockData.color = "pink";
    expect.assertions(1);
    try {
        render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>);
    }catch(e){
        expect(e).toStrictEqual("illegal color");
    }
});