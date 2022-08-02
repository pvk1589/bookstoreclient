import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookList from '../BookList';
import BookListItem from '../BookListItem';

jest.mock('../BookListItem');

const mockMethod = jest.div;

describe('BookList', () => {

    beforeAll(() => {
        BookListItem.mockImplementation(() => mockMethod);
    });

    const books = [{
        id: 1,
        title: 'test',
        description: 'desc',
        releaseYear: 2019
    },
    {
        id: 2,
        title: 'test title 2',
        description: 'desc2',
        releaseYear: 2022

    }];

    it('render booklist without errors',() => {
        render(<BookList books={books} />);
        expect(BookListItem).toHaveBeenCalledTimes(3);
        expect(BookListItem).toHaveBeenCallledWith({book: books[0]}, {});
        expect(BookListItem).toHaveBeenCallledWith({book: books[1]}, {});
    })
})


