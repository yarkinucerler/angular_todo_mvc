import {Todo} from './todo.model';

let todo: Todo;

beforeEach(() => {
    todo = new Todo({
        title: 'first todo',
        completed: true
    });
});

describe('Todo', () => {

    it('should create an instance', () => {
        expect(new Todo()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        expect(todo.title).toEqual('first todo');
        expect(todo.completed).toEqual(true);
    });
});