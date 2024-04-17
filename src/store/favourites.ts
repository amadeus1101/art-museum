import { CardType } from '../constants/CardType';

export class FavouritesStore {
  private data: CardType[];
  constructor(_data: CardType[]) {
    this.data = _data;
  }
  public add(obj: CardType) {
    this.data.push(obj);
    this.data.sort((a, b) => a.id - b.id);
  }
  public remove(id: number) {
    this.data = this.data.filter((elem) => elem.id !== id);
  }
  public show() {
    return this.data;
  }
}
