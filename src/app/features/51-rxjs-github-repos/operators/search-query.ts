import { OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

export function searchQuery(time: number, initialValue: string): OperatorFunction<string, string> {
  return (input$) => {
    return input$.pipe(
      debounceTime(time),
      distinctUntilChanged(),
      startWith(initialValue)
    );
  };
}
