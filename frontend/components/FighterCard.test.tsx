import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FighterCard } from "./FighterCard";
import { Fighter } from "@/lib/api";

const buildFighter = (): Fighter => ({
  name: "Lina Torres",
  record: "18-2",
  nationality: "USA",
  weightClass: "Featherweight",
});

describe("FighterCard", () => {
  it("renders secondary fighter metadata", () => {
    render(<FighterCard fighter={buildFighter()} side="A" poolAmount={1200n} impliedOdds={72.5} />);

    expect(screen.getByText("Lina Torres")).toBeInTheDocument();
    expect(screen.getByText("18-2")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
    expect(screen.getByText("Featherweight")).toBeInTheDocument();
  });

  it("matches the structural snapshot", () => {
    const { container } = render(<FighterCard fighter={buildFighter()} side="A" poolAmount={1200n} impliedOdds={72.5} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders a zero pool value as 0 XLM", () => {
    render(<FighterCard fighter={buildFighter()} side="B" poolAmount={0n} impliedOdds={25.0} />);

    expect(screen.getByText(/0 XLM/)).toBeInTheDocument();
  });

  it("formats implied odds to one decimal place", () => {
    render(<FighterCard fighter={buildFighter()} side="A" poolAmount={2500n} impliedOdds={2.045} />);

    expect(screen.getByText(/2\.0%/)).toBeInTheDocument();
  });
});
