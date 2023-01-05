import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders text', () => {
    render(<Home />);
    const proteinus = screen.getByText(/Proteinus/i);
    expect(proteinus).toBeInTheDocument();

    const crafts = screen.getByText(/Crafts/i);
    expect(crafts).toBeInTheDocument();

    const future = screen.getByText(/Future/i);
    expect(future).toBeInTheDocument();

    const aboutUs = screen.getByText(/About us/i);
    expect(aboutUs).toBeInTheDocument();

    const infomation = screen.getByText(/Information/i);
    expect(infomation).toBeInTheDocument();

    const media = screen.getByText(/Media/i);
    expect(media).toBeInTheDocument();
  });
});
