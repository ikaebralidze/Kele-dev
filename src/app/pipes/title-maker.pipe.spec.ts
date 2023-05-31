import { TitleMakerPipe } from './title-maker.pipe';

describe('TitleMakerPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleMakerPipe();
    expect(pipe).toBeTruthy();
  });
});
