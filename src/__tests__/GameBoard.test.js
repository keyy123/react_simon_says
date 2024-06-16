import {render, screen} from "@testing-library/react";
import GameBoard from "../components/GameBoard/GameBoard";

test("renders GameBoard component", () => {
    render(<GameBoard />)
    const boardElement = screen.getByTestId("simon_board");
    expect(boardElement).toBeInTheDocument();
})

