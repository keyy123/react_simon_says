import { screen, render } from "@testing-library/react";
import SimonBtn from "../components/SimonBtn/SimonBtn";


let mockData = {
    color: "none",
    disabled: false
}

test('render Simon Button', () => {
    render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>);
    const buttonElement = screen.getByTestId("simon_button");
    expect(buttonElement).toBeInTheDocument();
})



test('render yellow simon Button', () => {
    mockData.color = "yellow";

    render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>)
    const yellowSimonBtn = screen.getByTestId("yellow_simon_button");
    expect(yellowSimonBtn).toBeInTheDocument();
})

test('render green simon Button', () => {
    mockData.color = "green";

    render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>)
    const greenSimonBtn = screen.getByTestId("green_simon_button");
    expect(greenSimonBtn).toBeInTheDocument();
})

test('will not render pink simon button', () => {
    mockData.color = "pink";

    render(<SimonBtn color={mockData.color} disabled={mockData.disabled}/>);
    const customBtn = screen.getByTestId('custom_simon_button');
    expect(customBtn).toBeInTheDocument()
})