import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';
import '@testing-library/jest-dom/extend-expect';


describe('Layout', () => {
    it('should render layout component', () => {

        const { getByText } = render(
            <Layout>
                <div>test component</div>
            </Layout>
        );

        expect(getByText('test component')).toBeInTheDocument();
    });

});