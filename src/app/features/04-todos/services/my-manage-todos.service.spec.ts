import { last } from 'lodash';
import { MyManageTodosService } from './my-manage-todos.service';

function createMyManageTodosService(): MyManageTodosService {
  return new MyManageTodosService();
}

describe('MyManageTodosService', () => {

  describe('create(params)', () => {
    it('should create new todo', (done) => {
      const service = createMyManageTodosService();
      const title = 'my title';
      const description = 'some desc';

      service.create({ title, description });

      service.allTodos$.subscribe((todos) => {
        const lastTodo = last(todos);
        expect(lastTodo.title).toEqual(title);
        expect(lastTodo.description).toEqual(description);
        expect(lastTodo.id).toBeDefined();
        done();
      });
    });
  });

  describe('remove(todo)', () => {
    it('should remove passed todo', (done) => {
      const service = createMyManageTodosService();
      let todoToRemove = null;
      const index = 1;

      let i = 0;
      service.allTodos$.subscribe((todos) => {
        i += 1;
        if (i === 1) {
          todoToRemove = todos[index];
          service.remove(todoToRemove);
        } else if (i === 2) {
          expect(todos).not.toContain(todoToRemove);
          done();
        } else {
          throw new Error('Unknown case');
        }
      });
    });
  });
});
