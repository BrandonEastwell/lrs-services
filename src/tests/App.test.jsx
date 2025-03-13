import { render, screen } from '@testing-library/react';

import Layout from '../app/Layout.tsx';

describe('App', () => {
    it('renders headline', () => {
        render(<Layout title="React" />);
        screen.debug();
        // check if Layout components renders headline
    });
});