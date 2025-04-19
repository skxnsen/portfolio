import { helloWorld } from '../src/helloWorld';

describe('Hello World functionality', () => {
    it('should return "Hello, World!"', () => {
        expect(helloWorld()).toBe('Hello, World!');
    });
});