import React from 'react'
import {setupServer} from 'msw/node';
import {http, HttpResponse} from 'msw';
import { baseUrl, sampleReturn } from '../fetch/orders';
import "@testing-library/react";
import {render, fireEvent, screen} from '@testing-library/react'
import { describe } from 'node:test';

const mockedServer = setupServer(
    http.get(`${baseUrl}/Orders`, () => {
        return HttpResponse.json(sampleReturn)
    }),
)

beforeAll(() => mockedServer.listen())
afterEach(() => mockedServer.resetHandlers())
afterAll(() => mockedServer.close())


